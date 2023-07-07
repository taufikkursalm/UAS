/**
 * Import CSS Module Navbar.
 * Untuk kemudian disimpan di dalam object styles navbar.module.css
 */
 import Assets from "../Assets/img/logo.png";
 import StyledHero from "./Hero.styled";

 function Hero() {
    /**
   * Menggunakan styles css yang sudah diimport.
   * Dan memanggilnya menggunakan expression model.
   */
   return (
     <StyledHero>
     <section className="hero">
       <div className="left">
         <h2 className="title">Covid ID</h2>
         <h4 className="notes">
           Monitoring Perkembangan Covid-19</h4>
         <h4 className="descrip">
           Aplikasi untuk memonitoring perkembangan covid<br></br> menggunakan library react-js<br></br>
           Diharapkan membantu masyarakat monitoring Covid<br></br> Dan semoga bermanfaat!!</h4>
         <button >Vaccine</button>
       </div>
       <div className="right">
         <img  src={Assets} alt="MedicalCare"/>
       </div>
     </section>
     </StyledHero>
   );
 }
   
export default Hero;