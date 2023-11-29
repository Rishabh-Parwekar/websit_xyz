import React from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './component/header';
import Home from './component/home';
import About from './component/about';
import Services from './component/services';
import Contact from './component/contact';
import Pagenotfound from './component/pagenotfound';
import Footer from './component/footer';
import './App.css'



function App(){
  return<>
  <Router>
  <Header/>
  <div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<Pagenotfound/>} />
    </Routes>
  </div>
  <Footer/>
  </Router>
  </>
}
export default App;