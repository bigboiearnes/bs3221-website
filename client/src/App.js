import './App.css';

import { lazy, Suspense} from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';

const Home = lazy(() => import('./pages/Home'));
const Walker = lazy(() => import('./pages/Walker'));
const Owner = lazy(() => import('./pages/Owner'));
const NoMatch = lazy(() => import('./pages/NoMatch'));

function App() {
    return (
        <>
            <NavBar />
            <Suspense fallback={<div className='container'>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/owner" element={<Owner />}/>
                    <Route path="/walker" element={<Walker />}/>
                    <Route path='*' element={<NoMatch />}/>
                </Routes>
            </Suspense>
        </>
    );
}

export default App;