const calculateTip = () => {
    const inputElement = document.getElementById('bill');
    const buttons = document.querySelectorAll('.btn-container button');
    const resultText = document.getElementById('result-text');

    if (!inputElement || !buttons.length || !resultText) {
        console.error('Required elements not found in the DOM.');
        return;
    }
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tipPercentage = parseInt(button.id) / 100;
            const billAmount = parseFloat(inputElement.value);

            // Input validation
            if (isNaN(billAmount) || billAmount <= 0) {
                resultText.textContent = "Please enter a valid bill amount.";
                return;
            }

            // Calculate tip and total
            const tipAmount = billAmount * tipPercentage;
            const total = billAmount + tipAmount;

            // Display results on the frontend
            resultText.innerHTML = `
                <strong>Bill Amount:</strong> $${billAmount.toFixed(2)}<br>
                <strong>Tip (${button.id}%):</strong> $${tipAmount.toFixed(2)}<br>
                <strong>Total:</strong> $${total.toFixed(2)}
            `;
        });
    });
};

calculateTip();