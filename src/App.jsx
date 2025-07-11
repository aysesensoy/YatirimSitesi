import React from 'react'
import './App.css'
import Doviz from './Doviz'
import Gold from './Gold'
import Tarih from './tarih'

function App() {

  return (
    <>
      <div className="row">
        <Tarih/>
        <hr />
        <Gold />
      </div>
      <hr />
      <div className="row">
        <Doviz />
      </div>
      <hr />
    </>
  )
}

export default App;