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
        const cityMessages = this.cities.map((city)=>{
            return this.name +' has been in ' + city;
        });
        const masg = cityMessages.length - 1;
        return cityMessages[masg];
       
    }

};

console.log(user.printPlacesLived());