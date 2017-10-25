import Vue from 'vue';
import Vuex from 'vuex';
import pageOne from './modules/pageOne';
import pageTwo from './modules/pageTwo';
import pageThree from './modules/pageThree';
import pageFour from './modules/pageFour';
import pageFive from './modules/pageFive';
import pageSix from './modules/pageSix';
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
        pageOne: pageOne,
        pageTwo: pageTwo,
        pageThree: pageThree,
        pageFour: pageFour,
        pageFive: pageFive,
        pageSix: pageSix
    }
});