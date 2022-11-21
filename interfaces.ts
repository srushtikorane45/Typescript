interface IProduct {
    id:number;
    name:string;
    description:string;
    price:number  // declartion only in interface.
    display():void;
  
}

var objProduct : IProduct = {
    id : 123,
    name: "IPhone",
    description: "It's awesome",
    price: 60000, // I have given implementation for IProduct interface
    display():void{
        console.log(this.id + " " + this.price);
        
    }
}

var objProduct2: IProduct={
    id:345,
    name: "Android", 
    description: " It is nice",
    price:20000,
    display():void{
        console.log(this.id + " " + this.price);
        
    }
}