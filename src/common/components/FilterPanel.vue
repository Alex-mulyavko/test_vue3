<template>
  <div class="FilterPanel">
    <button class="resetBtn"
            @click="applyFilter('')"
    >
      Reset
    </button>
    <input type="text"
           :value="currFilter"
           :placeholder="placeholder"
           @change="onChange"
    >
  </div>
</template>

<script lang="ts">

export default {
  name: 'FilterPanel',
  props: {
    placeholder: String,
    currFilter: {
      type: String,
      required: false,
    },
    applyFilter: Function,
  },
  methods: {
    // idk but after upgrading idea from 2020 to 2021 this method have type errors
    onChange($event: { target: { value: string; }; }):void {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if ($event.target.value !== this.currFilter) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this.applyFilter($event.target.value);
      }
    },
  },
};
</script>

<style lang="scss">

.FilterPanel {
  text-align: right;
  box-sizing: border-box;
}

.resetBtn {
  margin: 0 5px 0 0;
}
</style>

