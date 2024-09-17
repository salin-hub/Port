
import { Element } from 'react-scroll';
import '../assets/style/about_style.css'
import imageAB from '../assets/image/image_me1.jpg'
const About = () => {
  return (
    <Element name="about">
        <div className='c_media'>
          <div className='profile1_img'>
            <img src={imageAB} alt='' />
          </div>
          <div className='title_about'>
            <h1>About Me</h1>
            <p> Hello! My name is Salin, and I’m currently a senior year student majoring in Information Technology and Engineering (ITE) at the Royal University of Phnom Penh (RUPP).
              My journey in the field of IT has been driven by a passion for technology and a desire to understand and solve complex problems. </p>
          </div>
        </div>
    </Element>
  );
};

export default About;
