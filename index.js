// 백엔드 시작점

const express = require('express'); // express 모듈을 가져옴
const app = express();  // express 앱을 만듬
const port = 5000;

const bodyParser = require('body-parser');  // body-parser(클라이언트가 보내는 정보를 서버가 분석해서 가져올 수 있게 해줌) library를 가져오기 

app.use(bodyParser.urlencoded({extended : true}));  // application/x-www-form-urlencoded 이렇게 된 데이터를 분석해서 가져올 수 있게 해줌
app.use(bodyParser.json()); // application/json 타입을 분석해서 가져올 수 있게 해줌

const config = require('./config/key');
const {User} = require('./models/Users');




const mongoose = require('mongoose');
mongoose.connect(config.mongoDBUrI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('mongoDB Connected...'))
.catch((err) => console.log(err))   


app.get('/', (req, res) => {
    res.send('hello world')
});

app.post('/register', (req, res) => {
    
    // 회원가입할 때 필요한 정보들을 클라이언트에서 가져오면, 그것들을 데이터 베이스에 넣어준다.
    // models 폴더에 있는 유저모델을 가져오기

    const user = new User(req.body)
    // req.body : json형식으로 들어있음
    // Ex : {id : 'hello', pw : 123}
    // 클라이언트가 보내는 정보 -> bodyParser를 통해서 -> json 형식의 req.body으로 서버가 받음

    user.save((err, userInfo) => {
        if(err) {
            return res.json({ success : false, err })
        }
        return res.status(200).json({
            success : true
        })
    })


})




app.listen(port, () => {
    console.log(`example app listening on port ${port}`);
});  
