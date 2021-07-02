let panels = document.querySelectorAll('.panel');
panels.forEach((panel) => {
    panel.addEventListener('click', function() {
        removeAllActivePanels();
        panel.classList.add('active');
    })
});

function removeAllActivePanels() {
    panels.forEach((panel) => {
        panel.classList.remove('active');
    })
}