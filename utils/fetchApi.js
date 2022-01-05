import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
      const { data } = await axios.get((url), {
             headers: { 
                  'x-rapidapi-host': 'bayut.p.rapidapi.com',
                  'x-rapidapi-key': '17e5d1a391mshdfd9cc9e6e489dfp1accb8jsn79a4e238cc1e'
             }
      })
      
      return data;
}



