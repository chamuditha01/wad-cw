
import Navbar from "../../components/molecules/Navbar";
import DogProductStore from "../../components/molecules/DogProductStore copy";
import Footer from '../../components/molecules/Footer';
import Banner2 from "../../components/molecules/Banner2";

const DogProduct=()=>{
    return(
        <div>
            <Navbar/>
            <Banner2/>
            <DogProductStore/>
            <Footer/>
            
        </div>
    )
}
export default DogProduct;