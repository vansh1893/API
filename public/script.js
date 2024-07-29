document.getElementById('loadDataBtn').addEventListener('click', async () => {  // This function used that when loadDatabtn is clicked a async function is start and fetch data
    const response = await fetch('/api/cameras');  // fetching data
    const data = await response.json();
    displayData(data); 
});
// displaying data
function displayData(data) {
    let ulContent = "<ul>";
    data.forEach(item => {
        ulContent += `
            <li>
                <h3>${item.model}</h3>
                <p>Rating: ${item.rating}</p>
                <p>Price: $${item.price}</p>
                <p>Instock: ${item.Instock}</p>
                <img src="${item.image}" alt="${item.model}" width="200">
            </li>
        `;
    });
    ulContent += "</ul>";
    document.getElementById('inventory').innerHTML = ulContent;
}
