var mongoose = require('mongoose');

var FavoriteSchema = new mongoose.Schema({
 user_id: Number,
 launch_id: Number,
 created_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Favorite', FavoriteSchema);