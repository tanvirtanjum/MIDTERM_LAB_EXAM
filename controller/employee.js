var express = require('express');
var router = express.Router();

var product 	= require.main.require('./models/product');

var err =
{
	a: "",
	b: "",
	c: "",
}

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

router.post('/add', function(req, res)
{
	if(req.session.type == 2)
	{
		info=
		{
			a: req.body.a,
			b: req.body.b,
			c: req.body.c
		}

		product.insert(info, function(result)
		{
			if(result)
			{
				res.redirect('/employee/allproducts');
			}
			else
			{
				res.redirect('/employee/add');
			}
		});
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

router.get('/product/delete/:id', function(req, res)
{
	if(req.session.type == 2)
	{
		product.getProd(req.params.id,function(result)
		{
			res.render('employee/allproducts/delete/index', {list: result});
		});
	}
	else
	{
		res.redirect("/login");
	}
});

router.get('/product/update/:id', function(req, res)
{
	if(req.session.type == 2)
	{
		product.getProd(req.params.id,function(result)
		{
			res.render('employee/allproducts/update/index', {list: result, err: err});
		});
	}
	else
	{
		res.redirect("/login");
	}
});

router.post('/product/delete/:id', function(req, res)
{
	if(req.body.hasOwnProperty("y"))
	{
		product.delete(req.params.id, function(resp)
		{
			res.redirect('/employee/allproducts');
		});
	}

	else if (req.body.hasOwnProperty("n"))
	{
		res.redirect('/employee/allproducts');
	}
});

router.post('/product/update/:id', function(req, res)
{
	var user=
	{
		a:  req.body.a,
		b:  req.body.b,
		c:  req.body.c,
		d: req.params.id
	}

	var e = false;
	if(user.a.length < 1)
	{
		//console.log("null");
		err.a="*";
		e = true;
	}
	else
	{
		err.a="";
	}
	if(user.b < 0 || user.b.length < 1)
	{
		err.b="*";
		e = true;
	}
	else
	{
		err.b="";
	}
	if(user.c < 0 || user.c.length < 1)
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
		product.up(user, function(resp)
		{
			res.redirect('/employee/allproducts');
		});
	}
	else
	{
		res.redirect('/employee/product/update/'+req.params.id);
	}
});


module.exports = router;
