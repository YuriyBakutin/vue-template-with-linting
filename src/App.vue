<template>
  <VueTemplateWithLinting />
</template>

<script>
import VueTemplateWithLinting from './components/VueTemplateWithLinting.vue';

export default {
  name: 'app',
  components: {
    VueTemplateWithLinting,
  },
};
</script>

<style lang="scss">
#app {
  margin: 0px;
}
</style>
