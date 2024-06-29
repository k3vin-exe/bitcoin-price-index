let URL = "https://api.coindesk.com/v1/bpi/currentprice.json"

async function getInfo() {
    let request = await fetch(URL);
    let data = await request.json();

    return data;
}

async function showInter() {
    let data = await getInfo(); 
    let inter = document.createElement('div');

    inter.innerHTML = `
        <h1><span style="color: yellow;">Bitcoin</span> Price Index</h1>
        <hr>
        <br>
        <div class="container">
            <div class="content">
                <h2>${data.bpi.USD.code} (${data.bpi.USD.description}):</h2>
                <p>1 Bitcoin = ${data.bpi.USD.symbol} ${data.bpi.USD.rate}</p>
            </div>
            <div class="content">
                <h2>${data.bpi.GBP.code} (${data.bpi.GBP.description}):</h2>
                <p>1 Bitcoin = ${data.bpi.GBP.symbol} ${data.bpi.GBP.rate}</p>
            </div>
            <div class="content">
                <h2>${data.bpi.EUR.code} (${data.bpi.EUR.description}):</h2>
                <p>1 Bitcoin = ${data.bpi.EUR.symbol} ${data.bpi.EUR.rate}</p>
            </div>
        </div>
        <div class="disc">
            <br>
            <p>${data.disclaimer}</p>
            <p>${data.time.updated}</p>
            <br>
            <p>&copy; Kévin Brayan</p>
        </div>
    `;

    document.querySelector('body').append(inter);
}

showInter();