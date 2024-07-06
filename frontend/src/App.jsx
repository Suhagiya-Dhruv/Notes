import { useEffect, useState } from 'react'
import axios from 'axios';
const App = () => {

  const [data, setData] = useState([]);


  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5555");

    ws.onmessage = (event) => {
      async function hitApi() {
        const response = await axios.get('http://localhost:5555');
        setData(response.data);
      }
      hitApi();
    }

  }, []);

  useEffect(() => {
    async function hitApi() {
      const response = await axios.get('http://localhost:5555');
      setData(response.data);
    }
    hitApi();
  }, [])

  async function addUser() {
    await axios.post('http://localhost:5555');
  }

  return (
    <div>
      <button onClick={addUser}>Add User</button>
      {data?.map(value => (<h1 key={value}>{value}</h1>))}
    </div>
  )
}

export default App