<template> 
	<div>{{content}}</div>
</template> 
<script type="text/javascript">
	
import store from '../../store';
import vuex from 'vuex';
import { mapState } from 'vuex';
const pageThree = store.state.pageThree;
export default {
    computed: mapState({
	  content: state => pageThree.content
	})
}
</script>