var express = require('express');
var router  = express.Router();

router.get('/', function(req, res, next) {
  
  //fetch from spaceX
  const urlLaunches = "https://api.spacexdata.com/v3/launches";
  const urlRocets   = "https://api.spacexdata.com/v3/rockets";

  async function fetchLaunchesAndRockets() {
    const [launchesResponse, rocketsResponse] = await Promise.all([
      fetch(urlLaunches),
      fetch(urlRocets)
    ]);
  
    const launches = await launchesResponse.json();
    const rockets = await rocketsResponse.json();
  
    return [launches, rockets];
  }
  
  fetchLaunchesAndRockets().then(([launches, rockets]) => {
    let final = [];
    final.push(launches);
    final.push(rockets);
    res.send(final);
  }).catch((err) => {
    return next(err);
  });
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