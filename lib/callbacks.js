function wait(secs, cb) {
    setTimeout(cb, secs*1000);
    clearTimeout(cb);
}


function repeat () {

}

function User () {

}

module.exports = {
  wait : wait,
  repeat : repeat,
  User : User
};