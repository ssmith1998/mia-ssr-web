<template>
  <div class="wrapper">
      <p>{{workId}}</p>
  </div>
</template>

<script>
export default {
data() {
    return {
        workId: this.$route.params.id
    }
},
mounted () {
    console.log("id",this.workId);
}
}
</script>

<style>

</style>