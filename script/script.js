'use strict'

const primaryCurrency = document.getElementById('primary-currency')
const secondaryCurrency = document.getElementById('secondary-currency')
const primaryValue = document.getElementById('primary-input')
const secondaryValue = document.getElementById('secondary-input')
const text = document.getElementById('text')
const swap = document.getElementById('swap')

const currencyList1 = ['USD','EUR','INR','RSD']
const currencyList2 = ['USD','EUR','INR','RSD']

let url =  'https://v6.exchangerate-api.com/v6/6b27df6c8c8e3abbc9bbd414/latest/'

primaryValue.value= 1

currencyList1.forEach(a=>{
    const dropdown = document.createElement('option')
   
    dropdown.innerHTML= a
    dropdown.value=a
    primaryCurrency.appendChild(dropdown)
})

currencyList2.forEach(a=>{
    const dropdown = document.createElement('option')
    
    dropdown.innerHTML= a
    dropdown.value=a
    secondaryCurrency.appendChild(dropdown)
})

const calculate = function(){
    const currencyE1 = primaryCurrency.value;
    const currencyE2 = secondaryCurrency.value;
    const newUrl = `${url}${currencyE1}`
    
    fetch(newUrl)
    .then((res)=>res.json())
    .then((data)=>
    { 
        // console.log(data.conversion_rates)
        const rate = data.conversion_rates[currencyE2]
        text.innerHTML = `1 ${currencyE1} is ${rate} ${currencyE2}`
       
        secondaryValue.value= primaryValue.value*rate
    })

    
}

calculate()

primaryCurrency.addEventListener('change',()=>{
    
    calculate()

})

secondaryCurrency.addEventListener('change',()=>{
    console.log("KO")
    calculate()

})

primaryValue.addEventListener('input',()=>{
    console.log("ino")
    calculate()
})

swap.addEventListener('click',()=>{
    const temp = primaryCurrency.value
    primaryCurrency.value = secondaryCurrency.value
    secondaryCurrency.value = temp
    calculate()
})











console.log("conn")



