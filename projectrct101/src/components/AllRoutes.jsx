import { Route,Routes } from 'react-router-dom';
import Main from './Main';
import ProductPage from './ProductPage'
import Navbar from './Navbar';
function AllRoutes(){
    return (
     <Routes>
        
        <Route path="/product" element={<ProductPage/>} />
     </Routes>
    )
}
export default AllRoutes