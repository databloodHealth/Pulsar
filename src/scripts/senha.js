function toggleCheckbox() {
    const checkbox = document.querySelector('.checkbox');
    const checkmark = checkbox.querySelector('.checkmark');
    checkbox.classList.toggle('checked');
    if (checkbox.classList.contains('checked')) {
        checkmark.style.display = 'block';
    } else {
        checkmark.style.display = 'none';
    }
    event.preventDefault();
}