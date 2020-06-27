function getNum(num){
    var output = document.getElementById("cal_res");
    output.value += num;
}

function clrRes(){
    var output = document.getElementById("cal_res");
    output.value = "";
}

function getRes(){
    var output = document.getElementById("cal_res");
    output.value = eval(output.value);
}

 