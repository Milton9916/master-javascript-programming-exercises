// Write your function here

function areValidCredentials (nombre, contraseña){
    let Contnom = nombre.length;
    let Contcont = contraseña.length;
    console.log(Contnom);
    console.log(Contcont);
    if (nombre.length > 3 && contraseña.length >= 8){
        return true;
    }else{
        console.log("Nombre o contraseña no cumple con los requicitos");
        return false;
    };
    
};

let output = areValidCredentials(`Ritu`, `mylongpassword`);
console.log(output);