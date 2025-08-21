
const checker = (age, hasDisease, income) =>{
    if ((age < 5) && !(hasDisease == "y") && (income < 4500)) {
        return "You are eligible for vaccination"
    } else  {
        return "You are illeligible for vaccination"
    }
}

const childAgeEle = document.getElementById('age')
const childConditionEle = document.getElementById('condition')
const familyIncomeEle = document.getElementById('income')
const submitBtnEle = document.querySelector('.form-btn')
const childCheckEle = document.getElementById('check')

submitBtnEle.addEventListener('click', (event) => {
    event.preventDefault()

    const childAge = parseInt(childAgeEle.value);
    const hasDisease = childConditionEle.value;
    const familyIncome = parseFloat(familyIncomeEle.value);
    const result = checker(childAge, hasDisease, familyIncome);
    
    childCheckEle.textContent = result;

    console.log('Listener Activate Function');
    console.log(result);
});