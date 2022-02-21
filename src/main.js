import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
// import Card from '../src/utils/card';

const app = createApp(App);

app.use(router);

app.mixin({
    created() {
        console.log('appCreate');
        const myOptions = this.$options.myOptions;
        if(myOptions) {
            console.log('myOptions', myOptions);
        }
    }
})

app.mount('#app');

console.log('custom', window.customElements);




// class Card extends HTMLElement {
//     constructor() {
//         super();
//         console.log(this);

//         let image = document.createElement('img');
//         image.src = "http://www.itcast.cn/2018czgw/images/logo.png";
//         image.classList.add('image');

//         let container = document.createElement('div');

//         container.appendChild(image);

//         //添加到当前的自定义元素
//         this.appendChild(container);
//     }
// }
// window.customElements.define('my-card', Card);