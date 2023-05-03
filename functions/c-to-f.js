function convertCtoF(tempC) {
    const tempF = (tempC * 9/5) + 32;
    return tempF
}
const tempF=convertCtoF(212);
console.log("The tempreture in Fahrenheit is" , tempF);