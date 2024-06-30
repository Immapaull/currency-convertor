import { useEffect } from "react";
import { useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    let D = new Date(Date.now())
    let year = D.getFullYear()
    let month = D.getMonth()
    let date = D.getDate()
    let monthl = D.getMonth().toString().length
    if (monthl == 1) {
        month = `0${month}`
    }
    let datel = date.toString().length
    if (datel == 1) {
        date = `0${date}`
    }
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${year}-${month}-${date}/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
    }, [currency])
    console.log(data)
    return data
}

export default useCurrencyInfo