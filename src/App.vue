<template>
	<Todo/>
</template>

<script>
	import Todo from '@/components/Todo.vue'
	export default {
		name: 'App',
		components: {
			Todo
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}
	body{
		background: linear-gradient(90deg, #000000, #111111, #222222, #333333);
		background-attachment: fixed;
	}
	#app{
		display: flex;
		flex-direction: column;
		height: 100vh;
		color: #2C3E50;
		font-family: Avenir, Helvetica, Arial, sans-serif;
	}
</style>