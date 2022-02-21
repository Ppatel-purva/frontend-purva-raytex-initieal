var name ="james";
var numberone  = 1;
var verify=true;
var numbertwo = 2;

//object

const student ={name:"jems", Age: 30};

function displayobjectnew(){
document.getElementById("valobject").innerHTML =  student.name +" "+ student.Age;
}

function addition(){
    
var sum= numberone + numbertwo ;
var mul= numberone * numbertwo ;
document.getElementById("newone").innerHTML = "Auther"
document.getElementById("sum").innerHTML = sum;
document.getElementById("mul").innerHTML = mul;
console.log(sum);
console.log(mul);

return sum;
}

var picknumb= document.getElementById("readnum").value;

function checkeven{
    consol.log(this.piknumb);
    if(piknumb%2==0){
        console.log(even);
    }
    else{
        console.log(odd);
    }

    }

