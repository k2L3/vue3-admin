import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index.ts';
import store from './store/index.ts';
const app = createApp(App)

app.use(store).use(router).mount('#app')
