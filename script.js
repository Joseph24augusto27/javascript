const convertButton = document.querySelector(".convert-button")
const currencySelectFirst = document.querySelector(".currency-select-first")
const currencySelect = document.querySelector(".currency-select")

function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencySelect = document.querySelector(".currency-select")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueToConverted = document.querySelector(".currency-value-converted")
    const currencySelectFirst = document.querySelector(".currency-select-first")
    
    const realToday = 1.00
    const dolarToday = 6.15
    const euroToday = 6.41
    const bitcoinToday = 592.60
    

    if(currencySelect.value == "real") {

        currencyValueToConverted.innerHTML = new Intl.NumberFormat ("pt-BR", {
            style: "currency",
            currency:"BRL"
          } ).format (inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "dolar") {

        currencyValueToConverted.innerHTML = new Intl.NumberFormat ("en-US", {
            style: "currency",
            currency:"USD"
          } ).format (inputCurrencyValue / dolarToday)
    }

    if(currencySelect.value == "euro") 

    {currencyValueToConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
        style: "currency",
        currency: "EUR"
        } ).format(inputCurrencyValue/euroToday)}

    if(currencySelect.value == "bitcoin") {

        currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "BTC",
                minimumFractionDigits: 8
                } ).format(inputCurrencyValue/bitcoinToday)
            }







            if(currencySelectFirst.value == "real") {

                currencyValueToConverted.innerHTML = new Intl.NumberFormat ("pt-BR", {
                    style: "currency",
                    currency:"BRL"
                  } ).format (inputCurrencyValue / dolarToday)
            }
        
            if(currencySelectFirst.value == "dolar") {
        
                currencyValueToConverted.innerHTML = new Intl.NumberFormat ("en-US", {
                    style: "currency",
                    currency:"USD"
                  } ).format (inputCurrencyValue / dolarToday)
            }
        
            if(currencySelectFirst.value == "euro") 
        
            {currencyValueToConverted.innerHTML = new Intl.NumberFormat ("de-DE", {
                style: "currency",
                currency: "EUR"
                } ).format(inputCurrencyValue/euroToday)}
        
            if(currencySelectFirst.value == "bitcoin") {
        
                currencyValueToConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "BTC",
                        minimumFractionDigits: 8
                        } ).format(inputCurrencyValue/bitcoinToday)
                    }
        
    i

}

function changeCurency (){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const imgReal = document.querySelector(".img-real")
    const currencyReal = document.querySelector(".currency-real")
    



if ( currencySelect.value == "real") {
            currencyName.innerHTML = "real"
            currencyImage.src = "./assets/brasil 2.png"
        }

if ( currencySelect.value == "dolar") 
        {
        currencyName.innerHTML = "dolar"
        currencyImage.src = "./assets/dollar$.png"
    }

if ( currencySelect.value == "euro") 
        {
        currencyName.innerHTML = "Euro"
        currencyImage.src ="./assets/euro.png"
    }

if ( currencySelect.value == "bitcoin") 
        {
        currencyName.innerHTML = "bitcoin"
        currencyImage.src ="./assets/bitcoin 1.png"
    }

    

    
if ( currencySelectFirst.value == "real") {
        currencyReal.innerHTML = "real"
        imgReal.src = "./assets/brasil 2.png"
    }

if ( currencySelectFirst.value == "dolar") 
    {
    currencyReal.innerHTML = "dolar"
    imgReal.src = "./assets/dollar$.png"
}

if ( currencySelectFirst.value == "euro") 
    {
    currencyReal.innerHTML = "Euro"
    imgReal.src ="./assets/euro.png"
}

if ( currencySelectFirst.value == "bitcoin") 
    {
    currencyReal.innerHTML = "bitcoin"
    imgReal.src ="./assets/bitcoin 1.png"
}



    convertValues ()
}


currencySelect.addEventListener("change", changeCurency)
convertButton.addEventListener("click", convertValues )
currencySelectFirst.addEventListener("change", changeCurency)