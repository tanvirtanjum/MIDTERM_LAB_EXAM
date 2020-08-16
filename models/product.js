var db = require('./db');

module.exports =
{
	getALL: function(callback)
  {
		var sql = "SELECT * FROM `prod`;";
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
	insert: function(user, callback)
  {
		var sql = "INSERT INTO `prod`(`name`, `price`, `quant`) VALUES ('"+user.a+"','"+user.c+"','"+user.b+"');";
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
