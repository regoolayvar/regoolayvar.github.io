const calculate = () => {
    const salary = parseFloat(document.getElementById("salary").value);
    let tax = 0;

    
    if (isNaN(salary) || salary < 0) {
        document.getElementById("result").innerHTML = "Enter a valid pay.";
        return;
    }

    
    if (salary <= 250000) {
        tax = 0;
    } else if (salary <= 400000) {
        tax = (salary - 250000) * 0.20;
    } else if (salary <= 800000) {
        tax = 30000 + (salary - 400000) * 0.25;
    } else if (salary <= 2000000) {
        tax = 130000 + (salary - 800000) * 0.30;
    } else if (salary <= 8000000) {
        tax = 490000 + (salary - 2000000) * 0.32;
    } else {
        tax = 2410000 + (salary - 8000000) * 0.35;
    }

   
    document.getElementById("result").innerHTML = `Your calculated income tax is: P${tax.toFixed(2)}`;
};