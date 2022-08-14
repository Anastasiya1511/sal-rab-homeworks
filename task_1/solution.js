function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;
    let message = productName;
    message = message + " ";
    message = message "за";
   let message = productPrice;
    message = message " ";
    message = message "теперь в корзине!";

    console.log(message);

    return message;
}
function addInCartCountChange(value) {

    let oldValue = value;
    let newValue = oldValue; 
    console.log (newValue+1);

    return newValue;
}
function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;
    let newSum = oldSum;
    let newSum = difference;
    let newSumText = `${newSum} ₽`

    return newSumText;
}

