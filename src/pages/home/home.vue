<template>
	<div>		
		home
	</div>
</template>

<script>

export default {
	data () {
		return {
		activeIndex: '1',
		}
	},
	methods: {
		handleSelect (id) {
		console.log(id)		
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.navigation>li>a {
		text-decoration:none;
	}
</style>
