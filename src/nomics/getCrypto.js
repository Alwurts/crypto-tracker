export default function getCrypto(setCrypto, whichCrypto = null) {
    //console.log('Getting cryptoss')
    if (whichCrypto){
        var url = "https://api.nomics.com/v1/currencies/ticker?key=44cffefdce04124b246c324236bc07fb50b4a74d&interval=1d&per-page=10&page=1&ids=" + whichCrypto
    
    } else {
        var url = "https://api.nomics.com/v1/currencies/ticker?key=44cffefdce04124b246c324236bc07fb50b4a74d&interval=1d&per-page=10&page=1"
    }
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        //console.log(data);
        setCrypto(data);
    })
    .catch((error) => {
        console.log("Couldnt fetch data" + error);
        setCrypto([]);
    })
    
}