<template>
  <div :class="[$style.wrapper, {
    [$style.active]: isActive, // используя css модули, становится возможно
    [$style.found]: isFound    // использовать условия при добавлении классов
  }]">
    <div :class="[$style.content]">
      <!--
        Ниже идет обертка <transition> для анимации.
        У данной обертки есть имя fade, основываясь на котором
        Vue ищет классы анимации. У нас они находятся в файле '/styles/transition.css'

        Анимация начинает выпоняться, когда срабатывает условный рендеринг v-if.

        Чтобы анимация работала, необходимо к элементам DOM добавить атрибут key.
        Этот атрибут помогает изменить порядок следования элементов, основываясь на изменении порядка ключей.
        Если убрать key, то Vue применит алгоритм, минимизирующий перемещение элементов и анимации не будет.
      -->
      <transition name="fade">
        <span v-if="card.isVisible" key="yes">{{ card.value }}</span>
        <span v-else key="no">?</span>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      // храним идентификатор таймера,
      // чтобы сбросить этот таймер при уничтожении компонента
      timer: null
    }
  },
  props: {
    id: Number,
    idx: Number,
  },
  computed: {
    // геттеры vuex (подробнее смотри в /store/cards.js)
    ...mapGetters('cards', [
      'getCards',
      'getActive'
    ]),
    card () {
      return this.getCards[this.idx]
    },
    isActive () {
      return this.idx === this.getActive
    },
    isFound () {
      return this.card.founded
    }
  },
  methods: {
    // действия vuex (подробнее смотри в /store/cards.js)
    ...mapActions('cards', [
      'openCard',
      'closeCard',
      'setActive',
      'setFounded',
    ]),
    open () {
      if (this.card.isVisible) {
        return
      }

      const currentActiveIdx = this.getActive
      if (currentActiveIdx >= 0) {
        if (this.card.value !== this.getCards[currentActiveIdx].value) {
          this.timer = setTimeout(() => {
            this.close(currentActiveIdx)
            this.close(this.idx)
          }, 1000)
        } else {
          this.setFounded({ idx: this.idx })
          this.setFounded({ idx: currentActiveIdx })
        }
        this.setActive({ idx: -1 })
      } else {
        this.setActive({ idx: this.idx })
      }
      this.openCard({ idx: this.idx })
    },
    close (idx) {
      this.closeCard({ idx })
    },
  },

  /**
   * ниже идут события жизненного цикла (mounted и beforeDestroy)
   * каждый компонент имеет свой жизненный цикл, примерно выглядящий так:
   * - до создания (beforeCreate)
   * - после создания (created)
   * 
   * - после компиляции, но до внедрения в DOM (beforeMount)
   * - после внедрения в DOM (mounted)
   * 
   * - перед обновлением виртуального DOM (beforeUpdate)
   * - после внесения изменений (updated)
   * 
   * - перед уничтожением (beforeDestroy)
   * - после уничтожения (destroyed) 
   */


  mounted () {
    // когда создан вирутальный дом - навешиваем событие клика на наш компонент
    // this.$el = <div :class="[$style.wrapper"]></div> - наш внешний элемент компонента
    this.$el.addEventListener('click', this.open)
  },

  beforeDestroy () {
    // перед тем как разрушить компонент - сбрасываем таймер (чтобы у нас не закрылась уже несуществующая карточка)
    clearTimeout(this.timer)

    // и убираем обработчик клика
    this.$el.removeEventListener('click', this.open)
  }
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