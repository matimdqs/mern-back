var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Favorite = require('../models/Favorite.js');

/* SAVE FAVORITE */
router.post('/', function(req, res, next) {

  //TODO > check if not given session user then error.

  Favorite.create(req.body)
  .then((result) => {
      res.json(result);
  })
  .catch((err) => {
      return next(err);
  });
});

/* DELETE FAVORITE */
router.delete('/:launch_id', function(req, res, next) {
  const user_id   = 33; //hardcoded;
  const launch_id = req.params.launch_id;
 
  Favorite.deleteOne({'launch_id': launch_id, 'user_id': user_id})
  .then((result) => {
      res.json(result);
  })
  .catch((err) => {
      return next(err);
  });    
});

module.exports = router;