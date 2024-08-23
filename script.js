// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const currentDateElement = document.getElementById('current-date');
    const nextFortnightElement = document.getElementById('next-fortnight');
    const calculateButton = document.getElementById('calculate-btn');
    
    function updateDateInfo() {
        const now = new Date();
        currentDateElement.textContent = `Current Date: ${now.toDateString()}`;
        
        const nextFortnight = new Date(now);
        nextFortnight.setDate(now.getDate() + 14);
        nextFortnightElement.textContent = `Next Fortnight Date: ${nextFortnight.toDateString()}`;
    }
    
    calculateButton.addEventListener('click', updateDateInfo);

    // Initial load
    updateDateInfo();
});
