var db = require('./db');

module.exports =
{
	validateLogin: function(user, callback)
  {
		var sql = "SELECT * FROM `log_in` WHERE	username='"+user.username+"' AND pass='"+user.pass+"';";
		db.getResults(sql, function(result)
    {
      if(result.length > 0)
      {
				callback(result);
			}
      else
      {
				callback([]);
			}
		});
	},

	getALL: function(callback)
  {
		var sql = "SELECT * FROM `log_in`;";
		db.getResults(sql, function(result)
    {
      if(result.length > 0)
      {
				callback(result);
			}
      else
      {
				callback([]);
			}
		});
	},

	getINFO: function(user, callback)
  {
		var sql = "SELECT * FROM `log_in` WHERE username= '"+user.username+"';";
		db.getResults(sql, function(result)
    {
      if(result.length > 0)
      {
				callback(result);
			}
      else
      {
				callback([]);
			}
		});
	},

	up: function(user, callback)
  {
		var sql = "UPDATE `log_in` SET `fname`='"+user.fname+"', `pass`='"+user.pass+"', `con`='"+user.con+"' WHERE `username`='"+user.username+"';";
		db.execute(sql, function(result)
    {
      if(result)
      {
				callback(true);
			}
      else
      {
				callback(false);
			}
		});
	},

	addLogin: function(user, callback)
  {
		var sql = "INSERT INTO `log_in`(`username`, `status`, `fname`, `con`, `pass`) VALUES ('"+user.username+"','"+user.status+"','"+user.fname+"','"+user.phone+"','"+user.pass+"');";
		db.execute(sql, function(result)
    {
      if(result)
      {
				callback(true);
			}
      else
      {
				callback(false);
			}
		});
	},

	del: function(user, callback)
  {
		var sql = "DELETE FROM `log_in` WHERE `username`='"+user+"';";
		db.execute(sql, function(result)
    {
      if(result)
      {
				callback(true);
			}
      else
      {
				callback(false);
			}
		});
	}
}
