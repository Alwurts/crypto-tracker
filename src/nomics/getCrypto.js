export default function getCrypto(setCrypto, setLoading, whichCrypto = null) {
    //console.log('Getting cryptoss')
    setLoading(true);
    var url;
    if (whichCrypto){
        url = "https://api.nomics.com/v1/currencies/ticker?key=44cffefdce04124b246c324236bc07fb50b4a74d&interval=1d&per-page=10&page=1&ids=" + whichCrypto
    
    } else {
        url = "https://api.nomics.com/v1/currencies/ticker?key=44cffefdce04124b246c324236bc07fb50b4a74d&interval=1d&per-page=20&page=1"
    }
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        //console.log(data);
        if (whichCrypto){
            //console.log("Crypto included")
            //console.log(data.length)
            //console.log(data[0])
            //data.length == 1 ? data[0] : data
            setCrypto(data.length === 1 ? data[0] : data);
            setLoading(false);
        } else {
            setCrypto(data);
            setLoading(false);
        }
    })
    .catch((error) => {
        console.log("Couldnt fetch data" + error);
        setCrypto([]);

        // If data fetch fails do something
        //setLoading(false);
    })
    
}