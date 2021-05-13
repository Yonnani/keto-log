console.log('test');

const ketoneValueSelector = document.getElementById('ketone-value-selector');
const breathValueInput = document.getElementById('breath-ketone-value');
const bloodValueInput = document.getElementById('blood-ketone-value');

ketoneValueSelector.addEventListener('change', (e) => {
    let targetVal = e.target.value;
    let className = 'hide';
    if (targetVal === 'blood') {
        bloodValueInput.classList.remove(className);
        breathValueInput.classList.add(className);
    } else {
        bloodValueInput.classList.add(className);
        breathValueInput.classList.remove(className);
    }
});

