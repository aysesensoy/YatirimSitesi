import { useEffect, useState } from 'react'
import axios from "axios";



function Doviz() {
    
let [usdBuy,setUsdBuy] = useState(null) // USD
let [usdSell,setUsdSell] = useState(null);   

let[eurBuy,setEurBuy] =  useState(null);   // EUR
let[eurSell,setEurSell] = useState(null); 

let[gbpBuy,setGbpBuy] = useState(null);   // GBP ingiliz Sterlini
let[gbpSell,setGbpSell] = useState(null);

let[chfBuy, setChfBuy] = useState(null);    // CHF ingiliz Frangı
let[chfSell,setChfSell] = useState(null);  

let[jpyBuy,setJpyBuy] = useState(null);     // JPY Japon Yeni
let[jpySell,setJpySell] = useState(null);     

let[sarBuy,setSarBuy] = useState(null);    // SAR Arabistan Riyali
let[sarSell,setSarSell] = useState(null);    

let[nokBuy,setNokBuy]= useState(null);     // NOK Norveç Kronu
let[nokSell,setNokSell] = useState(null); 

let[dkkBuy, setDkkBuy] = useState(null);   // DKK Danimarka Kronu
let[dkkSell,setDkkSell] = useState(null); 

let[audBuy, setAudBuy] = useState(null);   // AUD Avustralya Doları
let[audSell,setAudSell] = useState(null);   

let[cadBuy,setCadBuy] = useState(null);     // CAD Kanada Doları
let[cadSell,setCadSell] = useState(null);     
 
let[sekBuy,setSekBuy] = useState(null);   // SEK isveç kronu
let[sekSell,setSekSell] = useState(null);  
 
let[rubBuy,setRubBuy] = useState(null);     // RUB Rus Ruble
let[rubSell,setRubSell] = useState(null); 

let[cnyBuy,setCnyBuy] = useState(null);
let[cnySell,setCnySell] = useState(null);

useEffect(()=>{
 const fetchData = () => {
      axios.get('https://finans.truncgil.com/v4/today.json')
.then(response=>{
  setUsdBuy(response.data.USD.Buying);
  setUsdSell(response.data.USD.Selling);
  
  setEurBuy(response.data.EUR.Buying);
  setEurSell(response.data.EUR.Selling);

  setGbpBuy(response.data.GBP.Buying);
  setGbpSell(response.data.GBP.Selling);

  setChfBuy(response.data.CHF.Buying);
  setChfSell(response.data.CHF.Selling);

  setJpyBuy(response.data.JPY.Buying);
  setJpySell(response.data.JPY.Selling);

  setSarBuy(response.data.SAR.Buying);
  setSarSell(response.data.SAR.Selling);

  setNokBuy(response.data.NOK.Buying);
  setNokSell(response.data.NOK.Selling);

  setDkkBuy(response.data.DKK.Buying);
  setDkkSell(response.data.DKK.Selling);

  setAudBuy(response.data.AUD.Buying);
  setAudSell(response.data.AUD.Selling);

  setCadBuy(response.data.CAD.Buying);
  setCadSell(response.data.CAD.Selling);

  setSekBuy(response.data.SEK.Buying);
  setSekSell(response.data.SEK.Selling);

  setRubBuy(response.data.RUB.Buying);
  setRubSell(response.data.RUB.Selling);

  setCnyBuy(response.data.CNY.Buying);
  setCnySell(response.data.CNY.Selling);

})
.catch(error =>console.error(error));
 }
fetchData(); // İlk yüklemede veriyi çek
  const intervalId = setInterval(fetchData, 60000); // Her 60 saniyede bir tekrar et

  return () => clearInterval(intervalId);
},[])

    return(

<div>
<br />
    <h3 className='title_2 text-info'>DÖVİZ</h3>
<br />
    <div className="row text-warning">
          <div className="col"></div>
          <div className="col"><h4>ALIŞ FİYATI</h4></div>
          <div className="col"><h4>SATIŞ FİYATI</h4></div>
    </div>

    <div className="row">
          <div className="col">ABD Doları</div>
          <div className="col">{usdBuy?usdBuy:"yukleniyor..."}</div>
          <div className="col">{usdSell?usdSell:"Yükleniyor..."}</div>
    </div>

    <div className="row text-primary">
          <div className="col">Euro</div>
          <div className="col">{eurBuy?eurBuy:"yukleniyor..."}</div>
          <div className="col">{eurSell?eurSell:"yukleniyor..."}</div>
    </div>

    <div className="row">
          <div className="col">İngiliz Sterlini</div>
          <div className="col">{gbpBuy ? gbpBuy : "yükleniyor..."}</div>
          <div className="col">{gbpSell ? gbpSell : "yükleniyor..."}</div>

    </div>

    <div className="row text-primary">
          <div className="col">İsviçre Frangı</div>
          <div className="col">{chfBuy ? chfBuy : "yükleniyor..."}</div>
          <div className="col">{chfSell ? chfSell : "yükleniyor..."}</div>

    </div>

    <div className="row">
          <div className="col">Japon Yeni</div>
          <div className="col">{jpyBuy ? jpyBuy : "yükleniyor..."}</div>
          <div className="col">{jpySell ? jpySell : "yükleniyor..."}</div>

    </div>

    <div className="row text-primary">
        <div className="col">Suudi Arabistan Riyali</div>
        <div className="col">{sarBuy ? sarBuy : "yükleniyor..."}</div>
        <div className="col">{sarSell ? sarSell : "yükleniyor..."}</div>


    </div>

    <div className="row">
  <div className="col">Norveç Kronu</div>
  <div className="col">{nokBuy ? nokBuy : "yükleniyor..."}</div>
  <div className="col">{nokSell ? nokSell : "yükleniyor..."}</div>
</div>

    <div className="row text-primary">
          <div className="col">Danimarka Kronu</div>
          <div className="col">{dkkBuy ? dkkBuy : "yükleniyor..."}</div>
          <div className="col">{dkkSell ? dkkSell : "yükleniyor..."}</div>

    </div>

    <div className="row">
            <div className="col">Avustralya Doları</div>
            <div className="col">{audBuy ? audBuy : "yükleniyor..."}</div>
            <div className="col">{audSell ? audSell : "yükleniyor..."}</div>

    </div>

    <div className="row text-primary">
        <div className="col">Kanada Doları</div>
        <div className="col">{cadBuy ? cadBuy : "yükleniyor..."}</div>
    <div className="col">{cadSell ? cadSell : "yükleniyor..."}</div>

    </div>

    <div className="row">
          <div className="col">İsveç Kronu</div>
          <div className="col">{sekBuy ? sekBuy : "yükleniyor..."}</div>
          <div className="col">{sekSell ? sekSell : "yükleniyor..."}</div>

    </div>

    <div className="row text-primary">
          <div className="col">Ruble</div>
          <div className="col">{rubBuy ? rubBuy : "yükleniyor..."}</div>
          <div className="col">{rubSell ? rubSell : "yükleniyor..."}</div>

    </div>
<div className="row">
          <div className="col">Çin Yuanı</div>
          <div className="col">{cnyBuy ? cnyBuy : "yükleniyor..."}</div>
          <div className="col">{cnySell ? cnySell : "yükleniyor..."}</div>

    </div>

</div>
    )
}

export default Doviz;

  


