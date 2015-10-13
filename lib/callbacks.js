function wait(secs, cb) {
  setTimeout(cb, secs*1000);
  console.log('wait 3 started');
}

wait(3, function(){
  console.log('wait 3 done');
});


function repeat(times, cb) {
  for(var i = 0; i < times; i++) {
    cb(i);
  }
}

function User () {

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};