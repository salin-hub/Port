
import { Element } from 'react-scroll';
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMdMail } from 'react-icons/io';
import { FaMapLocationDot } from "react-icons/fa6";
import contactme from '../assets/image/contact_me.jpg'
import '../assets/style/contact.css';
function contact() {
    return (
        <Element name='contact'>
            <div className='about_page'>
                <div className='thumbnail_contact'>
                    <img src={contactme} alt='contact me'/>
                </div>
                <div className='contact_all'>
                    <h1>Contatc Me</h1>
                    <div className='contact_me'>
                    <span><FaPhoneVolume/> : <h1>+885 93470854</h1></span>
                    <span><IoMdMail /> : <h1>vongsalin0854@gmail.com</h1></span>
                    <span> <FaMapLocationDot/> : <h1>Tuek Thla,Sen Sok, Phnom Penh.</h1> </span>
                    </div>
                </div>
            </div>
        </Element>
    )
}
export default contact;