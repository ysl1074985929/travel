<template>
  <div id="app">
      <!-- :exclude="/组件1|组件2/" ，意思是组件1，组件2被排除在外，
        这两个组件不使用keep-alive，所以在组件1和2中，执行ajax请求还是用mounted就好 -->
      <keep-alive :exclude="/Detaile|Weekend/">
      <!-- <keep-alive exclude="Detaile"> -->
        <router-view></router-view>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">

</style>
