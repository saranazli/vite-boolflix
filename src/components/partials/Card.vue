
<script>
  export default {
    props:{
      title: String,
      original_title: String,
      original_language: String,
      vote_average:  String
    }
  }
</script>

<template>
  <div class="col mb-3">
    <div class="mt-3">
      <div class="card-body">
        <h5 class="card-title">Prova</h5>
        <h5 class="card-title">{{ title }}</h5>
        <h6 class="card-title">{{ original_title }}</h6>
        <p class="text-center">{{ original_language }}</p>
        <h6 class="card-title">{{ vote_average }}</h6>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>