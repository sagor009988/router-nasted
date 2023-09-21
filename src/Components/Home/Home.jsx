
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
    const navigation=useNavigation()
    return (
        <div>
            
            <h2>This Is Home Section</h2>
            <Header></Header>
           {
               navigation.state === "loading"? <p>loading///</p>:
               <Outlet></Outlet>
           }
           
            <Footer></Footer>
        </div>
    );
};

export default Home;