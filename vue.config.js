module.exports = {
	chainWebpack: config => {
		config
			.plugin( 'html' )
			.tap( args => {
				args[0].title = 'FX/BAM Function Generator';
				
				return args;
			})
	}
}