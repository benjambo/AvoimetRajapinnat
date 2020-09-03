import React, { useEffect, useState } from 'react'
import './App.css';
const App = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.citybik.es/v2/networks/citybikes-helsinki')
      .then((res) => res.json())
      .then((res) => setData(res.network.stations))
  }, [])

  const listBikes = () =>
    data.map((e) => (
      <tr key={e.name}>
        <td>{e.name}</td>
        <td>{e.free_bikes}</td>
        <td>{e.empty_slots}</td>
      </tr>
    ))

  return (
    <div className="App">
      <h1>Alepa-pyörä Websivusto</h1>
      <table className="tables">
        <thead>
          <tr>
            <th>Pyöräasema: </th>
            <th>Saatavilla olevat pyörät: </th>
            <th>Vapaita paikkoja jäljellä: </th>
          </tr>
        </thead>
        <tbody>{listBikes()}</tbody>
      </table>
    </div>
  )
}

export default App
