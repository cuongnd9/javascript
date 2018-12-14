function Mouse(_color){
    this.color= _color;
    this.dead= false;
}

Mouse.prototype.die= function(){
    this.dead= true;
};

module.exports= Mouse;