// ============= GET ALL ELEMENT INNER TEXT PRICE ===============
const getInnerText = (id) => {
  const element = document.getElementById(id);
  const elementValue = parseInt(element.innerText);
  return elementValue;
};

// =========== GET ALL INPUT FIELD VALUE ===============
const getInputValue = (id) => {
  const element = document.getElementById(id);
  return (elementValue = parseInt(element.value));
};

const resetInputField =(id)=>{
   return document.getElementById(id).value = ''
}


// ========== GET ID INPUT FIELD, INNERTEXT AND SET VALUE ===================
const getAndSetValue = ( id1, id2, inputField, innerText) => {
    
  const error = document.getElementById('error');
  
  let element = getInnerText(id1);
  let innerTextElement = document.getElementById(id2);
  const price = getInputValue(inputField) * getInnerText(innerText);

  let totalAmount = element + price; // 2 * 200 = 400;

  innerTextElement.textContent = totalAmount; //



  return price;
};


// =============== BUTTON EVENT =============
document.getElementById("buy-btn").addEventListener("click", () => {
  const res = getAndSetValue(
    "rose-price-total",
    "rose-price-total",
    "rose-field",
    "rose-price"
  );


    calculateTotal(res, "rose-field");


});



// =============== BUTTON EVENT =============
document.getElementById("buy-btn2").addEventListener("click", () => {
  const res = getAndSetValue(
    "chocolate-price-total",
    "chocolate-price-total",
    "chocolate-field",
    "chocolate-price"
  );

    calculateTotal(res, 'chocolate-field');


});



// =============== BUTTON EVENT =============
document.getElementById("buy-btn3").addEventListener("click", () => {
  const res = getAndSetValue(
    "dairy-price-total",
    "dairy-price-total",
    "dairy-field",
    "dairy-price"
  );


    calculateTotal(res, 'dairy-field')
});


// ============ CALCULATE TOTAL =============
const calculateTotal = (res, id) =>{
    
      const allTotal = document.getElementById("total");
      const totalValue = parseInt(allTotal.innerText) + res;

      allTotal.textContent = totalValue;

      document.getElementById(id).value = '';
}




const promoCodeDiscount = () =>{
    const error = document.getElementById('promo-error');
  const promInput = document.getElementById('promo-code');
  const allCostElement = document.getElementById("all-cost");
  const allCostValue = parseFloat(allCostElement.innerText);
  
  const total = document.getElementById('total');
  
  const totalAmount  = parseFloat(total.innerText);

  if(promInput.value == 101){
    const cost = totalAmount * 0.1;
    const res = totalAmount - cost
    allCostElement.innerText = res;
    error.textContent = ''
    promInput.value = ''
  }else{
    error.textContent = 'please provide a valid promo code'
  }
  
}

const applyBtn = document.getElementById('apply-btn');

applyBtn.addEventListener('click', promoCodeDiscount)