import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Messages from './pages/Messages';
import About from './pages/About';
import Error from './pages/Error';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <nav>our navbar</nav>     {/* adds nav bar to ALL pages     */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <footer>our footer</footer>     {/* adds footer to ALL pages     */}

    </BrowserRouter>
  );
}

export default App;
