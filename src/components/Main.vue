
<script>

  import { store } from '../assets/data/store';
  import Card from '../components/partials/Card.vue';

  export default{
    components: {
      Card
    },
    data(){
      return{
        store
      }
    }
  }

</script>

<template>
  
  <div class="text-center my-5 container">
    <div class="row row-cols-4">
      <Card 
        v-for=" (cardM, index) in store.cardsMovie" 
        :key="index" 
        :title="cardM.title"
        :original_title="cardM.original_title"
        :original_language="cardM.original_language"
        :vote_average="cardM.vote_average "
      />
    </div>
  </div>

</template>

<style lang="scss" scoped>

  @use '../assets/scss/main.scss' as*;

</style>