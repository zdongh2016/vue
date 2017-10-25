<template> 
	<div>{{content}}</div>
</template> 
<script type="text/javascript">
	
import store from '../../store';
import vuex from 'vuex';
import { mapState } from 'vuex';
const pageSix = store.state.pageSix;
export default {
    computed: mapState({
	  content: state => pageSix.content
	})
}
</script>