
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
        return Math.floor( 5 - this.cardObj.vote_average / 2)
      }
    }

  }
</script>

<template>
  <div class="col mb-3 d-flex justify-content-center">
    
    <div class="card-body c_body my-4">

      <img class="all_poster" v-if="!cardObj.poster_path" :src="store.myPoster" alt="no-pic">
      <img class="all_poster" v-else :src="store.imgUrlSize + cardObj.poster_path" alt="poster">
      
      <div class="info_card">

        <h5 class="card-title">{{ cardObj.title || cardObj.name }}</h5>
        <h6 class="card-title">{{ cardObj.original_title || cardObj.original_name }}</h6>
        <img class="flag" v-if="cardObj.original_language === 'en' " :src="store.imgEng" alt="en">
        <img class="flag" v-else-if="cardObj.original_language === 'it' " :src="store.imgIt" alt="it">
        <p class="text-center" v-else>{{ cardObj.original_language }}</p>
        <p class="text-center description">{{ cardObj.overview }}</p>
        
        <div>
          
          <i 
          v-for="rate in getStar()"
          :key="rate"
          class="fa-solid fa-star"
          >
          </i>

          <i 
          v-for="rate in getStarEmpty()"
          :key="rate" 
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
  img.all_poster, .c_body{
    max-width: 200px;
    min-height: 300px;
  }
  .description{
    overflow: hidden;
    max-height: 100px;
    &:hover{
      overflow-y: auto;
    }
  }
  .c_body{
    position: relative;
    &:hover{
      transition: 1s;
      transform: scale(1.1);
    }
    .info_card{
      height: 1px;
      position: absolute;
      top: 0;

      background-color: rgba(0, 0, 0, 0.6);
      font-weight: bold;

      transition: height 1s;
      opacity: 0;
      &:hover{
        height: 300px;
        opacity: 1;
        transition: 1s;
        box-shadow: 0 10px 20px rgba(241, 176, 13, 0.5);
      }
    }
  }
</style>