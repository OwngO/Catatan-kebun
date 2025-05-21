
const form = document.getElementById('form');
const tanggalInput = document.getElementById('tanggal');
const beratInput = document.getElementById('berat');
const dataList = document.getElementById('data-list');

let dataPanen = JSON.parse(localStorage.getItem('dataPanen')) || [];

function render() {
    dataList.innerHTML = '';
    dataPanen.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `${entry.tanggal} – ${entry.berat} kg`;
        dataList.appendChild(li);
    });
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const entry = {
        tanggal: tanggalInput.value,
        berat: parseInt(beratInput.value)
    };
    dataPanen.push(entry);
    localStorage.setItem('dataPanen', JSON.stringify(dataPanen));
    render();
    form.reset();
});

render();
