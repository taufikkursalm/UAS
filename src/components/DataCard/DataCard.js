/**
 * Import CSS Module DataCard.
 * Untuk kemudian disimpan di dalam object styles DataCard.module.css
 */
import styles from "./DataCard.module.css";

function DataCard (props) {
    
    const { data } = props;
   /**
    * Menggunakan styles css yang sudah diimport.
    * Dan memanggilnya menggunakan expression model.
    */
    return (
        <div className={styles.container}>
            <h2>{data.status}</h2>
            <h2>{data.jumlah.value.toLocaleString()}</h2>
        </div>  
    );
}

export default DataCard;