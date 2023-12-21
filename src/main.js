import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Practice from './components/Practice.vue'

createApp(HelloWorld).mount('#app')
createApp(Practice).mount('#app1')
