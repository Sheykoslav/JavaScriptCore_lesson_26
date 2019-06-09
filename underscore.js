function Car(brand, model, year){
  this.brandName = brand;
  this.model = model;
  this.productionYear = year;
}
var car = _.create(Car.prototype, {brandName:'Lamborghini',model:'Veneno',productionYear:2013});
var invertedCar = _.invert(car);

console.log('Using pick:');
var pickedFromCar = _.pick(car,'brandName','productionYear');
console.log(pickedFromCar);

console.log('Using omit:');
var omitedInCar = _.omit(car, 'model');
console.log(omitedInCar);
//comment commit №2
//comment commit №3
