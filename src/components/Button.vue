<template>
  <div
    :class="[$style.wrapper]"
    @click="onClick"
  >
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  methods: {
    onClick () {
      // метод $emit генерирует кастомное событие 'clicked,
      // которое может обработать родительский компонет
      // через оператор @clicked=""
      this.$emit('clicked')
    }
  }
}
</script>

<style module lang="scss">
@import "../styles/base.scss";

.wrapper {
  display: inline-block;
  padding: 8px 16px;
  background: $dark-green;
  color: rgb(249, 249, 249);
  border-radius: 4px;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: $dark-green-hover;
  }
}
</style>