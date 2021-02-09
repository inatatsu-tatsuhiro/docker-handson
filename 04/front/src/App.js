import * as React from 'react'
import axios from 'axios'

const initUser = {
  id: '0000000000',
  name: 'noname',
  nickname: 'noname',
  age: '10000'
}

function App() {
  const [json, setJson] = React.useState(initUser)
  const [id, serId] = React.useState(0)

  const handleChange = e => {
    serId(e.target.value)
  }
  const handleClick = e => {
    const query = `/api/users/${id-0}`
    axios.get(query).then(res => {
      setJson(res.data[0])
    })
    setJson({
      user: "aaa"
    })
  }
  return (
    <div>
      <h1>Serch User from <a href="http://localhost:8080/sql.php?server=1&db=docker&table=users&pos=0" target="_blank">here</a></h1>
      <input onChange={handleChange} />
      <button onClick={handleClick}>GET USER</button>
      <div>
        <h2>ID: {json.id}</h2>
        <h2>NAME: {json.name}</h2>
        <h2>NICKNAME: {json.nickname}</h2>
        <h2>AGE: {json.age}</h2>
      </div>
    </div>
  );
}

export default App;
