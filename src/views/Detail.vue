<template>
  <div class="detail">
    <mt-header fixed title="detail">
    <mt-button @click="back" icon="back" slot="left">返回</mt-button>
    </mt-header>
    <div class="page-content">
      <p v-for="i in 20" :key="i">{{i}}detail</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {}
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>
