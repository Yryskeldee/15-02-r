function numbers(number1, number2){
    if (number1 < number2){
        console.log("Первое меньше")
    }else if (number2 > number1){
        console.log("Второе меньше")
    }else {
        console.log("Они равны")
    }
}
const number = {
    number1:43,
    number2:52
}
numbers(number.number1, number.number2)

function coutChar(zxc) {
    console.log(zxc.length)
}
coutChar("golovy siyayut na moyei edkoi katane")


