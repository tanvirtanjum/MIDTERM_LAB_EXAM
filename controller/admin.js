var express = require('express');
var router = express.Router();

var log_in 	= require.main.require('./models/log_in');

var err =
{
	a: "",
	b: "",
	c: "",
}

router.get('/', function(req, res)
{
	if(req.session.type == 1)
	{
		res.render('admin/index');
	}
	else
	{
		res.redirect("/login");
	}
});

router.post('/', function(req, res)
{
	if(req.body.hasOwnProperty("add"))
	{
		res.redirect('admin/addemployee');
	}

	if (req.body.hasOwnProperty("all"))
	{
		res.redirect('admin/allemployeelist');
	}
});

router.get('/addemployee', function(req, res)
{
	if(req.session.type == 1)
	{
		res.render('admin/addemployee/index');
	}
	else
	{
		res.redirect("/login");
	}
});

router.post('/addemployee', function(req, res)
{
	var user=
	{
		username: req.body.uname,
		fname: req.body.fname,
		phone: req.body.phone,
		status: req.body.des,
		pass: req.body.pass
	}

	log_in.addLogin(user, function(resp)
	{
		if(resp)
		{
			res.redirect('/admin/allemployeelist');
		}

		else {
			res.send("False");
		}
	})
});
router.get('/allemployeelist', function(req, res)
{
	if(req.session.type == 1)
	{
		log_in.getALL(function(result)
		{
			res.render('admin/allemployeelist/index', {list: result});
		});
	}
	else
	{
		res.redirect("/login");
	}
});
router.get('/update/:id', function(req, res)
{
	user=
	{
		username: req.params.id
	}
	log_in.getINFO(user,function(result)
	{
		res.render('admin/allemployeelist/update/index', {list: result, err: err});
	});
});

router.post('/update/:id', function(req, res)
{
	var user=
	{
		fname:  req.body.p,
		pass:  req.body.b,
		con:  req.body.c,
		username: req.body.n
	}

	var e = false;
	if(user.fname.length < 1)
	{
		//console.log("null");
		err.a="*";
		e = true;
	}
	else
	{
		err.a="";
	}
	if(user.pass.length < 1)
	{
		err.b="*";
		e = true;
	}
	else
	{
		err.b="";
	}
	if(user.con.length < 11 || user.con.length > 11)
	{
		err.c="*";
		e = true;
	}
	else
	{
		err.c="";
	}

	if(!e)
	{
		log_in.up(user, function(resp)
		{
			res.redirect('/admin/allemployeelist');
		});
	}
	else
	{
		res.redirect('/admin/update/'+req.params.id);
	}
});

router.get('/delete/:id', function(req, res)
{
	user=
	{
		username: req.params.id
	}
	log_in.getINFO(user,function(result)
	{
		res.render('admin/allemployeelist/delete/index', {list: result});
	});
});

router.post('/delete/:id', function(req, res)
{
	if(req.body.hasOwnProperty("y"))
	{
		var user=
		{
			fname:  req.body.p,
			pass:  req.body.b,
			username: req.body.n
		}
		log_in.del(req.params.id, function(resp)
		{
			res.redirect('/admin/allemployeelist');
		});
	}

	else if (req.body.hasOwnProperty("n"))
	{
		res.redirect('/admin/allemployeelist');
	}
});





module.exports = router;
