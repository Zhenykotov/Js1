let car ={
  maxSpeead: 240,
};
console.log('Max speed was: ' + car.maxSpeead);
function apdateSpeed(car){
  car.maxSpeead = 300;
  console.log('Now speed ' + car.maxSpeead);
}
apdateSpeed(car)
