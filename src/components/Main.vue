
<script>

  import { store } from '../assets/data/store'

  export default{
    data() {
      return{
        store
      }
    },
    methods:{
      getApi(){
        axios.get(store.apiUrl)
        .then(result=>{
        this.store.cards = result.data.results;
        console.log(this.store.cardsList);
        })
        console.log(store.cards)
        .catch(error => {
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