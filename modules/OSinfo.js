var timeCount = require('../modules/timeF')
var os = require('os');
var colors = require('colors');

function getOSinfo() {
  var type = os.type();
  if (type === 'Darwin') {
    type = 'OSX';
  } else if (type === 'Windows_NT') {
    type = 'Windows';
  }

  var release = os.release();
  var cpu = os.cpus()[0].model;
  var uptime = os.uptime();
  var userInfo = os.userInfo();
  console.log('System:'.gray, type);
  console.log('Release:'.red, release);
  console.log('CPU model:'.blue, cpu);
  console.log('Uptime:'.green, timeCount.print(uptime) );
  console.log('User name:'.yellow, userInfo.username);
  console.log('Home dir:'.grey, userInfo.homedir);
}

exports.print = getOSinfo;




// var os = require( 'os' );
// var createTime = require( '../modules/formatTime' );

// function getOSinfo() {
//     var type = os.type();
//     if( type === 'Darwin' ) {
//         type = 'OSX';
//     } else if( type === 'Windows_NT' ) {
//         type = 'Windows';
//     }
//     var userInfo = os.userInfo();
//     var release = os.release();
//     console.log( 'User name: ', userInfo.username );
//     console.log( 'Home dir: ', userInfo.homedir );
//     createTime.print();
//     console.log( 'System: ', type );
//     console.log( 'Release: ', release );    
// }

// exports.print = getOSinfo;