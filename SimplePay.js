let payroll = [];


const addEmployees = () => {
    payroll = [];
};


const calculatePay = (daysWorked, dailyRate, deduction) => {
    const grossPay = (daysWorked * dailyRate).toFixed(2);
    const netPay = (grossPay - deduction).toFixed(2);
    return { grossPay, netPay };
};


const showEmployees = () => {
    let tb = '';
    let lno = 1;

    payroll.forEach(emp => {
        const { grossPay, netPay } = calculatePay(emp.daysworked, emp.dailyrate, emp.deduction);

        tb += `
            <tr>
                <td class="ndata">${lno}</td>
                <td>${emp.name}</td>
                <td class="ndata">${emp.daysworked.toFixed(2)}</td>
                <td class="ndata">${emp.dailyrate.toFixed(2)}</td>
                <td class="ndata">${grossPay}</td>
                <td class="ndata">${emp.deduction.toFixed(2)}</td>
                <td class="ndata">${netPay}</td>
            </tr>
        `;
        lno++;
    });

    document.getElementById("tablebody").innerHTML = tb;
};


const addEmployee = (name, daysWorked, dailyRate, deduction) => {
    const { grossPay, netPay } = calculatePay(daysWorked, dailyRate, deduction);
    payroll.push({
        name,
        daysworked: daysWorked,
        dailyrate: dailyRate,
        grosspay: grossPay,
        deduction,
        netpay: netPay
    });
};

document.addEventListener("DOMContentLoaded", () => {
    
    addEmployees();
    showEmployees();

    
    document.getElementById("addEmployeeForm").addEventListener("submit", (e) => {
        e.preventDefault();

        
        const name = document.getElementById("empName").value.trim();
        const daysWorked = parseFloat(document.getElementById("daysWorked").value);
        const dailyRate = parseFloat(document.getElementById("dailyRate").value);
        const deduction = parseFloat(document.getElementById("deduction").value);

        // Validate input
        if (name && daysWorked > 0 && dailyRate >= 0 && deduction >= 0) {
            addEmployee(name, daysWorked, dailyRate, deduction);
            e.target.reset(); 
            showEmployees(); 
        } else {
            alert("Please fill in all fields correctly.");
        }
    });

    // Event listener for deleting an employee
    document.getElementById("btndelete").addEventListener("click", () => {
        const index = parseInt(document.getElementById("delemployee").value) - 1;

        if (index >= 0 && index < payroll.length) {
            payroll.splice(index, 1); 
            document.getElementById("delemployee").value = ''; 
            showEmployees(); 
        } else {
            alert("Invalid employee number.");
        }
    });
});
