interface Ipark1{
   ParkName:string,
   area:string,
}

interface Ipark2{
  
    swings:number,
    SeeSaw:number,
    
}  
interface Ipark extends Ipark1,Ipark2{
    slide:number;
}
var Park:Ipark={
    slide: 3,
    area: "kolhapur",
    swings: 6,
    SeeSaw: 1,
    ParkName: "Tarabai Park"
}
console.log(Park);
