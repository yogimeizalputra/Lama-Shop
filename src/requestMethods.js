import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzgyYjFiOTBjMTQ4YzkyMWEzYTBmMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTM2NzgwMiwiZXhwIjoxNjQxNjI3MDAyfQ.vHm34wMnvvskIZVekEOBm5Osz3O_BrZk8IpBNi9c_BQ';

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})