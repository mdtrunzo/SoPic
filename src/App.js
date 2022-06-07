import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Page from './components/Page'
import LoginModal from './components/LoginModal'
import Panel from './components/Panel'
import { StateProvider } from './context/StateProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

function App() {
  const [modal, setModal] = useState(false)

  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  const WooCommerce = new WooCommerceRestApi({
    url: "https://testing.ribaslegales.com.ar",
    consumerKey: "ck_25f24e8f6d4bf26fa8d19fcd4600c6d3cdf62603",
    consumerSecret: "cs_5cf22b8f67b8acc84683baf59d236ade9b467e09",
    version: "wc/v3"
  })

  useEffect(() => {
    WooCommerce.get("products/401")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  }, []);

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
