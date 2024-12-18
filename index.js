function compute() {
  
    var x = document.getElementById("x").value;
    var y = document.getElementById("y").value;
    var r = document.getElementById("re");
    

    x = parseInt(x);
    y = parseInt(y);

   
    if (x >= 10 && y >= 8) {
        r.innerHTML = y * y * y + y * y * y + 300;
    } else if (x >= 3 && y >= 7) {
        r.innerHTML = y * y + y * y + x * y;
    } else {
        r.innerHTML = x + y;
    }
}
function clearInput() {
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    var r = document.getElementById("re");

   
    x.value = ''; 
    y.value = ''; 

   
    r.innerHTML = ''; 
}

