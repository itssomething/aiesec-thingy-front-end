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
  uri: `https://gis-api.aiesec.org/graphql?access_token=${process.env.VUE_APP_GIS_API_ACCESS_TOKEN}`
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
