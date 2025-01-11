import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import ListFile from './components/ListFile.jsx'
import Header from './components/Header.jsx'
import InputForm from './components/InputForm.jsx'
import POSTLISTPROVIDER from './store/store_file.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <POSTLISTPROVIDER>

   
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/'element={<App/>}/>
      <Route path='/list' element={<ListFile/>}/>
      <Route path='/input' element={<InputForm/>}/>
    </Routes>

    </BrowserRouter>
    </POSTLISTPROVIDER>

  </StrictMode>,
)
