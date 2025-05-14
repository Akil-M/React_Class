function add(){
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const result = num1 + num2;
    const reee=`The addition of two number is ${result}`;
    document.getElementById('res').textContent = reee;
}