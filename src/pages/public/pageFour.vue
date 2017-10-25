<template> 
	<div>{{content}}</div>
</template> 
<script type="text/javascript">
	
import store from '../../store';
import vuex from 'vuex';
import { mapState } from 'vuex';
const pageFour = store.state.pageFour;
export default {
    computed: mapState({
	  content: state => pageFour.content
	})
}
</script>