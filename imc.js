const calculate = document.getElementById('calculate');

function BMI() {

    const name = document.getElementById('Name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result = document.getElementById('result');


    if (name !== '' && height !== '' && weight !== '') {

        const BMIValue = (weight / (height * height)).toFixed(1);

        let classification = "";

        if (BMIValue < 18.5) {
            classification = 'under weight';
        } else if (BMIValue < 25) {
            classification = 'with ideal weight. woohoo';
        } else if (BMIValue < 30) {
            classification = 'slightly overweight.';
        } else if (BMIValue < 35) {
            classification = 'with obesity grade I';
        } else if (BMIValue < 40) {
            classification = 'with obesity grade II';
        } else {
            classification = 'with obesity grade III,Take care';
        }

        result.textContent = `${name} your BMI is ${BMIValue} and you are ${classification} `;

    } else {
        result.textContent = 'Fill in all the fields !!';
    }

}

calculate.addEventListener('click', BMI);
