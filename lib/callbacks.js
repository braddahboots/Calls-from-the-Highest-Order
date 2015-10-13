var datastore = require('./datastore.js');

function wait(secs, cb) {
  setTimeout(cb, secs*1000);
  // console.log('wait 3 started');
}

//testing wait function
wait(3, function(){
  console.log('wait 3 done');
});

function repeat(times, cb) {
  for(var i = 0; i < times; i++) {
    cb(i);
  }
}

//testing repeat function
repeat(10, function(iteration) {
  // console.log(100 + iteration);
});

//testing wait and repeat
wait(4, function() {
  repeat(2, function(n) {

    console.log('repeating for i ' + n);

    wait(n * 3, repeat(3, function(m) {

      console.log('i ' + [n] + ' j ' + [m]);
    }));
  });
});


function User () {

}

// User.find = function(query, callback) {
//   var users = datastore.user;
//   for(var i = 0; i < users.length; i++) {
//     if(!query === users[i].)
//   }
// };

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};