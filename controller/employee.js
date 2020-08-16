var express = require('express');
var router = express.Router();

router.get('/', function(req, res)
{
	if(req.session.type == 2)
	{
		res.render('employee/index');
	}
	else
	{
		res.redirect("/login");
	}
});

router.post('/', function(req, res)
{
	if(req.body.hasOwnProperty("mp"))
	{
		//res.redirect('employee/myprofile');
	}

	else if (req.body.hasOwnProperty("up"))
	{
		//res.redirect('employee/updateprofile');
	}

});

module.exports = router;
