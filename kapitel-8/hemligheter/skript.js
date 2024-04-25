// Lyssna på en knapp
document.querySelector('button').addEventListener("click", function() {
    // Ändra innehållet på p-elementet
    document.querySelector('p').textContent = "Nah! Finns inget att se här heller";
});
document.querySelector('.varning').addEventListener("click", function() {
    // Ändra innehållet på p-elementet
    document.querySelector('.lyrics').innerHTML = 
    "Det är ett jävla tjatande om alkohol<br>" +
    "De säger att det är nåt som vi inte tål<br>" +
    "Men brännvin, det är nyttigt som själve fan<br>" +
    "Och om våran lever slutar att fungera<br>" +
    "Åker vi till USA och få den opererad";
    
    document.querySelector('.video').innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/nDG3_vrQUvs?si=51WrlLfGawVCv5Zo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
});