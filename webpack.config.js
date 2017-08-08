module.exports = {
  entry : './public/app.jsx', //where it should start processing the code
  output: {
    path : __dirname,
    filename : './public/bundle.js'
  },
  //takes an extension array. the file extension that wants to process
  resolve : {
    root: __dirname,//give the react1 folder name,
    alias:{
      Greeter : 'public/components/Greeter.jsx',
      GreeterMessage:'public/components/GreeterMessage.jsx',
      GreeterForm : 'public/components/GreeterForm.jsx'
    },
    extensions :['','.js','.jsx']
  },
  module:{
    loaders:[
      {
        //we are telling the babel-loader to take our files, parse them through
        //react and use es2015 aswell
        //To specify the files we use test
        loader:'babel-loader',
        query :{
          presets : ['react','es2015']
        },
        test:/\.jsx?$/,
        //folders dont want to be parsed
        exclude:/(node_modules|bower_components)/
      }
    ]
  }
}
