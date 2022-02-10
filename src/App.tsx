import { FC, useEffect, useState } from "react";
import { BsCloudHaze, BsCloudRain } from "react-icons/bs";
import { TiWeatherCloudy, TiWeatherPartlySunny, TiWeatherSnow, TiWeatherSunny } from "react-icons/ti"

import "./App.css";
import Clock from "./Clock";
import Ticker from "./Ticker";

/** Helpful interfaces for Alpha Vantage's API */
/** @jsxImportSource @emotion/react */
interface StockData {
  ["Meta Data"]: {
    ["1. Information"]: string;
    ["2. Symbol"]: string;
    ["3. Last Refreshed"]: string;
    ["4. Interval"]: string;
    ["5. Output Size"]: string;
    ["6. Time Zone"]: string;
  };
  ["Time Series (5min)"]: {
    [key: string]: {
      ["1. open"]: string;
      ["2. high"]: string;
      ["3. low"]: string;
      ["4. close"]: string;
      ["5. volume"]: string;
    };
  };
}

interface StockState {
  symbol: string;
  price: number;
  hasPriceRDropped: boolean;
}

const getSuffix = (date: number) => {
  const suffix = ['st', 'nd', 'rd']
  const value = date.toString().split('').pop()
  if (parseInt(value!) > 3 || parseInt(value!) === 0) {
    return 'th'
  } else {
    return suffix[parseInt(value!)-1]
  }
}

const App: FC = () => {
  // PART 2: Implement the current date and time
  const getCurrentDate = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const date = new Date()
    return {
      numdate: `${date.getMonth() + 1} / ${date.getDate()}`,
      date: `${date.getDate()}`,
      day: `${days[date.getDay()]}`,
      month: `${months[date.getMonth()]}`,
      suffix: getSuffix(date.getDate())
    };
  };

  
  
  const getTimeArr = () => {
    let time = new Date().toLocaleTimeString()
    let arr1: String[] = time.split(':')
    let arr2: String[] = arr1[2].split(' ')
    let arr3: String[] = arr2[1].split('')
    let arr4: String[] = arr1[0].split('')
    let arr5: String[] = arr1[1].split('')
    let finalarr: String[] = []
    if (arr4.length > 1) {
      finalarr.push('l')
      finalarr.push(arr4[1])
    } else {
      finalarr.push('o')
      finalarr.push(arr4[0])
    }
    finalarr.push(':')
    finalarr.push(arr5[0])
    finalarr.push(arr5[1])
    finalarr.push(arr3[0])
    finalarr.push(arr3[1])
    return finalarr
  }
  
  const [timeArray, settimeArray] = useState(getTimeArr())

  const stockNames = [`AAPL`, `GOOG`, `MSFT`];

  // PART 3: Use data from the API to populate values
  const fetchStocksFromApi = (stock: String) => {
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=5min&outputsize=full&apikey=HAG13KIF0X10H6C0`
    ).then((res) => res.json()
    ).then((data) => {
      if (data['Meta Data']) {
        let name = data['Meta Data']['2. Symbol']
        let obj = data['Time Series (5min)']
        let currentdata = obj[Object.keys(obj)[Object.keys(obj).length - 1]]
        const object: StockState = {
          symbol: name,
          price: parseInt(currentdata["4. close"]),
          hasPriceRDropped: currentdata["4. close"] < currentdata["1. open"] ? true : false
        }
        if (stock === 'AAPL') {
          setaapl(object)
        } else if (stock === 'MSFT') {
          setmsft(object)
        } else if (stock === 'GOOG') {
          setgoog(object)
        }
      } else {
        console.log('too many requests')
      }
    }).catch(err => {
      console.error(err)
    });
  }

  const getStockData = () => {
    stockNames.forEach((stock) => {
      fetchStocksFromApi(stock)
    })
  }
    
  const [aapl, setaapl] = useState({symbol: 'AAPL', price: 0, hasPriceRDropped: false})
  const [msft, setmsft] = useState({symbol: 'MSFT', price: 0, hasPriceRDropped: false})
  const [goog, setgoog] = useState({symbol: 'GOOG', price: 0, hasPriceRDropped: false})

  interface WeatherState {
    shortForecast: string;
    temperature: number;
  }
  
  const fetchWeatherFromApi = () => {
    fetch(
      `https://api.weather.gov/gridpoints/SLC/105,150/forecast`
    ).then((res) => res.json()
    ).then((data) => {
      let object: WeatherState = {
        shortForecast: data.properties.periods[0].shortForecast, temperature: data.properties.periods[0].temperature
      }
      setweather(object)
    })
  }


  const [weather, setweather] = useState({shortForecast: 'sunny', temperature: 0})


  const [dateinfo, setdateinfo] = useState(getCurrentDate())
  // const [stockinfo, setstockinfo] = useState(getStockArray())

  // PART 4: Update the state of the page every minute
  useEffect(() => {
    getStockData()
    fetchWeatherFromApi()
    setInterval(() => {
      fetchWeatherFromApi()
      getStockData()
      settimeArray(getTimeArr())
      setdateinfo(getCurrentDate())
    }, 60000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const weatherIcon = (weather: string) => {
      if (weather === 'Haze') {
        return <BsCloudHaze />
      } else if (weather === 'Cloudy') {
        return <TiWeatherCloudy />
      } else if (weather === 'Partly Cloudy' || weather === 'Partly Sunny') {
        return <TiWeatherPartlySunny />
      } else if (weather === 'Sunny' || weather === 'Clear') {
        return <TiWeatherSunny />
      } else if (weather === 'Snow' || weather === 'Snowy') {
        return <TiWeatherSnow />
      } else if (weather === 'Rain' || weather === 'Rainy') {
        return <BsCloudRain />
      }
  }
  

  return (
    <>
      {/* <head>
        <title>Lucidpress React Interview</title>
        <link
          rel="icon"
          href="https://d2slcw3kip6qmk.cloudfront.net/marketing/images/LucidpressFavicon.png"
        />
      </head> */}
      <main className="main">
        {/* PART 1: Lay out and roughly style the page. */}
        <section className="current_date">
          <div className="date_info">
            <div className="date_display">
              <div className="header_box bordered_box">
                <h2>{dateinfo.numdate}</h2>
              </div>
              <div className="header_alphabetic">
                <h2 css={{display: 'flex'}}>{dateinfo.day}, {dateinfo.month} {dateinfo.date}<span css={{fontSize: '12pt'}}>{dateinfo.suffix}</span></h2>
              </div>
            </div>
            <div className="weather_display">
              <div className="header_alphabetic">
                <h2 css={{display: 'flex'}}>{weather.shortForecast}</h2>
              </div>
              <div className="header_box bordered_box">
                <h2>{weatherIcon(weather.shortForecast)} {weather.temperature}°</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="current_time">
          <Clock timeArray={timeArray} />
        </section>
        <section className="current_stock">
          <div className="stock_box">
            <Ticker stock={aapl} />
            <Ticker stock={goog} />
            <Ticker stock={msft} />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
