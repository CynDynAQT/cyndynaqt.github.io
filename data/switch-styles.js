document.addEventListener('DOMContentLoaded', function () {
    const switchCheckbox = document.getElementById('cssSwitch');
    const stylesheetLink = document.getElementById('stylesheet');

    switchCheckbox.addEventListener('change', function () {
        if (switchCheckbox.checked) {
            stylesheetLink.href = './data/styles.css';
        } else {
            stylesheetLink.href = './data/lightstyles.css';
        }
    });
});
