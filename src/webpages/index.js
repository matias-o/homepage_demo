
/* dependencies */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* components */
import Layout from '../components/layout';
/* webpages */
import Home from './home';
import CBB from './cbb';
import Blog from './blog';
import Stuff from './stuff';

const Webpages = () =>{
    return(
        <Router>
            <Layout>
                <Routes>
                    <Route exact path ="/" element = {<Home />} />
                    <Route path = "/cbb" element = {<CBB />} />
                    <Route path = "/blog" element = {<Blog />} />
                    <Route path = "/stuff" element ={<Stuff />} />
                </Routes>
            </Layout>
        </Router>
    );
};

export default Webpages;