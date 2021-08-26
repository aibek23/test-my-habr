import React from "react";
import styles from './Contacts.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faPhoneAlt, } from '@fortawesome/free-solid-svg-icons'
// import Maps from '../../components/Maps'
 
class Contacts extends React.Component{
    render(){
        return(
        <>
        <div className={styles.container}>
            {/* <Maps/> */}
            <div className={styles.wrpper}>
                <div className={styles.card}>
                    <div className={styles.content}>
                        <div className={styles.content_wrpper}>
                            <h2><span style={{color:'gold'}}>Ж</span>дем звонка!</h2>
                            <a href="tel:+996555000505"><span className={styles.link_ico}><FontAwesomeIcon icon={faPhoneAlt}/></span> (0)555000505</a>
                            <a href="tel:+996555000505"><span className={styles.link_ico}><FontAwesomeIcon icon={faPhoneAlt}/></span> (0)555000505</a>
                            <a href="tel:+996555000505"><span className={styles.link_ico}><FontAwesomeIcon icon={faPhoneAlt}/></span> (0)555000505</a>
                            <a href="tel:+996555000505"><span className={styles.link_ico}><FontAwesomeIcon icon={faPhoneAlt}/></span> (0)555000505</a>
                            <p><span className={styles.link_ico}><FontAwesomeIcon icon={faEnvelope} size="lg" /></span><a href="mailto:begalievabacyt@gmail">begalievabacyt@gmail </a></p>
                            <button>оставить жалобы и предложение</button>


                            <div className={styles.Working}>
                                <div className={styles.Working_clock}><img src="" alt="" /><span><FontAwesomeIcon icon={faClock} size="2x"/></span></div>
                                <p>Режим работы <br/> 8:00 - 01:00 (ночи)</p>
                            </div>
                            
                        </div>
                    </div>
                    <img src="https://openwhyd.org/uCoverImg/74da35a9bdca7a1657ca923f0bce1042_960x.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className={styles.container}>
          
           {/* <iframe className={styles.inntro} src="http://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11696.575939970957!2d74.600321!3d42.869805!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7da0c54cc33%3A0x615a248d4612016d!2zMTIzINGD0LsuINCc0L7RgdC60L7QstGB0LrQsNGPLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1629377096544!5m2!1sru!2skg" allowfullscreen="" loading="lazy"/>           */}
        </div>
    </>
        )
    }
}
export default Contacts;