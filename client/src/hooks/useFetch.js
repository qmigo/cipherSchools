import axios from 'axios'
import {useState, useEffect} from 'react'

const useFetch = (url)=>{
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        async function fetchData(){
            setIsLoading(true)
            try {
                const {data} = await axios.get(url)
                setData(data)
            } catch (error) {
                setError(error)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchData()
    },[url]) 
    
    const reFetch = async()=>{
        async function fetchData(){
            setIsLoading(true)
            try {
                const {data} = await axios.get(url)
                setData(data)
            } catch (error) {
                setError(error)
            }
            finally{
                setIsLoading(false)
            }
        }
        fetchData()
    }

    return {data, isLoading, error, reFetch}
}

export default useFetch
