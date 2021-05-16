const express = require('express'); // 설치한 express module을 불러와서 변수(express)에 담습니다.
const path = require('path');
const bodyParser = require('body-parser');
const app = express(); //express를 실행하여 app object를 초기화 합니다.
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const _ = require('lodash')
const multer  = require('multer')
let upload;
let mode;

if(process.env.USERDOMAIN_ROAMINGPROFILE == 'DESKTOP-77BAV49') {
  mode = 'development'
} else {
  mode = 'production'
}
console.log('MODE', mode)

if(mode == 'production') {
  upload = multer({ dest: '/app/mother/public/uploads/' })
} else {
  upload = multer({ dest: 'public/uploads/' })
}

/*************************** express *******************************/
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', function(req, res){
    res.render('index');
});

app.use(expressSession({ secret: 'keyboard cat', cookie: { maxAge: 9999999999 }}))



/****************************** DBCONNECT ************************************/
let mysql = require('mysql');
let con = mysql.createPool({
  host: '175.116.227.108',
  port: 3307,
  user: 'mother',
  password: 'mother1234',
  database: 'mother'
});

// con.connect(function (err) {
//   if (err) {
//     console.error('mysql connection error');
//     console.error(err);
//     throw err;
//   }
// });


/****************************** APIS ************************************/
app.get('/api/test', function(req, res){
    res.send('api success')
})

app.post('/api/login', function(req, res){
    let sql = `SELECT * FROM user WHERE ${req.body.loginType}="${req.body.id}"`
    con.query(sql, function (err, result, fields){
        if(err) throw err;

        if(result[0]) {
            req.session.user ={nick_name:result[0].nick_name, user_type:result[0].user_type};
            res.send(req.session.user)
        } else {
            res.send(null)
        }
    })
})

app.get('/api/user/:nick_name', function(req, res){
  let sql = `SELECT * FROM user WHERE nick_name="${req.params.nick_name}"`
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.json(result)
  });
})

app.post('/api/user', function(req, res){
  let sql = ``;

  switch (req.body.socialLoginType) {
      case 'kakao_id':
          sql = `INSERT INTO user (nick_name, user_type, profile_image, kakao_id) VALUES ("${req.body.nick_name}", "${req.body.user_type}", "${req.body.profile_image_path}", "${req.body.socialId}")`
          break;
      case 'naver_id':
          sql = `INSERT INTO user (nick_name, user_type, profile_image, naver_id) VALUES ("${req.body.nick_name}", "${req.body.user_type}", "${req.body.profile_image_path}", "${req.body.socialId}")`
          break;
      case 'apple_id':
          sql = `INSERT INTO user (nick_name, user_type, profile_image, apple_id) VALUES ("${req.body.nick_name}", "${req.body.user_type}", "${req.body.profile_image_path}", "${req.body.socialId}")`
          break;
  }

  con.query(sql, function (err, result) {
    if (err) throw err;
    res.send('success');
  });
})

app.post('/api/user/join', function(req, res) {
  let sql = `SELECT * FROM user WHERE naver_id="${req.body.email}"`
  con.query(sql, function(err, result, fields) {
    console.log('RESULT', result)
    if(err) throw err;
    if(result.length == 0) {
      sql = `INSERT INTO user (nick_name, user_type, profile_image, naver_id, password) VALUES ("${req.body.nick_name}", "${req.body.user_type}", "${req.body.profile_image_path}", "${req.body.socialId}", "${req.body.password}")`
      console.log('SQL', sql)
      con.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.json(result)
      });
    } else {
      res.send(null)
    }
  });
})

app.post('/api/user/:nick_name', function(req, res) {
  let sql = `UPDATE user SET profile_image="${req.body.profile_image}" WHERE nick_name="${req.params.nick_name}"`
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.json(result)
  });
})

app.get('/api/search-baby/:mom_nick_name/:baby_nick_name', function(req, res){
    let sql = `SELECT * FROM linked WHERE mom_nick_name="${req.params.mom_nick_name}" AND baby_nick_names="${req.params.baby_nick_name}"`
    con.query(sql, function (err, result, fields) {
      if (err) throw err;

      if(result.length == 0){ // 이미 연결된 링크가 있는지 확인

        let sql = `SELECT * FROM user WHERE nick_name="${req.params.baby_nick_name}" AND user_type="baby"`
        con.query(sql, function(err, result, fields) {
          if(err) throw err;

          res.json(result)
        })

      } else {
          res.json([])
      }
    });
})

app.get('/api/linked/mom', function(req, res){ // mom_nick_name은 session으로 교채해야함
    let sql = `SELECT * FROM linked WHERE mom_nick_name="${req.query.mom_nick_name}"`
    con.query(sql, function (err, result, fields) {
      console.log('RESULT', result)
      if (err) throw err;
      res.json(result)
    });
})

app.get('/api/linked/baby', function(req, res){
  let sql = `SELECT * FROM linked WHERE baby_nick_names="${req.query.baby_nick_names}"`
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.json(result)
  });
})

app.post('/api/linked', function(req, res){
    let sql = `INSERT INTO linked (mom_nick_name, baby_nick_names) VALUES ("${req.body.mom_nick_name}", "${req.body.baby_nick_names}")`;
    con.query(sql, function (err, result){
        if(err) throw err;
        res.json(result);
    })
})

app.post('/api/update-linked/:linkedId', function(req, res){
    let sql = `UPDATE linked SET status="${req.body.status}" WHERE id="${req.params.linkedId}"`
    con.query(sql, function(err, result){
        if(err) throw err;
        res.json(result)
    })
})

