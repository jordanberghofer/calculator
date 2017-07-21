var in1 = document.getElementById("input1");
var in2 = document.getElementById("input2");

add(in1, in2);
sub(in1, in2);
mul(in1, in2);
div(in1, in2);


function add(in1, in2) {
    return in1 + in2;
}

function sub(in1, in2) {
    return in1 - in2;
}

function mul(in1, in2) {
    return in1 * in2;
}

function div(in1, in2) {
    return in1 / in2;
}