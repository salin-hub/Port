import { Element } from 'react-scroll';
import image_me from '../assets/image/image_me1.png';
import '../assets/style/homestyle.css';

const Home = () => {
  return (
    <Element name="home">
      <div className='control_homepage'>
        <div className='text_show'>
          <div className='text_control'>
            <h1>Hi,</h1>
            <span>
              <h2>I am </h2>
              <h2>Salin</h2>
            </span>
            <h3>FontEnd developer</h3>
            <h3>Web Developer</h3>
            <h3>Designer</h3>

          </div>

        </div>

        <div className='profile_show'>
          <div className='control_image'>
            <img src={image_me} alt='' />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Home;
