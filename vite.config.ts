import vue from '@vitejs/plugin-vue';
import styleImport, {VantResolve} from 'vite-plugin-style-import';
import {defineConfig} from "vite";

export default defineConfig({
    plugins: [
        vue(),
        styleImport({
            // resolves: [VantResolve()],
            // //增加的代码
            // libs: [
            //     {
            //         libraryName: 'vant',
            //         esModule: true,
            //         resolveStyle: name => `../es/${name}/style`
            //     }
            // ]
        }),
    ],
    // server: {
    //     host: '0.0.0.0', //ip地址
    //     port: 8080, //端口号
    //     open: true //启动后是否自动打开浏览器
    // }
    server: {
        port: 3001,
    }
})