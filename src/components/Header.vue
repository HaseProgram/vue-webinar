<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.settings]"></div>
    <div :class="[$style.newgame]"></div>
  </div>
</template>

<script>

export default {

}
</script>

<style module lang="scss">
@import "../styles/base.scss";

.wrapper {
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: $light-green;
}
</style>