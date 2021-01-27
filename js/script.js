const Http = new XMLHttpRequest();
const url='https://indonesia-covid-19.mathdro.id/api/';
Http.open('GET', url);
Http.send();
Http.onreadystatechange = () => {
    if(Http.readyState == 4 && Http.status == 200){
        console.log(Http.responseText);
        const coronaData = JSON.parse(Http.responseText);
        document.getElementById('totCase').innerHTML = coronaData.jumlahKasus;
        document.getElementById('totPositive').innerHTML = coronaData.perawatan;
        document.getElementById('totRecovered').innerHTML = coronaData.sembuh;
        document.getElementById('totDeath').innerHTML = coronaData.meninggal;
        hideLoading();
    }
}


function hideLoading(){
    document.getElementById('loading').style.display = 'none';

}

function openLoading(){
    document.getElementById('loading').style.display = 'block';
}


