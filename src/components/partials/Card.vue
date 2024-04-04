
<script>

  import { store } from '../../assets/data/store';

  import '@fortawesome/fontawesome-free/css/all.css';
  import '@fortawesome/fontawesome-free/js/all.js';

  export default {

    props:{
      cardObj : Object,
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getStar(){
        return Math.ceil(this.cardObj.vote_average / 2)
      },
      getStarEmpty(){
        return Math.floor( 5- this.cardObj.vote_average / 2)
      }
    }

  }
</script>

<template>
  <div class="col mb-3">
    <div class="mt-3">
      <div class="card-body">
        <img :src="store.imgUrlSize + cardObj.poster_path" alt="poster">
        <h5 class="card-title">{{ cardObj.title || cardObj.name }}</h5>
        <h6 class="card-title">{{ cardObj.original_title || cardObj.original_name }}</h6>
        <img class="flag" v-if="cardObj.original_language === 'en' " :src="store.imgEng" alt="en">
        <img class="flag" v-else-if="cardObj.original_language === 'it' " :src="store.imgIt" alt="it">
        <p class="text-center" v-else>{{ cardObj.original_language }}</p>
        <div>
          <i 
          v-for="n in getStar()"
          :key="n" 
          class="fa-solid fa-star"
          >
          </i>
          <i 
          v-for="n in getStarEmpty()"
          :key="n" 
          class="fa-regular fa-star"
          >
          </i>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  img.flag{
    max-width: 25px;
  }
</style>