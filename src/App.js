import './App.css';
import './style.scss';
import Header from './Component/Header';
import {HashRouter,Route,Routes} from 'react-router-dom'
import Home from './Pages/Home';
import PageNotFound from './PageNotFound';
import About from './Pages/About';
import PaintingExhibition from './Pages/PaintingExhibition';
import Contact from './Pages/Contact';
import Footer from './Component/Footer';
import Painting from './Pages/Painting';
import Artist from './Pages/Artist';
import PageHeading from './HOC_Component/PageHeading';
import DescriptionIcon from '@mui/icons-material/Description';
import BrushIcon from '@mui/icons-material/Brush';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StoreIcon from '@mui/icons-material/Store';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import UserLoginLogout from './Pages/UserLoginSignup';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCart from './Pages/ShoppingCart';
import Wishlist from './Pages/Wishlist';
function App() {
  return (
    <HashRouter>
    <div className="App">
      <Header />
<Routes>
<Route index element={<Home />}/>
<Route path='/painting/:param' element={<Painting pHead={<PageHeading value="Store" icon={<StoreIcon />}/> }/>}/>
<Route path='/paintingexhibition' element={<PaintingExhibition pHead={<PageHeading value="Exhibition" icon={<AddBusinessIcon />}/>}/>}/>
<Route path='/about' element={<About pHead={<PageHeading value="About Us" icon={<DescriptionIcon />}/> } />}/>
<Route path='/artist' element={<Artist pHead={<PageHeading value="Artist" icon={<BrushIcon />}/>}/>} />
<Route path='/contact' element={<Contact pHead={<PageHeading value="Contact US" icon={<LocalPhoneIcon />}/>}/>}/>
<Route path='/userloginlogout' element={<UserLoginLogout loginStatus={false} pHead={<PageHeading value='LogIn / SignUp' icon={<PersonIcon />}/>}/>}/>
<Route path='/shoppingcart' element={<ShoppingCart pHead={<PageHeading value='Shopping Cart' icon={<PersonIcon />}/>}/>}/>
<Route path='/wishlist' element={<Wishlist pHead={<PageHeading value='Wishlist' icon={<PersonIcon />}/>}/>}/>
<Route element={<PageNotFound />} />
</Routes>
<Footer />
    </div>
    </HashRouter>
  );
}


export default App;
