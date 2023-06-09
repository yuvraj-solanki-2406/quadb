import './App.css';
import { Routes, Route } from 'react-router-dom';
import ViewDetails from './components/ViewDetails';
import Home from './components/Home';

function App() {

  return (
    <>
    {/* Routes setup */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='details/:id' element={<ViewDetails  />} />
      </Routes>
    </>
  );
}

export default App;
