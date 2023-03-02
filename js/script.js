{
    const hello = () => {
        console.log("Witam wszystkich deweloperów");
    };


    const calculateResult = (pln, currency) => {
        const USD = 4.48;
        const EUR = 4.74;
        const GBP = 5.35;
        const JPY = 0.033;


        switch (currency) {
            case "USD":
                return pln / USD;

            case "EUR":
                return pln / EUR;

            case "GBP":
                return pln / GBP;

            case "JPY":
                return pln / JPY;
        }
    };

    const updateResult = (result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.value = `${result.toFixed(2)} ${currency}`;
    }



    const onFormSubmit = (event) => {
        event.preventDefault();

        const plnElement = document.querySelector(".js-pln");
        const currencyElement = document.querySelector(".js-currence");
 

        const pln = plnElement.value;
        const currency = currencyElement.value;


        const result = calculateResult(pln, currency);


        updateResult(result, currency);
      
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
        hello(); 
    };

    init();

}