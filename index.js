document.addEventListener("DOMContentLoaded", function() {
    fetch('https://api.thecompaniesapi.com/v2/locations/countries')
        .then(response => response.json())
        .then(data => {
            const countries = data.countries || []; 
            const listpays = document.getElementById('list-pays');
            
            countries.forEach(country => {
                const lilist = document.createElement('li');
                lilist.className = 'country-item m-5';
                
                const flagImg = document.createElement('img');

                flagImg.src = ` https://flagcdn.com/w320/${country.code.toLowerCase()}.png `;    
                flagImg.alt = `${country.name} Flag`;
                flagImg.width = 50; 
                
                const nompays = document.createTextNode(country.nameFr || 'Nom non disponible');
                
                lilist.appendChild(flagImg);
                lilist.appendChild(nompays);
                listpays.appendChild(lilist);
            });
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});
