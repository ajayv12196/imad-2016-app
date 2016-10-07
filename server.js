var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter =0;
app.get('/counter', function(req ,res){
    
    counter =counter+1;
    res.send(counter.toString()); //we cant send no thats y we r convrtng it to string
});


app.get('/article-one', function(req, res){
    res.sendFile(path.join(__dirname, 'ui', 'article-on.html'));
    
});

app.get('/article-two', function(req, res){
    //r
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'))
});

app.get('/article-three', function(req, res){
    //res.send("Article three is requested and will be served");
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'))
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
  
app.get('/ui/aj.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'aj.jpg'));
});

var names[];

app.get('/submit-name/:name', function (req, res) {
    
    //get the name from the request
     
    var name = req.params.name;
    
    names.push(name);
    /*as the names is an object and we cant send it directly as the server accepts string 
    here comes JSON(javascript orientation notation) in the picture 
    jSO converts the js object to strings*/
    res.send(JSON.stringfy(names));
     
})




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
