var objProduct = {
    id: 123,
    name: "IPhone",
    description: "It's awesome",
    price: 60000,
    display: function () {
        console.log(this.id + " " + this.price);
    }
};
var objProduct2 = {
    id: 345,
    name: "Android",
    description: " It is nice",
    price: 20000,
    display: function () {
        console.log(this.id + " " + this.price);
    }
};
