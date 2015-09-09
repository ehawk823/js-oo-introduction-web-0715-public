function Owner(name){
  this.name = name;
  this.bikes = [];
}

Owner.prototype.buildBike = function(name, bikeType, frameColor){
  var bike = new Bike(name, bikeType, frameColor);
  this.bikes.push(bike);
};

Owner.prototype.rideBike = function(bikename, distance){
    this.bikes.forEach(function(x){
    if(x.name == bikename){
      x.takeForARide(distance)
    }
  })
};
