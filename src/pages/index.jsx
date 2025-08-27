import Layout from "./Layout.jsx";

import Home from "./Home";

import Quote from "./Quote";

import Drivers from "./Drivers";

import Contact from "./Contact";
import PlasmicHost from "./plasmic-host";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Quote: Quote,
    
    Drivers: Drivers,
    
    Contact: Contact,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    const isPlasmic = location.pathname === '/plasmic-host';
    
    if (isPlasmic) {
        return (
            <Routes>
                <Route path="/plasmic-host" element={<PlasmicHost />} />
            </Routes>
        );
    }

    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Quote" element={<Quote />} />
                <Route path="/Drivers" element={<Drivers />} />
                <Route path="/Contact" element={<Contact />} />
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}