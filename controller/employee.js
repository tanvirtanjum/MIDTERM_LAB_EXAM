var express = require('express');
var router = express.Router();

var product 	= require.main.require('./models/product');

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
		res.redirect('employee/add');
	}

	else if (req.body.hasOwnProperty("up"))
	{
		res.redirect('employee/allproducts');
	}

});

router.get('/add', function(req, res)
{
	if(req.session.type == 2)
	{
		res.render('employee/add/index');
	}
	else
	{
		res.redirect("/login");
	}
});

router.get('/allproducts', function(req, res)
{
	if(req.session.type == 2)
	{
		product.getALL(function(result)
		{
			res.render('employee/allproducts/index',{list: result});
		});
	}
	else
	{
		res.redirect("/login");
	}
});
module.exports = router;
