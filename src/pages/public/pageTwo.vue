<template> 
	<div>{{content}}</div>
</template> 
<script type="text/javascript">
	
import store from '../../store';
import vuex from 'vuex';
import { mapState } from 'vuex';
const pageTwo = store.state.pageTwo;
export default {
    computed: mapState({
	  content: state => pageTwo.content
	})
}
</script>