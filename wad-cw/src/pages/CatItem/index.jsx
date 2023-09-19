import Banner1 from "../../components/molecules/Banner1"
import Navbar from "../../components/molecules/Navbar";
import PetProductStore from "../../components/molecules/PetProductStore";
import Footer from '../../components/molecules/Footer';

const CatProduct=()=>{
    return(
        <div>
            <Navbar/>
            <Banner1/>
            <PetProductStore/>
            <Footer/>
            
        </div>
    )
}
export default CatProduct;