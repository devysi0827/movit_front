import Vue from 'vue'
import App from './App.vue'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import vUploader from 'v-uploader';

/**
 * v-uploader plugin global config
 */
// const uploaderConfig = () => {
//     return {
//         uploadFileUrl: 'http://xxx/upload',
//         deleteFileUrl: 'http://xxx/delete',
//         showMessage: (vue, message) => {
//             //using v-dialogs to show message
//             vue.$vDialog.alert(message, null, {messageType: 'error'});
//         }
//     }
// };

// //install plugin with params
// Vue.use(vUploader, uploaderConfig);


Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
