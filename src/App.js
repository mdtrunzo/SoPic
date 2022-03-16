import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Zoom from './components/Zoom';
import Page from './components/Page';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';

function App() {
  const [templateId] = useState(1)
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <div className="App" >
       <Router>
         <Routes>
           <Route path='/' element={
             <>
              <Header login={openModal}/>
               <Zoom />
                <div className="page-template">
                   <Page id={templateId}/>
                   <Footer />
                   {modal && <LoginModal closeModal={closeModal}/>}
                </div>
             </>
           } 
           />
        </Routes>
        </Router>
    </div>
  );
}

export default App;
