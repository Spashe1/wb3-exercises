function displayMailingLable(name,Address,city,state,Zip) {
    console.log(`Name is ${name}`);
    console.log(`Address is ${Address}`);
    console.log(`City is ${city}`);
    console.log(`State is ${state}`);
    console.log(`Zip ${Zip}`);
}
   
displayMailingLable('Sephora', '656.s BerryHill ct.', 'stonemtn', 'Ga', '30232');

function addNumbers(num1,num2) {
    
    const sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);
}
addNumbers (3 ,5);
addNumbers(10 ,15);

function displayReceipt(totalDue, amountPaid) {
    const changeDue = totalDue - amountPaid;

    console.log(`Total Due: ${totalDue}`);
    console.log(`Amount Paid: ${amountPaid}`);

    if (changeDue <= 0) {
        console.log(`Change Due: ${Math.abs(changeDue)}`);
        console.log(`Owed Amount: ${Math.abs(changeDue)}`);
    }
}
const totalDue = 15
const amountPaid = 20
displayReceipt(totalDue, amountPaid);
