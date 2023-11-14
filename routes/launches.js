var express = require('express');
var router  = express.Router();

var mongoose = require('mongoose');
var Favorite = require('../models/Favorite.js');

//TODO: SpaceX service decouple
router.get('/', function(req, res, next) {
  
  const user_id = 33; //hardcoded;  

  //fetch from spaceX
  const urlLaunches = "https://api.spacexdata.com/v3/launches";
  const urlRockets   = "https://api.spacexdata.com/v3/rockets";

  async function fetchLaunchesRocketsFavorites() {
    const [launchesResponse, rocketsResponse, favoritesResult] = await Promise.all([
      fetch(urlLaunches),
      fetch(urlRockets),
      Favorite.find({'user_id': user_id})
    ]);
      
    const launches = await launchesResponse.json();
    const rockets = await rocketsResponse.json();
    const favorites = await JSON.parse(JSON.stringify(favoritesResult));
  
    return [launches, rockets, favorites];
  }

  // Once I grab everything I merge the response
  fetchLaunchesRocketsFavorites().then(([launches, rockets, favorites]) => {
    
    const final = [];

    launches.forEach(launch => {
      // Reduced dataset to send frontend
      const rocket = {
        "rocket_id": launch.rocket.rocket_id,
        "rocket_name": launch.rocket.rocket_name
      };
    
      const fullRocket = rockets.find(fullRocket => fullRocket.rocket_id === rocket.rocket_id);
    
      if (fullRocket) {
        rocket.active = fullRocket.active;
        rocket.cost_per_launch = fullRocket.cost_per_launch;
        rocket.company = fullRocket.company;
      }
    
      const flight = {
        "favorite": false,
        "flight_number": launch.flight_number,
        "mission_name": launch.mission_name,
        "mission_patch": launch.links.mission_patch,
        "details": launch.details,
        "rocket": rocket
      };
    
      // Check flag favorite
      if (!favorites.some(fav => fav.launch_id === flight.flight_number)) {
        flight.favorite = true;
      }
    
      final.push(flight);
    });    

    res.send(final);
  }).catch((err) => {
    return next(err);
  });
});

module.exports = router;