// alert("X-pense Monitor");
// Refrence all the element in xmonitor.html
var expensesTotalField = document.querySelector('.expensesTotal');
var foodTextInput = document.querySelector('.foodText');
var transportTextInput = document.querySelector('.transportText');
var servicesTextInput = document.querySelector('.servicesText');
var otherTextInput = document.querySelector('.otherText');
var disinfectantTextInput = document.querySelector('.disinfectantText');
var medicationTextInput = document.querySelector('.medicationText');
var balanceField = document.querySelector('.balanceTotal');
var covidPercentField = document.querySelector('.covidPercent');
var saveButton = document.querySelector('.saveBtn');
var incomeTotalField = document.querySelector('.incomeTotal');
var salaryTotalField = document.querySelector('.salaryTotal');

// Instatiate the instance of the factory function
let instXmonitor = xMonitorFF();

var strSalary = Number(localStorage.getItem('salary'));

// Set salary from the localStorage
instXmonitor.setSalary(strSalary);

// Get the income from the localStorage
var inSalary = instXmonitor.getSalary();
incomeTotalField.innerHTML = inSalary.toFixed(2);
salaryTotalField.innerHTML = inSalary.toFixed(2);


// Add event listeners to the inputs
foodTextInput.addEventListener('keyup', function() {

    instXmonitor.setFoodAmount(Number(foodTextInput.value));

    var foodTotal = instXmonitor.totalExpenses();
    var foodBalance = instXmonitor.getBalance();
    var foodPer = instXmonitor.covidPer();

    expensesTotalField.innerHTML = foodTotal.toFixed(2);
    balanceField.innerHTML = foodBalance.toFixed(2);
    covidPercentField.innerHTML = foodPer.toFixed();

});

transportTextInput.addEventListener('keyup', function() {

    instXmonitor.setTransportAmount(Number(transportTextInput.value));

    var transportTotal = instXmonitor.totalExpenses();
    var transportBalance = instXmonitor.getBalance();
    var transportPer = instXmonitor.covidPer();

    expensesTotalField.innerHTML = transportTotal.toFixed(2);
    balanceField.innerHTML = transportBalance.toFixed(2);
    covidPercentField.innerHTML = transportPer.toFixed();

});

servicesTextInput.addEventListener('keyup', function() {

    instXmonitor.setServicesAmount(Number(servicesTextInput.value));

    var servicesTotal = instXmonitor.totalExpenses();
    var servicesBalance = instXmonitor.getBalance();
    var servicesPer = instXmonitor.covidPer();

    expensesTotalField.innerHTML = servicesTotal.toFixed(2);
    balanceField.innerHTML = servicesBalance.toFixed(2);
    covidPercentField.innerHTML = servicesPer.toFixed();

});

otherTextInput.addEventListener('keyup', function() {

    instXmonitor.setOtherAmount(Number(otherTextInput.value));

    var otherTotal = instXmonitor.totalExpenses();
    var otherBalance = instXmonitor.getBalance();
    var otherPer = instXmonitor.covidPer();

    expensesTotalField.innerHTML = otherTotal.toFixed(2);
    balanceField.innerHTML = otherBalance.toFixed(2);
    covidPercentField.innerHTML = otherPer.toFixed();

});

disinfectantTextInput.addEventListener('keyup', function() {

    instXmonitor.setDisinfectantAmount(Number(disinfectantTextInput.value));

    var disinfectantTotal = instXmonitor.totalExpenses();
    var disinfectantBalance = instXmonitor.getBalance();
    var disinfectantPer = instXmonitor.covidPer();

    // console.log(instXmonitor.covidPer())

    expensesTotalField.innerHTML = disinfectantTotal.toFixed(2);
    balanceField.innerHTML = disinfectantBalance.toFixed(2);
    covidPercentField.innerHTML = disinfectantPer.toFixed();

});

medicationTextInput.addEventListener('keyup', function() {

    instXmonitor.setMedicationAmount(Number(medicationTextInput.value));

    var medicationTotal = instXmonitor.totalExpenses();
    var medicationBalance = instXmonitor.getBalance();
    var medicationPer = instXmonitor.covidPer();

    expensesTotalField.innerHTML = medicationTotal.toFixed(2);
    balanceField.innerHTML = medicationBalance.toFixed(2);
    covidPercentField.innerHTML = medicationPer.toFixed();

});

saveButton.addEventListener('click', function() {
    localStorage.clear();

    localStorage.setItem("expenseMonitor", JSON.stringify(instXmonitor.getObject()));

})