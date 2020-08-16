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
	}
  
}
