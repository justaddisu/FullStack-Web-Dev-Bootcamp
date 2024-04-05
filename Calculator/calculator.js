const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
})

app.post('/calculator', function(req, res) {

    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const sum = num1 + num2;
    res.send('The result is ' + sum); 
});

app.get('/bmicalculator', function(req, res){
    res.sendFile(__dirname + '/bmiCalculator.html');
})

app.post('/bmiresult', function(req, res){
    const w = parseFloat(req.body.weight);
    const h = parseFloat(req.body.height); 
    const r = w / (h * h);
    res.send('The BMI result is ' + r);
})

app.listen(3000, function(){
    console.log('Server runing on port 3000.');
}) 