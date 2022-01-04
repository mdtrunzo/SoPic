import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {useState} from 'react'
import './App.css';
import Header from './components/Header';
import Zoom from './components/Zoom';
import Footer from './components/Footer';
import Page from './components/Page';
import Home from './components/Home';

function App() {
  const [templateId, setTemplateID] = useState(1)

  return (
    <div className="App" >
       <Router>
         <Routes>
           <Route path='/' element={ <Home />} />
           <Route path='/app' element={
             <>
              <Header />
               <Zoom />
                <div className="page-template">
                   <Footer />
                   <Page id={templateId}/>
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
