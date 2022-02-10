import { FC } from 'react'
import { BsArrowDown, BsArrowUp } from 'react-icons/bs'

interface StockState {
    symbol: string;
    price: number;
    hasPriceRDropped: boolean;
  }

type Props = {
    stock: StockState
}

// ticker price was fixed to 2 decimal points for clarity and icon was provided using React Icons. I attempted to use Unicode arrows but they were unsupported by the font I chose. 

const Ticker: FC <Props> = ({stock}) => {
  return (
    <div className={`price_down_${stock.hasPriceRDropped} bordered_box`}>
        <h2>{stock.symbol} ${stock.price.toFixed(2)} {stock.hasPriceRDropped ? <BsArrowDown size={'16px'}/> : <BsArrowUp size={'16px'}/>}</h2>
    </div>
  )
}

export default Ticker