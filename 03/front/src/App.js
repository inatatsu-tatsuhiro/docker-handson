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

  const handleClick = e => {
    axios.get('/api/users').then(res => {
      setJson(res.data.user)
    })
    setJson({
      user: "aaa"
    })
  }
  return (
    <div>
      <h1>Hi React App</h1>
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
