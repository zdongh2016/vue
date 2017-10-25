/**
 * @author zhaodonghong
 * @fileoverview routers index.js
 * @date 2017/03/1
 */

import store from '../../../store';
export default (Vue, to)=>{
	store.state.pageSix.content = 'this is page six';
};