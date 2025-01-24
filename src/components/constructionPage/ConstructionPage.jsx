import Footer from '../footer/Footer'
import Navbar from "../header/navbar/navbar";
import './ConstructionPage.css'
const ConstructionPage = () => {
    return (
        <>
        <Navbar />
        <div className="container">
            <div className="icon">:construcción:</div>
            <h1>Lo lamentamos, esta página se encuentra en construcción.</h1>
            <p>Por favor, inténtalo más tarde.</p>
            <a href="/">Regresa a la página de inicio</a>
        </div>
        <Footer />
        </>
    );
}
export default ConstructionPage;