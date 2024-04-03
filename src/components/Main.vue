
<script>

  import { store } from '../assets/data/store'

  export default{
    data() {
      return{
        store
      }
    }
  }

</script>

<template>
  
  <div class="gen">
    heho
    <h1>{{ store.counter }}</h1>
  </div>

</template>

<style lang="scss" scoped>

  @use '../assets/scss/main.scss' as*;

  .gen{
    background-color: $bg-color;
  }

</style>