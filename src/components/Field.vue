<template>
  <div :class="[$style.wrapper]">
    <Card
      v-for="(card, index) in getCards"
      :key="index"
      :id="card.id"
      :idx="index"
      :class="[$style.card]"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Card from './Card'

export default {
  components: {
    Card,
  },
  computed: {
    // подробнее в /store/cards.js
    ...mapGetters('cards', [
      'getCards'
    ]),
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