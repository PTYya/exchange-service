var express = require('express');
var router = express.Router();
var mysql=require('./../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login',function(req,res,next){
	var userName=req.body.username;
	var password=req.body.password;
	var usertype=req.body.usertype;
	var query='SELECT * FROM user WHERE username='+'"'+userName+'"'+' AND password='+mysql.escape(password)+'AND usertype='+'"'+usertype+'"';
	mysql.query(query,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		var user=rows[0];		
		if(!userName){
			res.json({status:1,message:"用户名为空"})
		}
		else if(user){
			res.json({status:0,message:"登陆成功"})
		}
		 else if(!user){
			res.json({status:1,message:"用户名或密码错误"})
		}
	})
});

router.post('/register',function(req,res,next){
	var username=req.body.username;
	var password=req.body.password;
	var usertype=req.body.usertype;
	var registerquery='INSERT INTO user (username,password,usertype) values('+'"'+username+'"'+ ','+password+','+'"'+usertype+'"'+')';
	mysql.query(registerquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}	
		res.json({status:0,message:"注册成功请登录"})
	})
	
});

router.post('/recommend',function(req,res,next){
	var name=req.body.name;
	var score=req.body.score;
	var grade=req.body.grade;
	var major=req.body.major;
	var recommendquery='INSERT INTO student (name,score,grade,major) values('+'"'+name+'"'+','+score+',"'+grade+'","'+major+'")';
	mysql.query(recommendquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}	
		res.json({status:0,message:"提交成功"});
	})
});

router.get('/recommend',function(req,res,next){
	var studentquery="SELECT * FROM student ORDER BY score DESC limit 5";
	mysql.query(studentquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		var students=rows;
		res.json({status:0,students:students});
	})
});

router.get('/getusers',function(req,res,next){
	var getuserquery='SELECT * FROM user';
	mysql.query(getuserquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		var users=rows;
		res.json({status:0,users:users});
	})
});

router.post('/adduser',function(req,res,next){
	var username=req.body.username;
	var password=req.body.password;
	var usertype=req.body.usertype;
	var adduserquery='INSERT INTO user (username,password,usertype) values('+'"'+username+'"'+ ','+password+','+'"'+usertype+'"'+')';
	mysql.query(adduserquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		res.json({status:0,message:"添加成功"})
	})
});

router.post('/deleteuser',function(req,res,next){
	var username=req.body.username;
	var usertype=req.body.usertype;
	var deleteuserquery='DELETE FROM user WHERE username='+mysql.escape(username)+'AND usertype='+mysql.escape(usertype);
	mysql.query(deleteuserquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		res.json({status:0,message:"删除成功"});
	})
});

router.get('/getschools',function(req,res,next){
	var getschoolquery='SELECT * FROM school';
	mysql.query(getschoolquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		var schools=rows;
		res.json({status:0,schools:schools});
	})
});

router.post('/addschool',function(req,res,next){
	var schoolname=req.body.schoolname;
	var location=req.body.location;
	var addschoolquery='INSERT INTO school (schoolname,location) values("'+schoolname+'"'+ ',"'+location+'")';
	mysql.query(addschoolquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		res.json({status:0,message:"添加成功"})
	})
});

router.post('/deleteschool',function(req,res,next){
	var schoolname=req.body.schoolname;
	var deleteuserquery='DELETE FROM school WHERE schoolname='+mysql.escape(schoolname);
	mysql.query(deleteuserquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		res.json({status:0,message:"删除成功"});
	})
});

router.post('/getcourse',function(req,res,next){
	var shoolname=req.body.schoolname;
	var getcoursequery='SELECT * FROM course WHERE schoolname='+mysql.escape(shoolname);
	mysql.query(getcoursequery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		var courses=rows;
		res.json({status:0,courses:courses});
	})
});

router.post('/addcourse',function(req,res,next){
	var coursename=req.body.newcoursename;
	var schoolname=req.body.schoolname;
	var coursetime=req.body.coursetime;
	var addcoursequery='INSERT INTO course (schoolname,coursename,coursetime) values('+mysql.escape(schoolname)+','+mysql.escape(coursename)+','
	+mysql.escape(coursetime)+')';
	mysql.query(addcoursequery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		res.json({status:0,message:"添加成功"});
	})
});

router.post('/deletecourse',function(req,res,next){
	var schoolname=req.body.schoolname;
	var coursename=req.body.coursename;
	var deletecoursequery='DELETE FROM course WHERE schoolname='+mysql.escape(schoolname)+'AND coursename='+mysql.escape(coursename);
	mysql.query(deletecoursequery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		res.json({status:0,message:"删除成功"});
	})
});

router.post('/chooseschool',function(req,res,next){
	var school=req.body.schoolname;
	var name=req.body.name;
	var chooseschoolquery='UPDATE student SET school ='+mysql.escape(school)+'WHERE name='+mysql.escape(name);
	mysql.query(chooseschoolquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		res.json({status:0,message:"提交成功"});
	})
});

router.get('/getstudents',function(req,res,next){
	var getuserquery='SELECT * FROM student';
	mysql.query(getuserquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		var students=rows;
		res.json({status:0,students:students});
	})
});

router.post('/changerecommend',function(req,res,next){
	var name=req.body.name;
	var score=req.body.score;
	var grade=req.body.grade;
	var changequery='INSERT INTO recommend (name,score,grade) values('+mysql.escape(name)+','+mysql.escape(score)+','
	+mysql.escape(grade)+')';
	mysql.query(changequery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		res.json({status:0,message:"推荐成功"});
	})
});

router.get('/getrecommends',function(req,res,next){
	var getrecommendquery='SELECT * FROM recommend';
	mysql.query(getrecommendquery,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		var recommends=rows;
		res.json({status:0,recommends:recommends});
	})
});

router.get('/showstudents',function(req,res,next){
	var school=req.body.school;
	var querystudent="SELECT * FROM student WHERE inschool="+mysql.escape("zdxh");
	mysql.query(querystudent,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		var students=rows;
		res.json({status:0,students:students});
	})
});

router.get('/getschoolstudents',function(req,res,next){
	var school=req.body.school;
	var queryschoolstudents="SELECT * FROM student WHERE school="+mysql.escape("zdxh");
	mysql.query(queryschoolstudents,function(err,rows,fields){
		if(err){
			console.log(err);
			return;
		}
		var students=rows;
		res.json({status:0,students:students});
	})
})
module.exports = router;
