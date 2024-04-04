
<script>

  import { store } from '../../assets/data/store'
  export default {
    props:{
      cardObj : Object
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
  <div class="col mb-3">
    <div class="mt-3">
      <div class="card-body">
        <h5 class="card-title">{{ cardObj.title || cardObj.name }}</h5>
        <h6 class="card-title">{{ cardObj.original_title || cardObj.original_name }}</h6>
        <p class="text-center">{{ cardObj.original_language }}</p>
        <h6 class="card-title">{{ cardObj.vote_average }}</h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>