import {createApp} from 'vue'
import App from './App.vue'
// import {Button, Col, Divider, Form, Icon, NavBar, Row, Tabbar, TabbarItem, Tag, Toast,TreeSelect , Field, CellGroup} from "vant";


// @ts-ignore
import * as VueRouter from 'vue-router';
import routes from "./config/router";

import Vant from 'vant';
import 'vant/lib/index.css' // 全局引入要添加这个样式

const app = createApp(App);
app.use(Vant);

// 按需引入
// app.use(Button);
// app.use(NavBar);
// app.use(Icon);
// app.use(Tabbar);
// app.use(TabbarItem);
// app.use(Toast);
// app.use(Form);
// app.use(Row)
// app.use(Col)
// app.use(Tag)
// app.use(Divider)
// app.use(TreeSelect)
// app.use(Field)
// app.use(CellGroup)

const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

app.use(router)

app.mount('#app')