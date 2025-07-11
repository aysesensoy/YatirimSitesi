import { useEffect, useState } from 'react'
import axios from "axios"
import AltinHsp from './altinHsp';



function Gold() {
    

let [graBuy,setGrabuy] = useState(null);
let [graSell, setGraSell] = useState(null);

let [ceyrekBuy,setCeyrekBuy] = useState(null);
let [ceyrekSell,setCeyrekSell] = useState(null);

let [yarimBuy,setYarimBuy] = useState(null);
let [yarimSell,setYarimSell] = useState(null);

let [cumhuriyetBuy,setCumhuriyetBuy] = useState(null);
let [cumhuriyetSell,setCumhuriyetSell] = useState(null);

let [resatBuy,setResatBuy] = useState(null);
let [resatSell,setResatSell] = useState(null);


useEffect(()=>{
 const fetchData = () => {
  axios.get('https://finans.truncgil.com/v4/today.json')
.then(response=>{
  setGrabuy(response.data.GRA.Buying);
  setGraSell(response.data.GRA.Selling);

  setCeyrekBuy(response.data.CEYREKALTIN.Buying);
  setCeyrekSell(response.data.CEYREKALTIN.Selling);

  setYarimBuy(response.data.YARIMALTIN.Buying);
  setYarimSell(response.data.YARIMALTIN.Selling);

  setCumhuriyetBuy(response.data.CUMHURIYETALTINI.Buying);
  setCumhuriyetSell(response.data.CUMHURIYETALTINI.Selling);

  setResatBuy(response.data.RESATALTIN.Buying);
  setResatSell(response.data.RESATALTIN.Selling);

})
.catch(error =>console.error(error));
 };
fetchData();
const intervalId = setInterval(fetchData, 60000);
return () => clearInterval(intervalId);

},[])



    return(

        <>
      <div>
        <br />
        <h3 className='title_2 text-info'>ALTINLAR</h3>
        <br />
        <div className="row text-warning">
          <div className="col"></div>
          <div className="col"><h4>ALIŞ FİYATI</h4></div>
          <div className="col"><h4>SATIŞ FİYATI</h4></div>
        </div>
        <br />
        <div className="row text-primary">
          <div className="col"><h5>Gram Altın</h5></div>
          <div className="col">{graBuy?graBuy:"yükleniyor..."}</div>
          <div className="col">{graSell?graSell:"yükleniyor..."}</div>
        </div>
        <div className="row">
          <div className="col"><h5>Çeyrek Altın</h5></div>
          <div className="col">{ceyrekBuy?ceyrekBuy:"yükleniyor..."}</div>
          <div className="col">{ceyrekSell?ceyrekSell:"yükleniyor..."}</div>
        </div>
        <div className="row text-primary">
          <div className="col"><h5>Yarım Altın</h5></div>
          <div className="col">{yarimBuy?yarimBuy:"yükleniyor..."}</div>
          <div className="col">{yarimSell?yarimSell:"yükleniyor..."}</div>
        </div>
        <div className="row">
          <div className="col"><h5>Cumhuriyet Altın</h5></div>
          <div className="col">{cumhuriyetBuy?cumhuriyetBuy:"yükleniyor..."}</div>
          <div className="col">{cumhuriyetSell?cumhuriyetSell:"yükleniyor..."}</div>
        </div>
        <div className="row text-primary">
          <div className="col"><h5>Reşat Altın</h5></div>
          <div className="col">{resatBuy?resatBuy:"yükleniyor..."}</div>
          <div className="col">{resatSell?resatSell:"yükleniyor..."}</div>
        </div>
      </div>
      <br />
       

        </>


    )
}







export default Gold;