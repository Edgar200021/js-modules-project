import axios from 'axios'

import { API_KEY } from '../constants/api'

class GetDataApi {
  async getData(url) {
    try {
      const res = await axios.get(url, {
        params: {
          apikey: API_KEY,
          limit: 100,
        },
      })

      return res.data.data.results
    } catch (err) {
      console.log(err.message)
      return false
    }
  }



}

export const getDataApi = new GetDataApi()