app.post('/api/delete-linked/:linkedId', function(req, res) {
    let sql = `DELETE FROM linked WHERE id="${req.params.linkedId}"`
    con.query(sql, function(err, result) {
      if(err) throw err;
      res.json(result)
    })
})

app.post('/api/upload', upload.single('profile_image'), function(req, res) {
  console.log('REQ.FILE', req.file)
    if(req.file) {
      console.log('CONDITION PASSED')
        let path = ''
        if(mode == 'production') {
          path = req.file.path.split('/').pop()
          console.log('PATH', path)
        } else {
          path = req.file.path.split('\\').pop()
          console.log('PATH', path)
        }

        res.send(path)
    } else {
        res.send('')
    }
})

app.post('/api/selectQuestGroup', function(req, res){
    let sql = `INSERT INTO select_quest_group (linked_id, success_count, success_gift, date_type, event_time, event_week, start_date)
    VALUES ("${req.body.linked_id}", "${req.body.success_count}", "${req.body.success_gift}", "${req.body.date_type}", "${req.body.event_time}", "${req.body.event_week}", "${req.body.start_date}")`
    con.query(sql, function(err, result){
        if(err) throw err;
        res.json(result)
    })
})

app.post('/api/selectQuest', function(req, res){
    let sql = `INSERT INTO select_quest (title, group_id, start_date) VALUES ("${req.body.title}", "${req.body.group_id}", "${req.body.start_date}")`
    con.query(sql, function(err, result){
        if(err) throw err;
        res.json(result)
    })
})

app.post('/api/selectQuest/:questId', function(req, res){
    let sql = `UPDATE select_quest SET success_state="${req.body.success_state}" WHERE id="${req.params.questId}"`
    con.query(sql, function(err, result){
        if(err) throw err;
        res.json(result)
    })
})

app.post('/api/completeQuest/:questId', function(req, res){
  let sql = `UPDATE select_quest SET complete_sate="2" WHERE id="${req.params.questId}"`
  con.query(sql, function(err, result){
      if(err) throw err;
      res.json(result)
  })
})

app.post('/api/executionQuest/:questId', function(req, res) {
  let sql = `UPDATE select_quest_group SET execution_state="1" WHERE id="${req.body.questGroupId}"`
  con.query(sql, function(err, result) {
    if(err) throw err;

    sql = `UPDATE select_quest SET execution_date="${req.body.execution_date}", execution_pic="${req.body.execution_pic}", complete_sate="1" WHERE id="${req.params.questId}"`
    con.query(sql, function(err, result) {
      if(err) throw err;
      res.json(result);
    })
  })
})

app.get('/api/selectQuestGroup/:linkedId', function(req, res){
    let sql = `SELECT * FROM select_quest_group WHERE linked_id="${req.params.linkedId}"`
    con.query(sql, function (err, result, fields) {
      if (err) throw err;
      res.json(result)
    });
})

app.post('/api/completeQuestGroup/:questGroupId', function(req, res) {
  let sql = `UPDATE select_quest_group SET complete_state="${req.body.state}" WHERE id="${req.params.questGroupId}"`
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.json(result)
  });
})

app.get('/api/selectQuest/:groupId', function(req, res){
  let sql = `SELECT * FROM select_quest WHERE group_id="${req.params.groupId} ORDER BY start_date"`
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    res.json(result)
  });
})

app.post('/api/restartQuest/:questGroupId', function(req, res) {
  let questGroupId = req.params.questGroupId
  let sql = `SELECT * FROM select_quest_group WHERE id="${questGroupId}"`
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    //console.log('RESULT', result[0].id)

    sql = `INSERT INTO end_quest_group (linked_id, success_count, success_gift, date_type, event_time, event_week, start_date, complete_state, execution_state)
    VALUES ("${result[0].linked_id}", "${result[0].success_count}", "${result[0].success_gift}", "${result[0].date_type}", "${result[0].event_time}", "${result[0].event_week}", "${result[0].start_date}", "${result[0].complete_state}", "${result[0].execution_state}")`
    con.query(sql, function(err, result){
        if(err) throw err;

        sql = `DELETE FROM select_quest_group WHERE id="${questGroupId}"`
        con.query(sql, function(err, result){
          if(err) throw err;
        })
    })
  });

  sql = `DELETE FROM select_quest WHERE group_id="${questGroupId}"`
  con.query(sql, function (err, result, fields) {
    if(err) throw err;

    return res.json(result)
  })
})

app.post('/api/disconnection/:linkedId', function(req, res) {
  let sql = `SELECT * FROM select_quest_group WHERE linked_id="${req.params.linkedId}"`;
  con.query(sql, function(err, result, fields){
    if(err) throw err;

    if(result[0]) {
      sql = `DELETE FROM select_quest WHERE group_id="${result[0].id}"`
      con.query(sql, function(err, result, fields){
        if(err) throw err;
      })
    }
  })

  sql = `DELETE FROM select_quest_group WHERE linked_id="${req.params.linkedId}"`
  con.query(sql, function(err, result, fields){
    if(err) throw err;
  })

  sql = `DELETE FROM linked WHERE id="${req.params.linkedId}"`
  con.query(sql, function(err, result, fields){
    if(err) throw err;
  })

  res.send('success')
})

process.on('uncaughtException', (err) => {
  console.log('ERR', err)
})

/****************************** App start ************************************/
app.listen(9102, function(){
  console.log('server on! http://localhost:9102');
});
