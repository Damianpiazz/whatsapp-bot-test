import axios from 'axios'

const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

export const apiGet = async (endpoint: string) => {
    const res = await axios.get(`${API_URL}${endpoint}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        },
        timeout: 10000
    })

    return res.data
}

export const apiPost = async (endpoint: string, data: any) => {
    const res = await axios.post(`${API_URL}${endpoint}`, data, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            'Content-Type': 'application/json'
        },
        timeout: 10000
    })

    return res.data
}