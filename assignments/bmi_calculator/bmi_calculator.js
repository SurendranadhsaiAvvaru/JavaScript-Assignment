// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    let h,BMI
    if((typeof(mass) !== 'number' || mass<=0) || (typeof(height) !== 'number' || height<=0)){
        return ("INVALID INPUT");
    }
    else{
        h = height/100;
        BMI = mass / (height * height);
        return (BMI);
    }
}

module.exports = BMICalculator;
