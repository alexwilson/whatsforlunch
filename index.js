var GoogleSpreadsheet = require("google-spreadsheet");

var WhatsForLunch = function(callback) {
	
	var store = new GoogleSpreadsheet("1xr_5dVLClvOCwLQCKzJn5N77KbtKpdrcC8VdWx1h7TU");

	var now   = new Date();
	var week  = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
	var today = week[now.getDay()];
	
	store.getRows(1, function(err, rows) {

		if (err) 
			return callback(err);
			
		return callback(null, rows.shift()[today]);

	});
	
}

module.exports = WhatsForLunch;