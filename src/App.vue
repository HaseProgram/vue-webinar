<template>
  <div :class="[$style.wrapper]">
    <Header />
    <Field />
  </div>
</template>

<script>
import Header from './components/Header'
import Field from './components/Field'

export default {
  components: {
    Header,
    Field,
  }
}
</script>

<style module lang="scss">
  .wrapper {
    font-family: Arial, Helvetica, sans-serif;
  }
</style>