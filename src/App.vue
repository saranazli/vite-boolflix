<script>

  import Main from './components/Main.vue';
  import Header from './components/Header.vue';
  import { store } from './assets/data/store';
  import axios from 'axios';

  export default{

    components: {
      Header,
      Main
    },

    data() {
      return{
        store
      }
    },
    methods:{
      getApi(){
        axios.get(store.apiUrl, {
          params: {
            api_key: '143eeaa2ea390065982ac4cac590ae6c',
            original_title: store.searchingMovie
          }
        })
        .then(  result =>{
          store.cardsMovie = result.data.results;
          console.log(store.cardsMovie)
        })
        .catch( error => {
          console.log('error')
        })
      }
    },
    mounted(){
      this.getApi()
    }
  }

</script>

<template>

  <Header @searchMovie="getApi" />

  <Main />

</template>

<style lang="scss" scoped>

  @use './assets/scss/main.scss';

</style>
