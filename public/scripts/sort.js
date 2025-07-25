document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('sort-form');
  const inputEl = document.getElementById('string-input');
  const outputEl = document.getElementById('output');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const inputValue = inputEl.value.trim();

    if (!inputValue) {
      outputEl.textContent = 'Please enter some comma-separated values.';
      return;
    }

    const strings = inputValue.split(',').map(s => s.trim()).filter(Boolean);
    try {
      const response = await fetch('http://localhost:8141/api/v1/sort', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ strings })
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      outputEl.textContent = JSON.stringify(data.sorted, null, 2);
    } catch (err) {
      outputEl.textContent = `Error: ${err.message}`;
    }
  });
});
