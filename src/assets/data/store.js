
import { reactive } from "vue";

export const store = reactive ({
  //per il metodo di get movie e get tv
  // cardsMovie: [],
  // cardsSeries: [],
  // per il metodo di get api con type
  // searchingMovie: '',
  apiUrl: 'https://api.themoviedb.org/3/search/',
  imgUrlSize: 'http://image.tmdb.org/t/p/w300',
  apiParams: {
    api_key: '143eeaa2ea390065982ac4cac590ae6c',
    query: '',
    original_language: 'it-IT',
  },
  movie: [],
  tv: [],
  imgEng: 'img/en.png',
  imgIt: 'img/it.png'
})