import Vue from 'vue'

import App from './App'

import store from './store'

import 'normalize.css'
import './styles/transition.css'

/**
 * Прежде всего, мы инициализируем наше VUE приложение.
 * Для этого мы импортируем Vue и создаем экземпляр класса:
 */
new Vue({
  el: document.querySelector('#vue-app'), // элемент в /dist/index.html
  components: { App }, // список компонентов, котоые может использовать наше vue приложение
  template: '<App />', // темплейт, который отрендерится для вставки вместо 'el'
  store, // vuex store (подробнее в /store/)
})