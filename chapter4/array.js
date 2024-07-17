let vehicles=['car','bike','scooty','train','truck','bus'];
vehicles[0]="bicycle";
vehicles.push('aeroplane');
vehicles.unshift('helicopter');
vehicles.length;
vehicles.forEach(vehicle=>{console.log(vehicle);})


let vehiclesCapital = vehicles.map(vehicle=>{
    return vehicle.toUpperCase()
});

console.log(vehicles);

let vehicle3=vehicles.splice(2,2);
console.log(vehicle3);
vehicles.slice(2,-2);
console.log(vehicles);
