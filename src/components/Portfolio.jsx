import { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import '../assets/style/work_style.css';
import skill_image from '../assets/image/skill_img.jpg';
import PropTypes from 'prop-types';

const skills = [
    { name: 'HTML', percentage: 90 },
    { name: 'CSS', percentage: 85 },
    { name: 'Figma', percentage: 78 },
    { name: 'JavaScript', percentage: 70 },
    { name: 'Laravel & PHP', percentage: 80 },
    { name: 'React js', percentage: 75 },
    { name: 'VUE js', percentage: 80 },
];
function SkillRating({ skills }) {
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        setIsAnimated(true);
    }, []);

    return (
        <div className='skills'>
            {skills.map((skill, index) => (
                <div className='skill' key={index}>
                    <span>{skill.name}</span>
                    <div className='rating'>
                        <div
                            className='filled'
                            style={{
                                width: isAnimated ? `${skill.percentage}%` : '0%',
                                transition: 'width 2s ease-in-out',
                            }}
                        ></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const Portfolio = () => {
    return (
        <Element name="portfolio">
            <div className='control_work'>
                <div className='title_skill'>
                    <h1>My Skills</h1>
                    <SkillRating skills={skills} />
                </div>
                <div className='image_skill'>
                    <img src={skill_image} alt='Skill Image' />
                </div>
            </div>
        </Element>
    );
};
SkillRating.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired
};

export default Portfolio;
