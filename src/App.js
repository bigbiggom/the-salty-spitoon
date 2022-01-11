import React, {useState, useEffect} from 'react'

const App = () => {
  const [summonerName, setSummonerName] = useState('')
  const [teamParams, setTeamParams] = useState('')
  const [champList, setChampList] = useState([])
  const [pickList, setPickList] = useState(null)


  const handleInput = (e) => {
    setSummonerName(e.target.value)
  }
  
  const handleTeamInput = (e) => {
    setTeamParams(e.target.value)
  }

  const handleClick = (e) => {
    fetch(`http://localhost:3001/summoner/${summonerName}`)
    .then(res => res.json())
    .then(json => {
      setChampList(json)
    })
  }

  const handleTeamClick = (e) => {
    fetch(`http://localhost:3001/match/pick/${teamParams}`)
    .then(res => res.json())
    .then(json => {
      setPickList(json.pickResultObj)
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
          champList
            .filter((x, i) => i < 5)
            .map(champInfo => (
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
      <div>
        <input value={teamParams} onChange={handleTeamInput} />
        <button onClick={handleTeamClick}>랜덤픽</button>
      </div>
      {
        pickList && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {
                pickList[0].map(({name, pickedChampions}) => {
                  return (
                    <div style={{ margin: '0 10px' }}>
                      <div style={{ textAlign: 'center', fontSize: 24 }}>{name}</div>
                      <div>
                        {
                          pickedChampions.map(({key, name}) => {
                            return <img style={{ width: 70 }} src={`/images/portraits/120/${key}.png`} />
                          })
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
            <div style={{ textAlign: 'center', fontSize: 16 }}>
              VS
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            {
              pickList[1].map(({name, pickedChampions}) => {
                return (
                  <div style={{ margin: '0 10px' }}>
                    <div style={{ textAlign: 'center', fontSize: 24 }}>{name}</div>
                    <div>
                      {
                        pickedChampions.map(({key, name}) => {
                          return <img style={{ width: 70 }} src={`/images/portraits/120/${key}.png`} />
                        })
                      }
                    </div>
                  </div>
                )
              })
            }
            </div>
          </div>
        )
      }
    </div>
  )

}

export default App
