import axios from 'axios'

const url='http://localhost:5000/api/v1'

export const getinfo=()=>axios.get(url)
export const createinfo=(newpost)=>axios.post(url,newpost)
export const deleteinfo=(id)=>axios.delete(`${url}/${id}`)
export const updateinfo=(id,post)=>axios.patch(`${url}/${id}`,post)
