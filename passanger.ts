class Passenger {
    firstName:string;
    lastName: string;
    frequentFlyerno: number
    constructor(firstName: string, lastName:string, flightno:number) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = flightno;
    } 
    display() {
        console.log(this.firstName + " " + this.lastName + " "+ this.frequentFlyerno);
    }

}

var passenger = new Passenger("Jsck", "Sparrow", 102);

for (const item in passenger) {
    if(item!=="display"){
        console.log(item);
        console.log(passenger[item]);
        
        
    }
        
    }

