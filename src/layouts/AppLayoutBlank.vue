<template>
  <div>
    <header class="header" />
    <AppLayoutLinks />
    <slot />
  </div>
</template>

<script>
import AppLayoutLinks from '@/layouts/AppLayoutLinks';

export default {
  name: 'AppLayoutBlank',
  components: { AppLayoutLinks },
};
</script>

<style scoped>
.header {
  height: 5rem;
}
</style>
