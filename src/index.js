
import Vue from 'vue';
import App from './app.vue';
import store from './store';
import vueRouter from 'vue-router';
import drouters from './routers/routerModules';
import beforeRouter from './routers/beforeRouter';
import vueResource from 'vue-resource';
Vue.config.devtools = true;
Vue.use(vueRouter);
Vue.use(vueResource);
const router = new vueRouter({
	hashbang: false, 
	mode:'history',
  	routes: drouters
});
router.beforeEach((to, from, next) => {
    //设置title
    document.title = to.meta.title;

    if( beforeRouter[to.name] ){
        beforeRouter[to.name](Vue, to, from);
    }
    next();
   
});

let vueApp = new Vue({
	store,
    el: '#ger-ui',
   	template: '<App/>',
    components: { App },
   	router
});