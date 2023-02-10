import { useState, useEffect } from 'react'

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
            try {
                const response = await fetch(url)
                const data = await response.json();
                setData(data)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }
        fetchData()
	}, [url])

    return {data, error, loading};
}
