import React, { useState } from 'react'
import Header from './Header'
import AfficheImages from './AfficheImages'
import AfficheText from './AfficheText'
import Cart from './Cart'

function App() {
  const [cartVisible,setCartVisible] = useState(false)
  const[compteur,setCompteur] = useState(0)
  return (
    <div className='App'>
      <Header setCartVisible={setCartVisible}/>
      {cartVisible && <Cart setCartVisible={setCartVisible}/>}
      <main>
        <AfficheImages/>
        <AfficheText compteur={compteur} setCompteur={setCompteur}/>
      </main>
    </div>
  )
}

export default App