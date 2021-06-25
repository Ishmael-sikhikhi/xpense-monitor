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
var additionalTotalField = document.querySelector('.additionalTotal');

// Instatiate the instance of the factory function
let instXmonitor = xMonitorFF();

var lsSalary = Number(localStorage.getItem('salary'));
var lsAdditional = Number(localStorage.getItem('additional'));


// Set salary and Additional income from the localStorage
instXmonitor.setSalary(lsSalary);
instXmonitor.setAdditional(lsAdditional);

// Get the income from the factory function
var inIncome = instXmonitor.totalIncome();
var inSalary = instXmonitor.getSalary();
var inAdditional = instXmonitor.getAdditional();
incomeTotalField.innerHTML = inIncome.toFixed(2);
salaryTotalField.innerHTML = inSalary.toFixed(2);
additionalTotalField.innerHTML = inAdditional.toFixed(2);

// Update the balance on reload
var updateBalance = instXmonitor.getBalance();
balanceField.innerHTML = updateBalance.toFixed(2);



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
    localStorage.removeItem('expenseMonitor');

    localStorage.setItem("expenseMonitor", JSON.stringify(instXmonitor.getObject()));

    foodTextInput.value = "";
    transportTextInput.value = "";
    servicesTextInput.value = "";
    otherTextInput.value = "";
    disinfectantTextInput.value = "";
    medicationTextInput.value = "";

})