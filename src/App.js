
import './App.css';
import Navbar from './Components/Navbar';

import Experience from './Pages/Experience';
import Footer from './Components/Footer';
import Projects from './Pages/Projects';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Home from './Pages/Home';
 import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Bots from './Components/Bots';
function App() {
  return (
    <div className=" bg-darkblue ">
     {/* min-h-screen overflow-hidden */}
<BrowserRouter>
 <Navbar/> 
<Bots/>

<Routes> 
 <Route path='/' element={<Home/>} /> 
 
<Route path='/about' element={<About/>} />
<Route path="/experience" element={<Experience/>} />

 <Route path="/skills" element={<Skills />} /> 
 <Route path="/projects" element={<Projects />} /> 
</Routes>

</BrowserRouter>
<Footer/>
</div>
  );
}

export default App;
