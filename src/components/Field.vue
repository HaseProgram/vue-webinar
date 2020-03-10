<template>
  <div :class="[$style.wrapper]">
  </div>
</template>

<script>
export default {
  computed: {
    getCards () {
      return [
        {
          value: '0',
          isVisible: false,
          founded: false,
        },
        {
          value: '1',
          isVisible: false,
          founded: false,
        },
        {
          value: '2',
          isVisible: false,
          founded: false,
        },
      ]
    }

  },
}
</script>


<style module lang="scss">
.wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: flex-start;
  align-items: flex-start;
  padding: 20px 100px;
}
</style>