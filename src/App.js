import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

const App = () => {
    return (
        <Routes>
            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/about' element={ <About /> } />
            <Route exact path='/services' element={ <Services /> } />
            <Route exact path='/portfolio' element={ <Portfolio /> } />
            <Route exact path='/blog' element={ <Blog /> } />
            <Route exact path='/contact' element={ <Contact /> } />
        </Routes>
    );
};

export default App;