//argument object - no longer bound with arrow functions

const add = (a,b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55,1));

//this keyword - no longer bound

const user = {
    name:'rahul',
    cities:['pkd','mumbai','pune','NewCity'],
    printPlacesLived(){
        //const cityMessages = this.cities.map((city)=>{
        //    return this.name +' has been in ' + city;
        //});
        //const masg = cityMessages.length - 1;
        //return cityMessages[];
        return this.cities.map((city)=>  this.name +' has been in ' + city );
       
    }

};

console.log(user.printPlacesLived());

//challenge area

const multiplier ={
    //number - array of number
    //multiplyby -  single number
    //multiply-  return a new aray where the numbers have been multiplied
    number : [1,2,3,4,5,6,7,8,9],
    multiplyBy:2,
    multipy(){
        return this.number.map((number)=> number * this.multiplyBy);
    }
};

console.log(multiplier.multipy());