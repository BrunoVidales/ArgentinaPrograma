//CUENTA REGRESIVA!

let i = 10;

while(i >= 0){
    if(i == 10){
        console.log("Cuenta regresiva %i", i);
    }else if(i > 0){
        console.log('%i', i);
    }else{
        console.log('Lanzamiento!');
    }
    
    i--;
}
