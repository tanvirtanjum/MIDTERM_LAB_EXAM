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
		//res.redirect('admin/addemployee');
	}

	if (req.body.hasOwnProperty("all"))
	{
		//res.redirect('admin/allemployeelist');
	}

});





module.exports = router;
