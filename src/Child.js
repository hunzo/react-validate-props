import React, { useEffect, useState } from "react"
import u from "./Utils"
import propTypes from "prop-types"

function Child({ distance }) {
    const [count, setCount] = useState(distance)
    const tick = () => {
        setCount((prevCount) => prevCount - 1)
    }

    const CountDown = () => {
        let countDownDate = new Date("Jan 1, 2021 00:00:00").getTime()
        let n = new Date().getTime()

        // console.log(countDownDate, n)

        return countDownDate - n
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        // console.log(counterTimer(count))
        CountDown()

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <h1>Child</h1>
            <p> Hi props: {distance} </p>
            <p> Hi props typeOf: {typeof distance} </p>
            <p> {JSON.stringify(u.counterTimer(count))}</p>
            {u.counterTimer(count).time}
            <br />

            <h1>Count Down</h1>

            <p>Count Down: {u.CountDown(CountDown())}</p>
        </div>
    )
}

Child.propTypes = {
    distance: propTypes.number,
}

export default Child
