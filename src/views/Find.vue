<template>
  <div class="find">
    <mt-header fixed title="find"></mt-header>
    <div class="page-content">
      <p v-for="i in 20" :key="i">{{i}}find</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'find',
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
