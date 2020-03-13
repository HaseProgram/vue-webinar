<template>
  <div :class="[$style.wrapper]">
    <div :class="[$style.settings]">
      <!--
        Мы применили тэгу <input> атрибут v-model
        Через него значение инпута реактивно связывается
        со значением "pairs" в data.

        Если бы вместо <input> мы использовали
        какой-нибудь свой компонент, то внутри него мы смогли бы
        обратиться к значению v-model через props: { value },
        а изменить эти данные, если бы сгененрировали событие input с новым значением
        Пример, который устанавливает значение 10 и компонента: $emit('input', 10)
      -->
      <input
        placeholder="Введите количество пар"
        v-model="pairs"
      />
    </div>
    <div :class="[$style.newgame]">
      <Button @clicked="startNewGame">
        <template slot="content">Новая игра ({{ pairs || '0' }})</template>
      </Button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Button from './Button'

export default {
  components: {
    Button,
  },
  data () {
    return {
      pairs: 10,
    }
  },
  methods: {
    ...mapActions('cards', [
      'createNewField'
    ]),
    startNewGame () {
      this.createNewField({ withPair: this.pairs })
    },
  },

  // подробнее про то, что такое mounted() - в ./Card.vue
  mounted () {
    this.createNewField({ withPair: this.pairs })
  }
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