const url = './data.json';

getData();

async function getData() {
    try {
        let response = await fetch(url);
        if (response.status === 200) {
            let data = await response.json();  // Await the promise from response.json()
            console.log(data);
        } else {
            console.log(response.ok);  // response.ok returns true or false
            console.log('Data not found');
        }
    } catch (error) {
        console.log('Error:', error);
    }
}