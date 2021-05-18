<template>
	<div id="app" class="app">
		<Nav />

		<FuncForm />

		<CodeOutput />

	</div>
</template>

<script>
	// functions moved to separate file for easier editing
	import fxBamFunctions from './helpers/fxBamFunctions.mjs'

	import Nav from './components/Nav.vue'
	import FuncForm from './components/FuncForm.vue'
	import CodeOutput from './components/CodeOutput.vue'

export default {
	name: 'FX/BAM Function Generator',
	components: {
		Nav,
		FuncForm,
		CodeOutput
	},

	data() {
		return {
			allFuncs: 	[],
			codeOutput: ''
		}
	},


	computed: {
		activeFunc: null
	},


	methods: {},


	beforeMount() {
		this.allFuncs = fxBamFunctions

		console.log( fxBamFunctions )
		

		// if( null === this.activeFunc ) {
		// 	this.activeFunc = Object.keys( this.allFuncs[0] )
		// }

		// console.log( this.allFuncs )
		
	}

}
</script>