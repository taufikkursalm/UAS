/**
 * Mengimport styled navbar pada componen navbar
 * Setelah melakukan refactor CSS Modules ke Styled Component
 */
 import { NavbarStyled, StyledLink } from "./Navbar.styled";

 function Navbar() {
     /**
     * Menggunakan style css yang sudah direfactor ke styled component
     * Dan memanggilnya menggunakan expression model.
     */
   return (
     // Menggunakan navbar styled component
         <NavbarStyled>
           <div className="navbar">
           <h1>Covid ID</h1>
             <ul>
                   <li><StyledLink to="/">Global</StyledLink></li>
                   <li><StyledLink to="/indonesia">Indonesia</StyledLink></li>
                   <li><StyledLink to="/provinsi">Provinsi</StyledLink></li>
                   <li><StyledLink to="/about">About Us</StyledLink></li>
               </ul>
           </div>
             
         </NavbarStyled> 
   );
 }
 
 export default Navbar;