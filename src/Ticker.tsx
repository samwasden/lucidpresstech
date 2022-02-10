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

const Ticker: FC <Props> = ({stock}) => {
  return (
    <div className={`price_down_${stock.hasPriceRDropped} bordered_box`}>
        <h2>{stock.symbol} ${stock.price.toFixed(2)} {stock.hasPriceRDropped ? <BsArrowDown size={'16px'}/> : <BsArrowUp size={'16px'}/>}</h2>
    </div>
  )
}

export default Ticker