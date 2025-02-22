function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value / 100;
    let resultElement = document.getElementById('result');
    let tipsElement = document.getElementById('tips');
    let resultBox = document.getElementById('result-box');

    if (weight <= 0 || height <= 0) {
        resultElement.innerText = "Please enter valid positive values.";
        resultBox.style.backgroundColor = "white";
        tipsElement.innerText = "";
        return;
    }

    let bmi = (weight / (height * height)).toFixed(2);
    let category = getBMICategory(bmi);
    resultElement.innerText = `Your BMI: ${bmi} (${category})`;
    resultBox.style.backgroundColor = getColor(category);
    resultElement.style.color = "black";
    tipsElement.innerText = getTips(category);
}

function getBMICategory(bmi) {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal weight";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
}

function getColor(category) {
    if (category === "Underweight") return "yellow";
    if (category === "Normal weight") return "green";
    if (category === "Overweight") return "orange";
    return "red";
}

function getTips(category) {
    if (category === "Underweight") return "Consider eating a balanced diet with more protein and healthy fats.";
    if (category === "Normal weight") return "Maintain your healthy lifestyle with regular exercise and a balanced diet.";
    if (category === "Overweight") return "Incorporate more physical activity and watch your portion sizes.";
    return "Consider consulting a healthcare provider for weight management strategies.";
}