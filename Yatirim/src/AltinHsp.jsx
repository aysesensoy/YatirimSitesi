import { useEffect, useState } from 'react'
import axios from "axios"
import SayiInput from './SayiInput'


function AltinHsp() {
    


    return(

        <div>

<div className="row">
        <div className="col"> 
          <select>
          <option value="AltinSec">Altın Sec</option>
          <option value="Gram Altın">Gram Altın</option>
          <option value="Çeyrek Altın">Çeyrek Altın</option>
          <option value="Yarım Altın">Yarım Altın</option>
          <option value="Cumhuriyet Altını">Cumhuriyet Altın</option>
          <option value="Reşat Altın">Reşat Altın</option>
        </select></div>
        <div className="col">
        <SayiInput/>
        </div>
        <div className="col">
          <button type="button" class="btn btn-outline-info">Hesapla</button>
        </div>
        <div className="col">
          <label htmlFor="">0</label>
        </div>
       </div>


        </div>


    )



}


export default AltinHsp;
