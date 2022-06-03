import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Page from './components/Page'
import LoginModal from './components/LoginModal'
import Panel from './components/Panel'
import { StateProvider } from './context/StateProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <StateProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header login={openModal} />

                  <div className="page-template">
                    <Page />
                    {/* <Panel /> */}
                    {modal && <LoginModal closeModal={closeModal} />}

                    <Panel />
                    <ToastContainer />
                  </div>
                </>
              }
            />
          </Routes>
        </Router>
      </div>
    </StateProvider>
  )
}

export default App
