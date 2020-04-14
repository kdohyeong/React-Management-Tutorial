const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });                                      //////서버 주소 다른거 허용해주는 부분


app.get('/api/customers', (req, res) => {
    res.send([
            {
            'id': 1,
            'image': 'https://placeimg.com/48/48/1',
            'name': '김도형',
            'birthday': '940303',
            'gender': '남자',
            'job': '대학생'
            },
            {
            'id': 2,
            'image': 'https://placeimg.com/48/48/2',
            'name': '나동빈',
            'birthday': '960508',
            'gender': '남자',
            'job': '프로그래머'
            },
            {
            'id': 3,
            'image': 'https://placeimg.com/48/48/3',
            'name': '이순신',
            'birthday': '961127',
            'gender': '남자',
            'job': '디자이너'
            }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));