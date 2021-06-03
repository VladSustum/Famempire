import react from 'react'
import '../../App.css';
import './Home.css';
import HeroSection from '../HeroSection';
import Portfolio from '../Portfolio';
import Onama from '../Onama'
import { homeObjOne } from '../Onama/OnamaData';
import Usluge from '../Usluge';
import Footer from '../Footer';
import Kontakt from '../Kontakt/Kontakt';

function Home(){
    return (
        
        // {/* <HeroSection></HeroSection>
        // <Onama {...homeObjOne} />
        // <Usluge/>
        // <Portfolio></Portfolio>
        // <Kontakt/>
        // <Footer></Footer> */}
        // <>

        <div className="hero-container">
        <h1>Radovi u toku</h1>

        <h2>Vraćamo se uskoro!!</h2>
        </div>

       

    )
}

export default Home;