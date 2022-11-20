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
import Veggie from './pages/Veggie'
import Login from "./pages/Login";
import Cart from './pages/Cart'

export default function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path= '/' element={<Home />} />
          <Route path= '/veggie' element={<Veggie />} />
          <Route path= '/login' element={<Login />} />
          <Route path= '/cart' element={<Cart />} />
        </Routes>
      </div>
    </>
  )
  
}


