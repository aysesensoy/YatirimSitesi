import { useEffect, useState } from 'react'
import axios from "axios"

function Tarih() {
  const [tarih, setTarih] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://finans.truncgil.com/v4/today.json')
        .then(res => {
          setTarih(res.data.Update_Date);
        })
        .catch(error => console.error(error));
    };

    fetchData(); // İlk yüklemede veriyi çek
    const intervalId = setInterval(fetchData, 60000); // Her 60 saniyede bir tekrar et

    return () => clearInterval(intervalId); // Bileşen unmount olursa temizle
  }, []);

  return (
    <>
      <div className="row">
        <p className='text-muted'>{"Son Güncelleme Tarihi " + tarih}</p>
    </div>

    </>
  )
}

export default Tarih;