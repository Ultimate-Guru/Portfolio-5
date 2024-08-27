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





// Sample data
var jsonData = [
    {
        "Apartment Number": 1,
        "Floor Number": 3,
        "Number of Rooms": 3,
        "Size in SQFT": 950,
        "Balcony": true,
        "Parking Space": true,
        "Number of Bedrooms": 2,
        "Heating System": "Gas",
        "Electricity Supply": "Uninterrupted",
        "Rent Price": 2200,
        "Maintenance Fee": 250,
        "Condition": "Excellent",
        "IsFurnished": true,
        "Kitchen Type": "Open",
        "Air Condition": true,
        "Internet Ready": true,
        "Sale Price": 350000,
        "IsOccupied": false,
        "Number of Bathrooms": 2,
        "Flooring Type": "Hardwood",
        "Water Supply": "City",
        "Cable TV Ready": false,
        "Security Update": 2023,
        "Last Renovation": 2020
    }
];

// Function to populate data
function populateData(data) {
    // Assuming data is an array and you want the first item
    const apartment = data[0];

    // Populate each element by ID
    document.getElementById('apartmentNumber').textContent = apartment["Apartment Number"];
    document.getElementById('floorNumber').textContent = apartment["Floor Number"];
    document.getElementById('numberOfRooms').textContent = apartment["Number of Rooms"];
    document.getElementById('sizeInSQFT').textContent = apartment["Size in SQFT"];
    document.getElementById('balcony').textContent = apartment["Balcony"] ? "Yes" : "No";
    document.getElementById('parkingSpace').textContent = apartment["Parking Space"] ? "Yes" : "No";
    document.getElementById('numberOfBedrooms').textContent = apartment["Number of Bedrooms"];
    document.getElementById('heatingSystem').textContent = apartment["Heating System"];
    document.getElementById('electricitySupply').textContent = apartment["Electricity Supply"];
    document.getElementById('rentPrice').textContent = `$${apartment["Rent Price"]}`;
    document.getElementById('maintenanceFee').textContent = `$${apartment["Maintenance Fee"]}`;
    document.getElementById('condition').textContent = apartment["Condition"];
    document.getElementById('isFurnished').textContent = apartment["IsFurnished"] ? "Yes" : "No";
    document.getElementById('kitchenType').textContent = apartment["Kitchen Type"];
    document.getElementById('airCondition').textContent = apartment["Air Condition"] ? "Yes" : "No";
    document.getElementById('internetReady').textContent = apartment["Internet Ready"] ? "Yes" : "No";
    document.getElementById('salePrice').textContent = `$${apartment["Sale Price"]}`;
    document.getElementById('isOccupied').textContent = apartment["IsOccupied"] ? "Yes" : "No";
    document.getElementById('numberOfBathrooms').textContent = apartment["Number of Bathrooms"];
    document.getElementById('flooringType').textContent = apartment["Flooring Type"];
    document.getElementById('waterSupply').textContent = apartment["Water Supply"];
    document.getElementById('cableTVReady').textContent = apartment["Cable TV Ready"] ? "Yes" : "No";
    document.getElementById('securityUpdate').textContent = apartment["Security Update"];
    document.getElementById('lastRenovation').textContent = apartment["Last Renovation"];
}

// Call the function to populate data
populateData(jsonData);
