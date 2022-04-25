import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';


export const fetchApi = async (Url) => {
    const { data } = await axios.get((Url), {
        headers: {
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RapidAPI_Host,
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RapidAPI_Key
        }
    })
    return data;
}