import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'
import locale from 'element-ui/lib/locale/lang/en'

Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  uri: 'https://gis-api.aiesec.org/graphql?access_token=e316ebe109dd84ed16734e5161a2d236d0a7e6daf499941f7c110078e3c75493'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
