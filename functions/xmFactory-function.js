function xMonitorFF() {
    var monthlySalary = 0;
    var foodAmount = 0;
    var transportAmount = 0;
    var servicesAmount = 0;
    var otherAmount = 0;
    var disinfectantAmount = 0;
    var medicationAmount = 0;
    var nTotal = 0;
    var cTotal = 0;

    function setSalary(strSalary) {
        monthlySalary = strSalary;

    }

    function getSalary() {
        return monthlySalary;

    }

    function setFoodAmount(strFood) {
        foodAmount = strFood;

    }

    function getFoodAmount() {
        return foodAmount;

    }

    function setTransportAmount(strTransport) {
        transportAmount = strTransport;

    }

    function getTransportAmount() {
        return transportAmount;

    }

    function setServicesAmount(strServices) {
        servicesAmount = strServices;

    }

    function getServicesAmount() {
        return servicesAmount;

    }

    function setOtherAmount(strOtherExpense) {
        otherAmount = strOtherExpense;

    }

    function getOtherAmount() {
        return otherAmount;

    }

    function setDisinfectantAmount(strDisinfectant) {
        disinfectantAmount = strDisinfectant;

    }

    function getDisinfectantAmount() {
        return disinfectantAmount;

    }

    function setMedicationAmount(strMedication) {
        medicationAmount = strMedication;

    }

    function getMedicationAmount() {
        return medicationAmount; 

    }

    function totalNormExpenses(){
        nTotal = getFoodAmount() + getTransportAmount() + getServicesAmount() + getOtherAmount();
        return nTotal;
    
    }

    function totalCovidExpenses() {
        cTotal = getDisinfectantAmount() + getMedicationAmount();
        return cTotal;

    }

    function totalExpenses() {
        return totalNormExpenses() + totalCovidExpenses();;

    }

    function setBalance() {
        return getSalary();

    }

    function getBalance() {
        return setBalance() - (totalNormExpenses() + totalCovidExpenses());

    }

    function covidPer() {
        return totalCovidExpenses() / totalExpenses() * 100;

    }

    return {
        setSalary, getSalary,
        setFoodAmount, getFoodAmount,
        setTransportAmount, getTransportAmount,
        setServicesAmount, getServicesAmount,
        setOtherAmount, getOtherAmount,
        setDisinfectantAmount, getDisinfectantAmount,
        setMedicationAmount, getMedicationAmount,
        totalNormExpenses, totalCovidExpenses,
        totalExpenses, setBalance,
        getBalance, covidPer

    }
}