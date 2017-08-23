
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function getHtmlConfig(name){
	return {
		title:name,
		filename:'view/'+name+'.html',
		template:'./src/view/'+name+'.html',
		inject:true,
		favicon:'',
		hash:true,
		chunks:[name]	
	};
}

module.exports = {
	entry:{
		'index':['./src/page/index/index.js'],
		'login':['./src/page/login/index.js']
	},
	output:{
		path:__dirname+'/dist',
		publicPath:'/dist/',
		filename:'js/[name].js'
	},
	plugins: [
		
		//解析css成为单独的文件
		new ExtractTextPlugin("css/[name].css"),
	],	
	module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      }
    ]
  },
};