/**
 * @author zhaodonghong
 * @fileoverview routers user.js
 * @date 2017/02/27
 */
import stroe from '../../store';
import pageOne from '../../pages/public/pageOne.vue';
import pageTwo from '../../pages/public/pageTwo';
import pageThree from '../../pages/public/pageThree';
import pageFour from '../../pages/public/pageFour';
import pageFive from '../../pages/public/pageFive';
import pageSix from '../../pages/public/pageSix';
import stage from '../../pages/public/stage';
export default  [
	{
		path: '/', 
		component: stage,
		name: 'stage',
		meta: {
			title: '首页',
			needCompetence: true
		} 
	},
	{
		path: '/pageOne', 
		component: pageOne,
		name: 'pageOne',
		meta: {
			title: '页面一',
			needCompetence: true
		} 
	},

	{
		path: '/pageTwo', 
		component: pageTwo,
		name: 'pageTwo',
		meta: {
			title: '页面二',
			needCompetence: true
		} 
	},
	{
		path: '/pageThree', 
		component: pageThree,
		name: 'pageThree',
		meta: {
			title: '页面三',
			needCompetence: true
		} 
	},
	{
		path: '/pageFour', 
		component: pageFour,
		name: 'pageFour',
		meta: {
			title: '页面四',
			needCompetence: true
		} 
	},
	{
		path: '/pageFive', 
		component: pageFive,
		name: 'pageFive',
		meta: {
			title: '页面五',
			needCompetence: true
		} 
	},
	{
		path: '/pageSix', 
		component: pageSix,
		name: 'pageSix',
		meta: {
			title: '页面六',
			needCompetence: true
		} 
	}
];