const dataProv = document.querySelector(".data-prov");
const Http = new XMLHttpRequest();
const url='https://indonesia-covid-19.mathdro.id/api/provinsi';
Http.open('GET', url);
Http.send();
Http.onreadystatechange = () => {
    if (Http.readyState == 4 && Http.status == 200) {
        var coronaData = JSON.parse(Http.responseText);
        let temp= "";
        for (var i = 0; i < coronaData.data.length; i++) {
            temp+=CovidProvinceData(coronaData.data[i]);
            dataProv.innerHTML = temp;
        }
        hideLoading();
    }
}

function CovidProvinceData(data) {
    return `<div class="container">
              <div class="namaProv">
                <h2><span class="id">#${data.fid}</span>${data.provinsi}</h2>
              </div>
              <div class="item">
                <div class="positive">
                  <p>${data.kasusPosi}</p>
                  <div class="space"></div>
                  <p>Positive</p>
                </div>
              </div>
              <hr/>
              <div class="item">
                <div class="recovered">
                  <p>${data.kasusSemb}</p>
                  <div class="space"></div>
                  <p>Recovered</p>
                </div>
              </div>
              <hr/>
              <div class="item">
                <div class="death">
                  <p>${data.kasusMeni}</p>
                  <div class="space"></div>
                  <p>Death</p>
                </div>
              </div>
            </div> `;
  }

var keyword = document.getElementById("keyword");


keyword.addEventListener('keyup', function (e) {
    openLoading();
    const Http = new XMLHttpRequest();
    const url='https://indonesia-covid-19.mathdro.id/api/provinsi';
    Http.open('GET', url);
    Http.send();
    Http.onreadystatechange = () => {
        if (Http.readyState == 4 && Http.status == 200) {
       
            var coronaData = JSON.parse(Http.responseText);
            let temp= "";
            console.log(keyword.value.toLowerCase());
            for (var i = 0; i < coronaData.data.length; i++) {
                var search = coronaData.data[i].provinsi.toLowerCase();
                if(search.includes(keyword.value.toLowerCase())){
                    temp+=CovidProvinceData(coronaData.data[i]);
                    dataProv.innerHTML = temp;
                }
                
            }
           hideLoading();
        }  
        
    }
});
  
function hideLoading(){
  document.getElementById('loading').style.display = 'none';

}

function openLoading(){
  document.getElementById('loading').style.display = 'block';
}

