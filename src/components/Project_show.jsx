import { Element } from 'react-scroll';
import image11 from '../assets/image/3d_slide.png'
import image_computer from '../assets/image/image_computer.png'
import '../assets/style/project.css';
import imageGit from '../assets/image/image_git.png'
const projects = [
    {
        name: 'Computer store Managerment',
        image: image_computer,
        link: 'https://computers-store.vercel.app/'

    },
    {
        name: '3d_slider',
        image: image11,
        link: 'https://salin-hub.github.io/3d_slider/'

    },
    {
        name:'My Source Code ',
        image:imageGit,
        link:'https://github.com/salin-hub'
    }
    
    
]
const ShowProject = () => {
    return (
        <Element name='project'>
            <div className='control_project'>
                <h1>My Projects</h1>
                <div className='project_me'>
                    {projects.map((project, index) => (
                        <div className='template_p' key={index}>
                            <div className='thumbnail_p'>
                                <img src={project.image} alt='' />
                            </div>
                            <h2>{project.name}</h2>
                            <a href={project.link}>
                                <span>Click me</span>
                            </a>
                        </div>

                    ))}
                </div>
            </div>
        </Element>
    )
}
export default ShowProject;