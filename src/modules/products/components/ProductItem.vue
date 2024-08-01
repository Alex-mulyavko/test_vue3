<template>
  <div class="ProductItem">
    <p>Name: {{item.productName}}</p>
    <p>Price: ${{item.price}}</p>
    <p>Manufacturer: {{item.manufacturer}}</p>
    <p>Vendor code: {{item.vendorCode}}</p>
    <p>Available: {{item.available ? 'yes' : 'no'}}</p>
  </div>
</template>

<script lang="ts">

export default {
  name: 'ProductItem',
  props: {
    item: Object,
  },
};
</script>

<style lang="scss">

.ProductItem {
  text-align: left;
  display: inline-block;
  box-sizing: border-box;
  width: 220px;
  min-height: 200px;
  padding: 5px 10px;
  margin: 0 0 0 5px;
  background: #ccc;
  border-radius: 5px;
  border: 1px solid #000
}
</style>

