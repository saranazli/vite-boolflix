
import { reactive } from "vue";

export const store = reactive ({
  apiUrl: 'https://api.themoviedb.org/3/search/movie',
  apiUrlSeries: 'https://api.themoviedb.org/3/search/tv',
  cards: [],
  queryParams: {
    apy_key: '143eeaa2ea390065982ac4cac590ae6c',
  }
})