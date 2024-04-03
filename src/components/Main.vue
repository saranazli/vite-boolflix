
<script>

  import { store } from '../assets/data/store';
  import axios from 'axios';

  export default{
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
            query: 'cenerentola'
          }
        })
        .then(  result =>{
          this.store.cards = result.data
          console.log(store.cards)
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
  
  <div class="gen">
    <h1>{{ store.counter }}</h1>
  </div>

</template>

<style lang="scss" scoped>

  @use '../assets/scss/main.scss' as*;

  .gen{
    background-color: $bg-color;
  }

</style>