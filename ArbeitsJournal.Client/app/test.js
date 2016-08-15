var xmlhttp = new XMLHttpRequest();
var serverUrl = "http://localhost:3364/rest/api";


function httpGetAsync(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    var serviceUrl = serverUrl + url;
    console.log("serviceUrl: ", serverUrl);
    xmlHttp.open("GET", serviceUrl, true); // true for asynchronous 
    xmlHttp.send(null);
};

function setResultat(resultat) {
    document.getElementById("resultat").innerHTML = resultat;
    console.log("resultat: ", resultat);
};