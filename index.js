// 백엔드 시작점

const express = require('express'); // express 모듈을 가져옴
const app = express();  // express 앱을 만듬
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://enablee:123456789a@ac-ycdmkvi-shard-00-00.jrxkoeb.mongodb.net:27017,ac-ycdmkvi-shard-00-01.jrxkoeb.mongodb.net:27017,ac-ycdmkvi-shard-00-02.jrxkoeb.mongodb.net:27017/?ssl=true&replicaSet=atlas-umxokq-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('mongoDB Connected...'))
.catch((err) => console.log(err))   


app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});  

// useCreateIndex: true, useFindAndModify: false