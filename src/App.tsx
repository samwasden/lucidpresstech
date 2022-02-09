import React, { FC } from "react";

import "./App.css";

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
  [key: string]: {
    price: string;
    hasPriceRDropped: boolean;
  };
}

const App: FC = () => {
  // PART 2: Implement the current date and time
  const getCurrentDate = () => {
    return {
      date: `1 / 1`,
      day: `Monday, January 1`,
      time: "0:00 PM",
    };
  };

  // PART 3: Use data from the API to populate values
  const stockNames = [`AAPL`, `GOOG`, `MSFT`];
  const fetchStocksFromApi = (stock: string) =>
    fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=5min&outputsize=full&apikey=HAG13KIF0X10H6C0`
    ).then((res) => res.json());

  // PART 4: Update the state of the page every minute

  return (
    <>
      <head>
        <title>Lucidpress React Interview</title>
        <link
          rel="icon"
          href="https://d2slcw3kip6qmk.cloudfront.net/marketing/images/LucidpressFavicon.png"
        />
      </head>
      <main>
        {/* PART 1: Lay out and roughly style the page. */}
        <section css={{}}>{getCurrentDate().day}</section>
      </main>
    </>
  );
};

export default App;
