import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';

import './Experience.scss';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const queryExp = '*[_type == "experiences"]';

    client.fetch(queryExp).then(data => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'>Experience</h2>

      <div className='app__experience-container'>
        <motion.div className='app__skills-exp'>
          {experiences?.map(experience => (
            <motion.div className='app__skills-exp-item' key={experience.year}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map(work => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.desc}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    <Tooltip
                      id={work.name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    />
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experience, 'app__experience'),
  'experience',
  'app__primarybg'
);
