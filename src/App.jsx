import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ParentComponent from './component/parentComponent'
import Counter from './component/Counter'
import FIlm from './component/FIlm'
import Form from './component/Form'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<ParentComponent/>}/>
          <Route path='/counter' element={ <Counter/>}/>
          <Route path='/form' element={ <Form/>}/>
          <Route path='/film' element={ <FIlm/>}/>
        </Routes>
    </BrowserRouter>
    </>
  )
}    

export default App
