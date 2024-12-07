function calculate() {
    const value = parseFloat(document.getElementById('number').value);
    const conversiont = document.getElementById('conversiont').value;

    // Validate input
    if (isNaN(value)) {
        document.getElementById('result').textContent = "Please enter a valid number.";
        return;
    }

    let result;
    let unit, originalUnit;

    
    if (conversiont === "CF") {
        result = (value * 9 / 5) + 32;
        unit = '°F';
        originalUnit = '°C';
    } else if (conversiont === "FC") {
        result = (value - 32) * 5 / 9;
        unit = '°C';
        originalUnit = '°F';
    } else if (conversiont === "MF") {
        result = value * 3.28084;
        unit = 'feet';
        originalUnit = 'meters';
    } else if (conversiont === "FM") {
        result = value / 3.28084;
        unit = 'meters';
        originalUnit = 'feet';
    } else {
        document.getElementById('result').textContent = "Invalid conversion type selected.";
        return;
    }

    
    document.getElementById('result').textContent = `${value}${originalUnit} is equal to ${result.toFixed(2)} ${unit}.`;
}
