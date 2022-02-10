import { FC } from 'react'
import './Clock.css'

// This was a very fun challenge to attempt.

type Props = {
    timeArray: String[];
}

interface NumArr {
    [key: string]: number[][]
}

const Clock: FC <Props> = ({timeArray}) => {

    // Created simple 2 dimensional arrays to populate the clock display. At first I used CSS Grid and table elements but this limited the styling i could add. I chose Flexbox so i could still skew the rows and columns

    let digits: NumArr = {
        '0': [
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1]],
        '1': [
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1]],
        '2': [
            [1, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [1, 1, 1, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 1, 1]],
        '3': [
            [1, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [1, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [1, 1, 1, 1]],
        '4': [
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1]],
        '5': [
            [1, 1, 1, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [1, 1, 1, 1]],
        '6': [
            [1, 1, 1, 1],
            [1, 0, 0, 0],
            [1, 0, 0, 0],
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1]],
        '7': [
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1]],
        '8': [
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1]],
        '9': [
            [1, 1, 1, 1],
            [1, 0, 0, 1],
            [1, 0, 0, 1],
            [1, 1, 1, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1],
            [0, 0, 0, 1]],
        ':': [
            [2],
            [2],
            [1],
            [2],
            [1],
            [2],
            [2]],
        'l': [
            [1],
            [1],
            [1],
            [1],
            [1],
            [1],
            [1]],
        'o': [
            [0],
            [0],
            [0],
            [0],
            [0],
            [0],
            [0]],
        'A': [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [0, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1]],
        'P': [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 0],
            [1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0]],
        'M': [
            [2, 2, 2, 2, 2],
            [2, 2, 2, 2, 2],
            [1, 0, 0, 0, 1],
            [1, 1, 0, 1, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1]],
    }

    // Likely it would be cleaner to break down each mapping into it's own function but I found it easier to visualize the display by writing it all in the same block.


  return (
    <div className='time_container'>
        {timeArray.map((digit, i) => {
            return (
                <div key={i} className='digit_container'>
                {digits[digit as keyof typeof digits].map((row, j) => {
                    return (
                        <div key={`${i}-${j}`} style={{marginLeft: `${10.5 - j*1.5}px`}} className='row_container'>
                            {row.map((cell, k) => {
                                return (
                                    <div key={`${i}-${j}-${k}`} className={`cell cell${cell.toString()}`}></div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            )
        })}
    </div>
  )
}

export default Clock