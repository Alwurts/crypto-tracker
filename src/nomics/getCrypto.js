import getHistory from "./getHistory";

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

export default function getCrypto(detailState, setLoadingState, whichCrypto = null, doHistory = false, setHistoryState) {
    //console.log('Getting cryptoss')
    setLoadingState(true);
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
            detailState(data.length === 1 ? data[0] : data);
            if(!doHistory) {setLoadingState(false);} // If we are not going to fetch history, then we are done
        } else {
            detailState(data);
            if(!doHistory) {setLoadingState(false);}
        }

        // We have to wait between api calls, other wise a too many request error is raised
        delay(1000).then(() => {
            if (doHistory){
                //console.log("Also getting history")
                getHistory(setHistoryState, setLoadingState, whichCrypto);
            }
        });
       
    })
    .catch((error) => {
        console.log(error);

        // If data fetch fails do something
        setLoadingState(false);
    })
    
}