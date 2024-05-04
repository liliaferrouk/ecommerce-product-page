import React from 'react'
import Header from './Header'
import AfficheImages from './AfficheImages'
import AfficheText from './AfficheText'

function App() {
  return (
    <div className='App'>
      <Header/>
      <main>
        <AfficheImages/>
        <AfficheText/>
      </main>
    </div>
  )
}

export default App