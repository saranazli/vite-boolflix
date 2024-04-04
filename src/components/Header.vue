<script>
  import { store } from '../assets/data/store';

  export default{
    data(){
      return{
        store
      }
    }
  }

</script>

<template>
  
  <div class="d-flex">

    <h1>BOOLFLIX</h1>

    <div>
      <input 
      type="text" 
      class="form-control" 
      placeholder="search" 
      v-model.trim="store.apiParams.query"
      >
    </div>

    <button @click="$emit('startSearch')">
      GO
    </button>

  </div>


</template>

<style lang="scss" scoped>

</style>