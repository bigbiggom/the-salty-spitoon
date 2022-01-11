import React, {useState, useEffect} from 'react'

const App = () => {
  const [champList, setChampList] = useState([])
  const [summonerName, setSummonerName] = useState('')

  const handleInput = (e) => {
    setSummonerName(e.target.value)
  }

  const handleClick = (e) => {
    fetch(`http://localhost:3001/summoner/${summonerName}`)
    .then(res => res.json())
    .then(json => {
      setChampList(json)
    })
  }

  return (
    <div>
      <div>
        <input value={summonerName} onChange={handleInput} />
        <button onClick={handleClick}>소환사 조회</button>
      </div>
      <ul>
        {
          champList.map(champInfo => (
            <li>
              <img
                src={`/images/portraits/120/${champInfo.key}.png`}
                alt={champInfo.name}
              />
              {champInfo.name}
            </li>
          ))
        }
      </ul>
    </div>
  )

}

export default App
