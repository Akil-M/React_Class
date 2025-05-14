function add(){
    const num1 = Number(document.getElementById('num1').value);
    const result = parseInt(((num1-32)*5)/9);
    const reee=`The celsius is ${result}°C`;
    document.getElementById('res').textContent = reee;
}