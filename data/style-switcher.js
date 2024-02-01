document.addEventListener('DOMContentLoaded', function() {
    const styleSwitch = document.getElementById('styleSwitch');
    const styleLink = document.getElementById('styleLink');

    styleSwitch.addEventListener('change', function() {
        if (styleSwitch.checked) {
            styleLink.href = 'lightstyles.css';
        } else {
            styleLink.href = 'styles.css';
        }
    });
});
