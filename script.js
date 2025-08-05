// constructor function

// function createFactory(name ,color , price , size , height , weight){
//     this.name = name;
//      this.color = color;
//     this.price = price;
//     this.size = size;
//     this.height = height;
//      this.weight = weight;
//      this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent= text;
//         h1.style.color = color;
//         document.body.append(h1);
//      };
// }
// let fac1 = new createFactory("Tata" , "black", 500000 , "3 acre" , "5.3feet" , "50kg");
// console.log(fac1);
// let fac2 = new createFactory("reliance" , "red", 1000000 , "9 acre" , "5.3feet" , "50kg");
// console.log(fac2);

//prototype

function CreateStartup(  domain ,color ,  funding , employee , location ) {
  //  this.name = name;
     this.domain = domain;
    this.color = color;
 
    this.funding = funding;
    this.employee = employee;
    this.location = location;
//     this.write = function(text){
//         let h1 = document.createElement("h1");
//         h1.textContent= text;
//         h1.style.color = this.logocolor;
//         document.body.append(h1);
// };
}
CreateStartup.prototype.write = function (text){
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.append(h1);
};
let start1 = new CreateStartup("cozytech" , "yellow" , 10000000 , 51 , "Manali");
console.log(start1);
let start2 = new CreateStartup("uitech" , "red" , 10000000 , 51 , "Manali");
console.log(start1);
