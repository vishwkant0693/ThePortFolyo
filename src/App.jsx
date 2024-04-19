import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import CustomCursor from './components/CustomCursor';
function App() {
    return (
        <>
            <Router>
                <Header />
                <Home />
            </Router>
            <CustomCursor />
        </>
    );
}

export default App;
