import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
//import 'element-plus/dist/index.css'
import './styles/app.css'
import './styles/element/index.scss'
import locale from 'element-plus/es/locale/lang/ru'
import dayjs from "dayjs";
import "dayjs/locale/ru";
dayjs.locale("ru");

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

if (process.env.NODE_ENV == 'development'){
    window._userId = 14317;
    window._token  = '$2y$10$NMJZxfAaRIJpLeroZdnB5OQrFlm/o.2Hyx.mZWtADsWN9eyLanpOy';
}

const app = createApp(App)
app.use(ElementPlus,  {locale})
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
