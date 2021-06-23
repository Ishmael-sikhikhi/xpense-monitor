function xMonitorFF() {
    var monthlySalary = 0;
    var foodAmount = 0;
    var transportAmount = 0;
    var servicesAmount = 0;
    var other1Amount = 0;
    var disinfectantAmount = 0;
    var medicationAmount = 0;
    var other2Amount = 0;

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

    function setOther1Amount(strOtherExpense1) {
        other1Amount = strOtherExpense1;

    }

    function getOther1Amount() {
        return other1Amount;

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

    function setOther2Amount(strOtherExpense2) {
        other2Amount = strOtherExpense2;

    }

    function getOther2Amount() {
        return other2Amount;

    }

    function totalNormExpenses(){
        return getFoodAmount() + getTransportAmount() + getServicesAmount() + getOther1Amount();
    
    }

    function totalCovidExpenses() {
        return getDisinfectantAmount() + getMedicationAmount() + getOther2Amount();

    }

    function totalExpenses() {
        return totalNormExpenses() + totalCovidExpenses();

    }

    return {
        setSalary, getSalary,
        setFoodAmount, getFoodAmount,
        setTransportAmount, getTransportAmount,
        setServicesAmount, getServicesAmount,
        setOther1Amount, getOther1Amount,
        setDisinfectantAmount, getDisinfectantAmount,
        setMedicationAmount, getMedicationAmount,
        setOther2Amount, getOther2Amount,
        totalNormExpenses, totalCovidExpenses,
        totalExpenses

    }
}