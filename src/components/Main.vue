
<script>

  import { store } from '../assets/data/store';
  import Card from './partials/Card.vue';

  export default{
    components: {
      Card
    },
    props:{
      type: String
    },
    data(){
      return{
        store
      }
    },
    computed:{
      title(){
        return this.type === 'movie' ? 'Film' : 'Serie Tv'
      }
    }
  }

</script>

<template>
  
  <div class="text-center my-5 container">
    <h3> {{ title }} </h3>
    <div class="row row-cols-4">
      <Card 
        v-for=" card in store[type]" 
        :key="card.id" 
        :cardObj="card"
      />
    </div>
  </div>

</template>

<style lang="scss" scoped>

  @use '../assets/scss/main.scss';

</style>