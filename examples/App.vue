<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;
  overflow-x: hidden;
  overflow-y: auto;
  font-size: 14px;
  line-height: 1.42857143;
  color: #333;
  background-color: #fff;
}
</style>
