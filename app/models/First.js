var mongoose = require('mongoose');

// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('First', {
	name : {type : String, default: ''}
});
