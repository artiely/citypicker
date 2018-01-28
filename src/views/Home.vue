<template>
  <div class="home">
    <!-- <mt-header fixed title="固定在顶部"></mt-header> -->
    <transition :name="transitionName" >
      <keep-alive>
        <router-view class="RouterView" />
      </keep-alive>
    </transition>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="1">
        <i-icon slot="icon" name="icon-Artboard9" symbol></i-icon>
        demo1
      </mt-tab-item>
      <mt-tab-item id="2">
        <i-icon slot="icon" name="icon-Artboard3" symbol></i-icon>
        demo2
      </mt-tab-item>
      <mt-tab-item id="3">
        <i-icon slot="icon" name="icon-Artboard1" symbol></i-icon>
        发现
      </mt-tab-item>
      <mt-tab-item id="4">
        <i-icon slot="icon" name="icon-Artboard4" symbol></i-icon>
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      selected: '1',
      transitionName: 'slide-left'
    }
  },
  watch: {
    selected: {
      handler(val, oval) {
        switch (val) {
          case '1':
            this.$router.push('/index')
            break
          case '2':
            this.$router.push('/order')
            break
          case '3':
            this.$router.push('/find')
            break
          case '4':
            this.$router.push('/user')
            break
        }
        if (oval > val) {
          this.transitionName = 'slide-right'
        } else {
          this.transitionName = 'slide-left'
        }
      }
    }
  },
  methods: {
    selectPath() {
      let urlmark = this.$route.path
      switch (urlmark) {
        case '/home':
          this.selected = '1'
          break
        case '/':
          this.selected = '1'
          break
        case '/index':
          this.selected = '1'
          break
        case '/order':
          this.selected = '2'
          break
        case '/find':
          this.selected = '3'
          break
        case '/user':
          this.selected = '4'
          break
      }
    }
  },
  mounted() {
    this.selectPath()
  }
}
</script>
