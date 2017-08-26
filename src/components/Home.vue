<template lang="html">
  <div>
    <mt-button type="danger" size="large">danger</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    this.$ajax.get('getlunbo')
      .then(res => {
        console.log(res)
      }).catch(ree => {
        console.log(err)
      })
  }
}
</script>

<style lang="css">
</style>
