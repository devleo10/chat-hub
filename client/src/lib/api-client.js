import axios, { Axios } from "axios"
import { HOST } from "@/utils/constants"


export const apiClient = axios.create({
    baseURL:HOST,
})

