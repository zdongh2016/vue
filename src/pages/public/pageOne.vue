<template> 
	<div>{{content}}</div>
</template> 
<script type="text/javascript">
	
import store from '../../store';
import vuex from 'vuex';
import { mapState } from 'vuex';
const pageOne = store.state.pageOne;
export default {
    computed: mapState({
	  content: state => pageOne.content
	})
}
</script>