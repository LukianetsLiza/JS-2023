const car = [];

const tableBody = document.querySelector('#product-table tbody');
function addCarToTable(car) {

    tableBody.innerHTML += `<tr>
                                <th scope="row">${car.id}</th>
                                <td>${car.model}</td>
                                <td>${car.year}</td>
                                <td>${car.price}$</td>
                                <td>${car.color}</td>
                                <td>${car.status}</td>
                            </tr>`;
}

function readCar() {
    const modelInput = document.getElementById('modelInput');
    const yearInput = document.getElementById('yearInput');
    const priceInput = document.getElementById('priceInput');
    const colorInput = document.getElementById('colorInput');
    const statusInput = document.getElementById('statusInput');

    if(
        modelInput.value === '' ||
        yearInput.value === '' ||
        priceInput.value === '' ||
        colorInput.value === '' ||
        statusInput.value === ''
    ) {
        return null;
    }
    return {
        id: car.length + 4,
        model: modelInput.value,
        year: yearInput.value,
        price: priceInput.value,
        color: colorInput.value,
        status: statusInput.value
    };
}

const addBtn = document.getElementById('add-product-btn');
const clearBtn = document.getElementById('clear-all-btn');

addBtn.onclick = () => {
    event.preventDefault();
    const newCar = readCar();

    car.push(newCar);
    addCarToTable(newCar);
}

clearBtn.onclick = () => {
    tableBody.innerHTML = '';
    car.splice(0);
}