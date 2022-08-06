let cryptos = ['XMRUSDT', 'SHIBUSDT', 'ETHUSDT'];
let endpoint = 'https://api.binance.com/api/v3/ticker/price';
let intervalID = window.setInterval(myCallback, 500);

function myCallback() {
fetch(endpoint)
    .then( response => response.json() )
    .then( datos => showData(datos))
    .catch( e => console.log(e))   
}

let showData = (data)=>{
    
    let body = ''
    for (let i=0; i < data.length; i++) 
    {
        if (data[i].symbol == cryptos[0] || data[i].symbol == cryptos[1] || data[i].symbol == cryptos[2])
        {
            body += `<tr><td>${data[i].symbol}</td><td>${data[i].price}</td></tr>`;
        }
    }

    document.getElementById('data').innerHTML = body;
}    