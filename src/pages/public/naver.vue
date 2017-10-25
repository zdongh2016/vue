<template> 
   	<ul class="naver">
   		<li>
   			<router-link :to="{name:'pageOne'}" active-class="active">页面一</router-link>
   		</li>
   		<li>
   			<router-link :to="{name:'pageTwo'}" active-class="active">页面二</router-link>
   		</li>
   		<li>
   			<router-link :to="{name:'pageThree'}" active-class="active">页面三</router-link>
   		</li>
   		<li>
   			<router-link :to="{name:'pageFour'}" active-class="active">页面四</router-link>
   		</li>
   		<li>
   			<router-link :to="{name:'pageFive'}" active-class="active">页面五</router-link>
   		</li>
   		<li>
   			<router-link :to="{name:'pageSix'}" active-class="active">页面六</router-link>
   		</li>
   	</ul>
</template>
<style lang="scss">
	.naver{
		float:left;
		width:200px;
		background:#ccc;
		height:100%;
		li{
			line-height:40px;
			padding-left:30px;
			a{
            font-size: 16px;
            font-family:'微软雅黑',sans-serif;
				color:#333;
			}
			.active{
				color:#ff0000;
			}
		}
	}
</style>