var users = require('./datastore.js').User;

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
// wait(4, function() {
//   repeat(2, function(n) {

//     console.log('repeating for i ' + n);

//     wait(n * 3, repeat(3, function(m) {

//       console.log('i ' + [n] + ' j ' + [m]);
//     }));
//   });
// });


function User () {

}

User.find = function(query, cb) {

  //imaginary user schema
  var schema = {'id' : 'number', 'name': 'string', 'mood': 'string'};

  //givers me an array of the properties within query
  var queryProp = Object.keys(query);

  var userArry = [];

  var hasKeys = queryProp.every(function(key){
    return schema[key] ? true : false;
  });
    if(!hasKeys)
      return cb(new RangeError('User property not found'), userArry);

  var hasType = queryProp.every(function(key){
    return schema[key] === typeof query[key];
  });
    if(!hasType)
      return cb(new TypeError('Invalid value property of property'), userArry);


  users.forEach(function(user){
    var pass = queryProp.every(function(key) {
      return user[key] === query[key] ? true : false;
    });
    if(pass) {
      userArry.push(user);
    }
  });
  cb(null, userArry);
};

// User.find({id:2}, function(error, users){
//   if(error) {
//     throw error;
//   }
//   console.log('Could not find ' + users);
// });

// User.find = function(query, cb) {
//   var queryProp = Object.keys(query).length;
//   var usersId;
//   var userArry = [];
//   var unMatched = [];
//   var counter;

//   //error checking for number of property types in query
//   if(queryProp < 0) {
//     return 'Query has no property';
//   }
//   var test = user.filter(function(user))
//   //iterate over an array to get each instance of an object
//   for(var i = 0; i < user.length; i++) {
//     //compare the value of the id for query and usersId
//     console.log(user[i]);
//     if(query.hasOwnProperty(user[i])) {
//       userArry.push(user[i]);
//     }
//       else if(query.id !== usersId) {
//         unMatched.push(user[i]);
//         // cb('Query search did not find any matches', unMatched);
//       }
//     }
//     console.log(userArry);
//     cb(null, userArry);
//     // cb('Query search did not find any matches', []);
// };

// function cb(error, users)

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};