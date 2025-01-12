import Vue from 'vue';
import App from './App.vue';
import './index.css';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less';

Vue.use(Antd);

new Vue({
  el: '#root',
  render: (h) => h(App),
});
