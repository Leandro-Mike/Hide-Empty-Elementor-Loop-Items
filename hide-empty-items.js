document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.e-loop-item').forEach(function (item) {
        if (!item.textContent.trim()) {
            item.style.display = 'none';
        }
    });
});
