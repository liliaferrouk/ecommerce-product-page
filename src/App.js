import React, { useState } from 'react'
import Header from './Header'
import AfficheImages from './AfficheImages'
import AfficheText from './AfficheText'
import Cart from './Cart'

function App() {
  const [cartVisible,setCartVisible] = useState(false)
  const[compteur,setCompteur] = useState(0)
  const[nbItems,setNbItems] = useState(0)
  return (
    <div className='App'>
      <Header setCartVisible={setCartVisible} nbItems={nbItems}/>
      {cartVisible && <Cart setCartVisible={setCartVisible} nbItems={nbItems} setNbItems={setNbItems}/>}
      <main>
        <AfficheImages/>
        <AfficheText compteur={compteur} setCompteur={setCompteur} setNbItems={setNbItems}/>
      </main>
    </div>
  )
}

export default App