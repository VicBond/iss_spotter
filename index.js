// // index.js
// const { fetchMyIP , fetchCoordsByIP, fetchISSFlyOverTimes} = require('./iss');

const { nextISSTimesForMyLocation } = require('./iss');



const printPassTimes = passTimes => {
  for (let pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);

  }
};


nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);

  console.log(passTimes);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });


// fetchCoordsByIP('99.252.167.28',(error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
  
//   console.log('It worked! Returned coordinates are:' , coordinates);
// });


// fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' },(error, output) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
  
//   console.log('It worked! I gonna see it at :' , output);
// });