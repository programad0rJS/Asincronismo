let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';


function Fecht_Data(url_Apsi, calls) {
    let oReq = new XMLHttpRequest();
    oReq.open('GET', url_Apsi, true);
    oReq.onreadystatechange = function (eve) {
        if (oReq.readyState === 4) {
            if (oReq.status === 200) {
                calls(null, JSON.parse(oReq.responseText));
            } else {
                const Errors = new Error('No Se Puede' + url_Apsi);
                return calls(Errors, null);
            };
        };
    };
    oReq.send();
};



Fecht_Data(API, function (err_1, datas_1) {
    if (err_1) return console.error(err_1);
    Fecht_Data(API + datas_1.results[0].id, function (err_2, datas_2) {
        if (err_2) return console.error(err_2);

        Fecht_Data(datas_2.origin.url, function (err_3, datas_3) {
            if (err_3) return console.error(err_3);
            console.log(datas_1.info.count);
            console.log(datas_2.name);
            console.log(datas_3.url);
        });
    })
});


// Que es Async/Await 