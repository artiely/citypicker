<template>
  <div class="index">
    <mt-header fixed title="四级联动-demo-1"></mt-header>
    <div class="page-content">
      <mt-cell title="省市区:" :value="areaString" is-link @click.native="handlerArea"></mt-cell>
      <mt-cell title="街道:" :value="streetString" is-link @click.native="handlerStreet"></mt-cell>
      <mt-popup v-model="areaVisible" class="area-class" position="bottom">
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </mt-popup>
      <mt-popup v-model="streetVisible" class="area-class" position="bottom">
        <mt-picker :slots="slotstree" @change="onStreeChange"></mt-picker>
      </mt-popup>
    </div>
  </div>
</template>

<script>
// 导入数据
import data from '../assets/data/data.json'
let index = 0
let index2 = 0
let index3 = 0
// 初始化省
let province = data.map(res => {
  return res.name
})
// 初始化市
let city = data[index].childs.map(res => {
  return res.name
})
// 初始化区
let area = data[index].childs[index2].childs.map(res => {
  return res.name
})
// 初始化街
let street = data[index].childs[index2].childs[index3].childs.map(res => {
  return res.name
})
export default {
  name: 'index',
  data() {
    return {
      areaVisible: false,
      streetVisible: false,
      areaString: '请选择',
      streetString: '请选择',
      slots: [{
        flex: 1,
        values: province,
        className: 'slot1',
        textAlign: 'left'
      }, {
        divider: true,
        content: '-',
        className: 'slot2'
      }, {
        flex: 1,
        values: city,
        className: 'slot3',
        textAlign: 'left'
      }, {
        divider: true,
        content: '-',
        className: 'slot4'
      }, {
        flex: 1,
        values: area,
        className: 'slot5',
        textAlign: 'left'
      }],
      slotstree: [{
        flex: 1,
        values: street,
        className: 'slot1',
        textAlign: 'center'
      }]
    }
  },
  methods: {
    handlerArea() {
      this.areaVisible = true
    },
    handlerStreet() {
      if (this.slotstree[0].values.length === 0) {
        this.streetString = '无可选街道'
        return
      }
      this.streetVisible = true
    },
    onValuesChange(picker, values) {
      let one = values[0]
      let two = values[1]
      let three = values[2]
      index = province.indexOf(one)
      if (index >= 0 && province.length > 0) {
        city = data[index].childs.map(res => {
          return res.name
        })
        picker.setSlotValues(1, city)
        two = values[1]
      }

      index2 = city.indexOf(two)
      if (index2 >= 0 && city.length > 0) {
        area = data[index].childs[index2].childs.map(res => {
          return res.name
        })
        picker.setSlotValues(2, area)
        three = values[2]
      }
      index3 = area.indexOf(three)
      if (index >= 0 && index2 >= 0 && index3 >= 0) {
        street = data[index].childs[index2].childs[index3].childs.map(res => {
          return res.name
        })
        this.slotstree[0].values = street
      }

      if (index2 === -1 || index3 === -1) {
        this.streetString = '无可选街道'
      }
      this.areaString = values.join(',')
    },
    onStreeChange(picker, values) {
      this.streetString = values.join(',')
    }
  }
}
</script>
<style>
.area-class {
  width: 100%;
  height: 50%;
}
</style>
