import './App.scss';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";
import Category from "./pages/Category/Category";
import Meal from "./pages/Meal/Meal";
function App() {
  return (
      <BrowserRouter basename='/react-food'>
          <>
              <Header />
              <main className="container content">
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contacts" element={<Contacts />} />
                      <Route path="/category/:name" element={<Category />}/>
                      <Route path='/meal/:id' element={<Meal/>}/>
                      <Route path="*" element={<NotFound/>}/>
                  </Routes>
              </main>
              <Footer />
          </>
      </BrowserRouter>
  );
}

export default App;
