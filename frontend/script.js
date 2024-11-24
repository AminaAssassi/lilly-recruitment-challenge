// Fetch and display medicines on page load
/**
fetch("http://localhost:8000/medicines")
    .then(response => response.json())
    .then(data => displayMedicines(data.medicines))
    .catch(error => console.error("Error:", error));

function displayMedicines(medicines) {
    const container = document.getElementById("medicines-container");
    container.innerHTML = ""; // Clear previous content

    medicines.forEach(med => {
        const medDiv = document.createElement("div");
        medDiv.innerHTML = `<h3>${med.name}</h3><p>Price: $${med.price}</p>`;
        container.appendChild(medDiv);
    });
}*/

/** 
fetch("http://localhost:8000/medicines")
    .then(res => {
        return res.json();

    })
    .then(data =>{
        data.forEach(medicine => {
            const markup = `<li>${medicine.name}</li>`;

            document.querySelector('ul').insertAdjacentHTML('beforeend',markup);
        });
    })
    .catch(error => console.log(error));
*/


fetch("http://127.0.0.1:8000/medicines")
//.then(res=> console.log(result))
.then(response => response.json())
.then(res =>{
    const data = res.medicines;
    let rows = '';
    data.forEach(medicine =>(
        rows += `<tr> <td> ${medicine.name}</td><td> ${medicine.price}</td></tr>`
    ))
    document.getElementById('tableRows').innerHTML = rows;
})
.catch(error => console.log(error));
