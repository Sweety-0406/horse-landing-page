import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import MainPage from './components/MainPage';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import ConfirmationDetail from './components/ConfirmationDetail';
import './index.css'; // Ensure this is the file where you added the Tailwind directives

const App = () => (
  <Provider store={store}>
    <Router>
     <div>
      <Toaster />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/booking" element={<Form />} />
        <Route path="/confirmation" element={<ConfirmationDetail />} />
      </Routes>
      <hr />
      <Footer />
     </div>
    </Router>
  </Provider>
);

export default App;
