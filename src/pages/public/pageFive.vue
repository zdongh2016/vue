<template> 
	<div>{{content}}</div>
</template> 
<script type="text/javascript">
	
import store from '../../store';
import vuex from 'vuex';
import { mapState } from 'vuex';
const pageFive = store.state.pageFive;
export default {
    computed: mapState({
	  content: state => pageFive.content
	})
}
</script>