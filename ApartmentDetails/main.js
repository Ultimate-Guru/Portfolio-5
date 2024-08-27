const checkbox = document.getElementById('accountActivation');
const Btn = document.getElementById('deactivateButton');

// Toggle the button's disabled state based on checkbox status
checkbox.addEventListener('click', () => {
    Btn.disabled = !checkbox.checked;
});

const url = './assets/data.json';

getData();

async function getData() {
    try {
        let response = await fetch(url);
        if (response.status === 200) {
            let data = await response.json();  // Await the promise from response.json()
            console.log(data);
            return data;
        } else {
            console.log(response.ok);  // response.ok returns true or false
            console.log('Data not found');
            return null;
        }
    } catch (error) {
        console.log('Error:', error);
        return null;
    }
}

const showData = async () => {
    const data = await getData();  // Await the async function
    if (data) {
        const dataElements = document.querySelectorAll('.data-item');  // Use class selector for multiple elements
        dataElements.forEach((element, index) => {
            element.innerHTML = data[index] || 'No data';  // Assign data to each element or display 'No data'
        });
    }
};

showData();