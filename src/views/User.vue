<template>
  <div class="user">
    <mt-header fixed title="user"></mt-header>
    <div class="page-content">
      <p v-for="i in 20" :key="i">{{i}}user</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'user',
  data() {
    return {
    }
  }
}
</script>
