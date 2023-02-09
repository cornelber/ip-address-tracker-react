import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)

	useEffect(() => {
		fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res =>
			res.json().then(jsonData => {
				setData(jsonData)
			})
		)
	}, [url])

    return data;
}