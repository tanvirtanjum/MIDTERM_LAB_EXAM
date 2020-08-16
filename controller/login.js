var express = require('express');
var router = express.Router();

var log_in 	= require.main.require('./models/log_in');

var msg="";

router.get('/', function(req, res)
{
	if(req.session.type == null || req.session.type == "")
	{
	  res.render('login/index',{msg: msg});
		//res.render('login/index');
	}
	else
	{
		if(req.session.type == 1)
		{
			res.redirect("/admin");
		}
		if(req.session.type == 2)
		{
			res.redirect("/employee");
		}
	}
});

router.post('/',function(req, res)
{
  var user =
  {
		username: req.body.username,
		pass: req.body.pass
	};

	log_in.validateLogin(user, function(response)
  {
		if(response.length > 0)
    {
			msg = "";
			req.session.type = response[0].status;
			req.session.username = response[0].username;

			if(req.session.type == 1)
		  {
				res.redirect('/admin');
			}

		  else if(req.session.type == 2)
		  {
				res.redirect('/employee');
			}

			else
	    {
	      res.send('RESTRITED');
	    }
		}
    else
    {
			msg = "No Such User";
			res.redirect('/login');
      //res.send('Somethong Went Wrong....');
    }
	});
});

module.exports = router;
