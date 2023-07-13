var express = require('express');
var _ = require('underscore');
var router  = express.Router();

var mongoose = require('mongoose');
var Favorite = require('../models/Favorite.js');

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

  //Once I got everything Una vez tengo todo hago merge y response
  fetchLaunchesRocketsFavorites().then(([launches, rockets, favorites]) => {
    let final = [];

    _.map(launches, function(launch){
      
      //reduced dataset to send frontend
      var rocket = {
        "rocket_id": launch.rocket.rocket_id,
        "rocket_name": launch.rocket.rocket_name
      };

      //grab rocket missing information
      for (const fullRocket of rockets) {
        if (fullRocket.rocket_id === rocket.rocket_id) {
          rocket.active = fullRocket.active;
          rocket.cost_per_launch = fullRocket.cost_per_launch;
          rocket.company = fullRocket.company;          
          break;
        }
      }  

      var flight = {
        "favorite": false,
        "flight_number": launch.flight_number,
        "mission_name": launch.mission_name,
        "mission_patch": launch.links.mission_patch,
        "details": launch.details,
        "rocket": rocket
      };

      //check flag favorite      
      if(!_.isEmpty(favorites)){
        for (const fav of favorites) {
          if (fav.launch_id === flight.flight_number){
            flight.favorite = true;
            break;
          }
        }
      }

      final.push(flight);
    });

    res.send(final);
  }).catch((err) => {
    return next(err);
  });
});

module.exports = router;