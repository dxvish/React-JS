var express = require('express');
//Creating our APP
var app = express();
app.use(express.static('public'));//can add functionality to our application
app.listen(3000,function(){
console.log("SERVER IS UP AND RUNNING");
});
