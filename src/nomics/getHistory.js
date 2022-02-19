export default function getHistory(setState) {
    console.log('Getting cryptoss')
    fetch("https://api.nomics.com/v1/exchange-rates/history?key=44cffefdce04124b246c324236bc07fb50b4a74d&currency=AVAX&start=2021-04-14T00%3A00%3A00Z")
    .then(response => response.json())
    .then((data) => {
      
      console.log(data)
      setState(data);
    })
    .catch((error) => {
        console.log("Couldnt fetch data" + error);
        setState([]);
    })
    
}