import {createApp} from 'vue'
import App from './App.vue'


// @ts-ignore
import * as VueRouter from 'vue-router';
import routes from "./config/route.ts";

import Vant from 'vant';
import 'vant/lib/index.css' // 全局引入要添加这个样式

const app = createApp(App);
app.use(Vant);

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

app.use(router)

app.mount('#app')