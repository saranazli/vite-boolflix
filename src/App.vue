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

      getApi(type){
        axios.get(store.apiUrl + type, {
          params : store.apiParams
        })
        .then( res => {
          store[type] = res.data.results
        })
      },
      startSearch(){
        this.getApi('movie')
        this.getApi('tv')
      }
    },
    mounted(){
      this.startSearch()
    }
  }

</script>

<template>

  <Header @startSearch="startSearch" />

  <Main type="movie" v-if="store.movie.length > 0"/>
  <Main type="tv" v-if="store.tv.length > 0"/>


</template>

<style lang="scss" scoped>

  @use './assets/scss/main.scss';

</style>
