<template>
<div class="container">
  <s-card type="default" shadow="always" title="card1" size="small">
    <div slot="extra">asda</div>
    adasda
  </s-card>
  <s-card type="default" title="card2" shadow="hover">adasda</s-card>
  <s-card type="success" shadow="hover">adasda</s-card>
  <s-card type="warning" shadow="always">adasda</s-card>
  <s-card type="danger">adasda</s-card>
  <s-card type="info">adasda</s-card>
</div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {}
  },

  mounted() {},
  destroyed() {},

  methods: {},
}
</script>

<style lang="scss">
.container {
  padding: 20px;
  background-color: #ecf0f5;
}
</style>
