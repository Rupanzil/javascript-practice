// 1. Take input of height
const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const height = (parseFloat(document.querySelector("#height").value))/100
    const weight = parseFloat(document.querySelector("#weight").value)
    const results = document.querySelector("#results")

    if (height == "" || height < 0 || isNaN(height)) {
        results.innerHTML = "Please enter a valid height!"
    } else if (weight == "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please enter a valid weight!"
    } else {
        const bmi = (weight / (height * height)).toFixed(2)
        const bmiCategory = calculateBmiCategory(bmi)
        results.innerHTML = `<p>BMI is ${bmi} <br> Category: ${bmiCategory} </p>`
    }

    
});

function calculateBmiCategory ( bmi ) {
    if ( bmi < 18.6 ) {
        return "Under Weight"
    } else  if (bmi >= 18.6 && bmi <= 24.9) {
        return "Normal Range"
    } else return "Overweight"
}

// 2. Take input of weight
// 3. calculate BMI according to formula
// 4. Show the result in web page
// 5. Classify it in the BMI category
// 6. Show the category in the web page