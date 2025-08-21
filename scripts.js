// Eligibility checker function
const checker = (age, hasDisease, income) => {
    if ((age < 5) && (hasDisease === "yes") && (income > 4500)) {
        return "You are eligible for vaccination";
    } else {
        return "You are ineligible for vaccination";
    }
};

// DOM elements
const childAgeEle = document.getElementById('age');
const childConditionEle = document.getElementById('condition');
const familyIncomeEle = document.getElementById('income');
const submitBtnEle = document.querySelector('.btn');
const childCheckEle = document.getElementById('check');

// Event listener for form submission
submitBtnEle.addEventListener('click', (event) => {
    event.preventDefault();

    // Get and parse input values
    const childAge = parseInt(childAgeEle.value);
    const hasDisease = childConditionEle.value;
    const familyIncome = parseFloat(familyIncomeEle.value);

    // Validation
    if (isNaN(childAge) || childAge < 0) {
        childCheckEle.textContent = "Please enter a valid age.";
        return;
    }
    if (!hasDisease) {
        childCheckEle.textContent = "Please select a disease status.";
        return;
    }
    if (isNaN(familyIncome) || familyIncome < 0) {
        childCheckEle.textContent = "Please enter a valid income.";
        return;
    }

    // Check eligibility and display result
    const result = checker(childAge, hasDisease, familyIncome);
    childCheckEle.textContent = result;

    console.log('Listener Activate Function');
    console.log(result);
});