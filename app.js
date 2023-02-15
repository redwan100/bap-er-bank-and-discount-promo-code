// SELECT ALL ELEMENT FIELD-------------
const loginInput = document.getElementById('login-input');
const loginPassword = document.getElementById('login-password');
const bankRegister = document.getElementById('bank-register');
const bankForm = document.getElementById('bank-form');
const balance = document.getElementById('balance');
const withdrawBalance = document.getElementById('withdraw-balance');
const depositBalance = document.getElementById('deposit-balance');
const submitBtn = document.getElementById('submit-btn');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

const inputValue = (id) =>{
    const inputElement = document.getElementById(id);
    const inputValue = parseFloat(inputElement.value);
    inputElement.value = '';
    return inputValue;
}


// ================= HANDLE LOGIN FORM================ 
const handleSubmit  = (e) => {
    e.preventDefault();
    const value = loginInput.value
    if(value.includes('@email' || '@gmail') && loginPassword.length !== 0){
        bankRegister.style.display = 'none';
        bankForm.style.display = 'grid';
    }else{
        alert('Please enter valid email or password');
    }
}

submitBtn.addEventListener('click', handleSubmit);

// ================= HANDLE DEPOSIT===================== 

const depositHandler = () => {
  // const inputValue = parseFloat(depositInput.value);
  const depositInput = inputValue("deposit-input");

  const depositBal = parseFloat(depositBalance.innerText) + depositInput;

  depositBalance.innerText = depositBal;

//   GET TOTAL AMOUNT AND ADD DEPOSIT AMOUNT
  const totalBalance = parseFloat(balance.innerText);
  balance.innerText = totalBalance + depositInput
  
  
}

depositBtn.addEventListener('click', depositHandler)

// ==================== CHANGE INNERTEXT ====================== 
const changeInnerText = (id) => {
  const element = document.getElementById(id);
  const elementText = parseFloat(element.innerText)
  return elementText;
};


// ==================HANDLE WITHDRAW================ 
const handleWithdraw = () => {

    const withdrawAmount = inputValue('withdraw-input');

    const withdraw = parseFloat(withdrawBalance.innerText);
    withdrawBalance.innerText = withdraw +  withdrawAmount;
    
    balance.innerText = balance.innerText - withdrawAmount;

}



withdrawBtn.addEventListener('click', handleWithdraw);


