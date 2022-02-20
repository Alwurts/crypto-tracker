export default function getHistory(setHistoryState, setLoadingState, whichCrypto, startDate) {
    setLoadingState(true);
    console.log('Getting crypto History');
    //console.log('Start date: ' + startDate); //2021-04-14T00%3A00%3A00Z
    var startUrl = ("https://api.nomics.com/v1/exchange-rates/history?key=44cffefdce04124b246c324236bc07fb50b4a74d");
    var currencyUrl = ("&currency=" + whichCrypto);

    var threeYearsAgoFromNow = new Date();
    threeYearsAgoFromNow.setFullYear(threeYearsAgoFromNow.getFullYear() - 1);

    var startDateUrl = ("&start=" + threeYearsAgoFromNow.toISOString());


    fetch(startUrl + currencyUrl + startDateUrl)
    .then(response => response.json())
    .then((data) => {
      
      //console.log(data[0]['timestamp'])
      var tempArray = [[],[]]
      console.log(tempArray)
      var tempArray2 = [[],[]]
      tempArray2[0].push('a')
      tempArray2[0].push('b')
      tempArray2[1].push('1')
      tempArray2[1].push('2')
      console.log(tempArray2)
      data.map((index,i)=>{
        tempArray[0].push(index['timestamp'].substr(0,10))
        tempArray[1].push(parseFloat(index['rate']).toFixed(4))
        //console.log(index['timestamp'] + ' || ' + index['rate'])
      })
      console.log(tempArray)

      setHistoryState(tempArray);
      setLoadingState(false);
    })
    .catch((error) => {
        console.log(error);
        setHistoryState([]);
        //setLoadingState(true);
    })
    
}