document.addEventListener('DOMContentLoaded', () => {
    const dateInput = document.getElementById('date');
    const form = document.getElementById('bookingForm');
    const statusMsg = document.getElementById('statusMessage');

    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
        dateInput.value = today;
    }

    if (form && statusMsg) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const dateVal = document.getElementById('date').value;

            statusMsg.textContent = `✓ Booking confirmed for ${name} on ${dateVal}!`;
            statusMsg.className = 'status-message success';
        });
    }
});
