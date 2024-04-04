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
  
  <div class="d-flex justify-content-between">

    <h1 class="me-4">BOOLFLIX</h1>

    <div>
      <input 
      type="text" 
      class="form-control my_input" 
      placeholder="search" 
      v-model.trim="store.apiParams.query"
      >
    </div>

    <button class="ms-4" @click="$emit('startSearch')">
      GO
    </button>

  </div>


</template>

<style lang="scss" scoped>

  @use '../assets/scss/main.scss';

  input.my_input{
    line-height: 30px;
    border: solid;
    border-color: palevioletred;
    font-size: 20px;
  }

</style>