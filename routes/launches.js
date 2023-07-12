var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  //fetch from spaceX

  
  res.json([{}]);
});

//test front hardcoded
/*
router.get('/', function(req, res, next) {
res.json([
  {
    "flight_number": 39,
    "mission_name": "NROL-76",
    "mission_patch": "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
    "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
      "rocket": {
        "rocket_id": "falcon9",
        "rocket_name": "Falcon 9",
        "active": true,
        "cost_per_launch": 6700000,
        "company": "SpaceX"
      }
  },
  {
    "flight_number": 39,
    "mission_name": "NROL-76",
    "mission_patch": "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
    "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
      "rocket": {
        "rocket_id": "falcon9",
        "rocket_name": "Falcon 9",
        "active": true,
        "cost_per_launch": 6700000,
        "company": "SpaceX"
      }
  },
  {
    "flight_number": 39,
    "mission_name": "NROL-76",
    "mission_patch": "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
    "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
      "rocket": {
        "rocket_id": "falcon9",
        "rocket_name": "Falcon 9",
        "active": true,
        "cost_per_launch": 6700000,
        "company": "SpaceX"
      }
  },
  {
    "flight_number": 39,
    "mission_name": "NROL-76",
    "mission_patch": "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
    "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
      "rocket": {
        "rocket_id": "falcon9",
        "rocket_name": "Falcon 9",
        "active": true,
        "cost_per_launch": 6700000,
        "company": "SpaceX"
      }
  },
  {
    "flight_number": 39,
    "mission_name": "NROL-76",
    "mission_patch": "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
    "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
      "rocket": {
        "rocket_id": "falcon9",
        "rocket_name": "Falcon 9",
        "active": true,
        "cost_per_launch": 6700000,
        "company": "SpaceX"
      }
  },
  {
    "flight_number": 39,
    "mission_name": "NROL-76",
    "mission_patch": "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
    "details": "Residual stage 1 thrust led to collision between stage 1 and stage 2",
      "rocket": {
        "rocket_id": "falcon9",
        "rocket_name": "Falcon 9",
        "active": true,
        "cost_per_launch": 6700000,
        "company": "SpaceX"
      }
  }
  ]);
});
*/

module.exports = router;