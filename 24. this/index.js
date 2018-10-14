"use strict"

console.log(this);

var obj = {
  mMethod: function() {
    console.log(this)
  }
}

obj.mMethod(); // (1)
var _mMethod = obj.mMethod.bind(obj);
_mMethod();  // (2)