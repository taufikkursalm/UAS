/**
 * Mengimport styled footer pada componen footer
 * Setelah melakukan refactor CSS Modules ke Styled Component
 */

 import { FooterStyled } from "./Footer.styled";


 function Footer() {
     /**
     * Menggunakan style css yang sudah direfactor ke styled component
     * Dan memanggilnya menggunakan expression model.
     */
   return (
     // Menggunakan footer styled component
     <FooterStyled>
       <div className="footer">
         <div>
           <h1>Covid ID</h1>
           <h4>Developed by @abdullah izuddin </h4>  
         </div>
         <ul>
           <li>Global</li>
           <li>Indonesia</li>  
           <li>Provinsi</li>  
           <li>About</li>               
         </ul>
       </div>
     </FooterStyled>
   );
 }
  
 export default Footer;