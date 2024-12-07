const calculate = () => {
    const n = parseInt(document.getElementById('NNumber').value);

    
    if (isNaN(n) || n <= 0) {
        alert("Please enter a number greater than 0.");
        return;
    }

    
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    document.getElementById('Fresult').innerHTML = `Factorial of ${n} is: ${factorial}`;

    
    const sum = (n * (n + 1)) / 2;  
    document.getElementById('Sresult').innerHTML = `Sum of first ${n} natural numbers is: ${sum}`;

    
    const average = sum / n;  
    document.getElementById('Aresult').innerHTML = `Average of first ${n} natural numbers is: ${average.toFixed(2)}`;
};
