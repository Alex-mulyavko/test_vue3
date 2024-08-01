<template>
  <div>
    <h1>This is a Products page</h1>
    <button @click="updateProducts">Generate data</button>
    <div class="ProductsListWrapper">
    <FilterPanel :placeholder="`Manufacturer`"
                 :currFilter="currFilter"
                 :applyFilter="updateFilter"
    />
    <div class="ProductsList">
      <ProductItem
        v-for="(item) in items"
        :key="item.vendorCode"
        :item="item"
      />
    </div>
      <PaginationPanel
        :countOfPages="countOfPages"
        :currPage="currPage"
        :setPage="updatePagination"
      />
    </div>
    <div>Displayed {{filteredCount}} of {{overallCount}} items</div>
  </div>
</template>

<script>
import ProductItem from '@/modules/products/components/ProductItem';
import FilterPanel from '@/common/components/FilterPanel';
import { useStore } from 'vuex';
import { computed, defineComponent } from 'vue';
import PaginationPanel from '@/common/components/PaginationPanel';

export default defineComponent({
  name: 'Products',
  components: { PaginationPanel, ProductItem, FilterPanel },
  setup() {
    const store = useStore();
    return {
      defaultItem: {
        vendorCode: '123123',
        price: 123123,
      },
      items: computed(() => store.getters.products),
      currPage: computed(() => store.getters.currPagination),
      currFilter: computed(() => store.getters.currFilter),
      countOfPages: computed(() => Math.ceil(store.state.products.filteredCount / 5)),
      overallCount: computed(() => store.state.products.overallCount),
      filteredCount: computed(() => store.state.products.filteredCount),
      updatePagination: (newPage) => store.dispatch('setPagination', newPage),
      updateFilter: (newFilterValue) => store.dispatch('setFilter', newFilterValue),
      updateProducts: () => store.dispatch('refreshData'),
      getProducts: () => store.dispatch('getProducts'),
    };
  },
  beforeMount() {
    this.getProducts();
  },
});
</script>

<style lang="scss">

.ProductsListWrapper {
  width: 1200px;
  margin: 0 auto;
}

.ProductsList {
  max-width: 1200px;
  min-height: 200px;
  display: grid;
  margin: 20px auto;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
}
</style>
