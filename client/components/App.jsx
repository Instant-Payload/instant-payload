// import DisplayCard from './displayCard.jsx';

// const App = () => {
//   return (
//     <div>
//       <DisplayCard />
//     </div>

//   );
// };

// export default App;

import { Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import Navbar from "./Navbar";
import Vegetables from './pages/Vegetables'
import Login from "./pages/Login";
import Cart from './pages/Cart'
import Protein from "./pages/Protein";
import Snacks from "./pages/Snacks";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>

          <Route path= '/' element={<Home />} />
          <Route path= '/protein' element={<Protein />} />
          <Route path= '/vegetables' element={<Vegetables />} />
          <Route path= '/snacks' element={<Snacks />} />
          <Route path= '/login' element={<Login />} />
          <Route path= '/cart' element={<Cart />} />
          
        </Routes>
      </div>
    </>
  )
  
}


