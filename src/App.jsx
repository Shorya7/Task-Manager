import { Toaster } from 'react-hot-toast';
import './App.css'
import ItemListManager from './components/ItemListManager'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <Toaster position="bottom-center"/>
    <Navbar/>
      <ItemListManager />
    </>
  )
}

export default App
