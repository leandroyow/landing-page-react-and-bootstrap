import Navbar from './components/navbar'
import Main from './components/main-divider'
import { generalContext } from './context/context'
import { useState } from 'react';
import './styles/App.css'

function App() {
  const [quantity, setQuantity] = useState(0);
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [productTitle, setTitle] = useState("title");

  return (
      <generalContext.Provider 
      value={{quantity,setQuantity,count,setCount,price,setPrice,productTitle,setTitle }}>
      <Navbar/>
      <Main />  
      </generalContext.Provider>
  )
}

export default App
