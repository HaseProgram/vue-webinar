<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.content]">
      <span>{{ id }} {{ idx }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    idx: Number,
  },
}
</script>

<style module lang="scss">
@import '../styles/base.scss';

.wrapper {
  width: 150px;
  height: 200px;
  border: 1px solid #aaa;
  color: #fff;
  background: $light-green;
  margin: 10px auto;
  cursor: pointer;

  &:hover {
    background: $light-green-hover;
  }

  &.active, &.active:hover {
    background: $active;
  }

  &.found, &.found:hover {
    background: $founded;
  }

  .content {
    font-size: 82px;
    line-height: 200px;
    vertical-align: middle;
    text-align: center;
    position: relative;

    span {
      position: absolute;
      width: 100%;
      left: 0;
    }
  }
}
</style>