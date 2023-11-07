import Index from "../pages/Index.vue";
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";

//定义一些路由
const routes = [
    {path: '/', component: Index},
    {path: '/Tear', component: Team},
    {path: '/User', component: User},

]
export default routes;