<template>
  <div class="PaginationPanel">
    <div v-for="page in countOfPages"
         :key="page"
         class="pageItem"
         :class = "(page === currPage + 1) ? 'disabled': 'enabled'"
         @click="setPage(page-1)"
    >{{page}}</div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'PaginationPanel',
  props: {
    countOfPages: Number,
    currPage: Number,
    setPage: Function,
  },
};
</script>

<style lang="scss">

.PaginationPanel {
  text-align: right;
  box-sizing: border-box;
}

.pageItem {
  width: 24px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  margin: 4px;
  color: #2b2b2b;
  cursor: pointer;
  display: inline-block;

  &.disabled {
    color: #cccccc;
    cursor: default;
  }

  &:hover:not(.disabled) {
    color: #707070;
  }
}

</style>

