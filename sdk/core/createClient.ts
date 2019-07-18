import axios, { AxiosPromise } from 'axios'

export interface CreateClientInterface {
  baseURL: string
  headers: any
}

export interface AxiosPromise {}

export const createClient = ({ baseURL, headers }: CreateClientInterface) => {
  return axios.create({
    baseURL,
    headers
  })
}
