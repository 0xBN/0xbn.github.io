import { useEffect } from 'react';
import { Section } from 'components';
import { About, Projects, Skills, Contact, Hero } from 'pages';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  animateSectionOptionsIn as animateIn,
  animateSectionOptionsOut as animateOut,
} from 'utils';

export const Main = ({
  darkMode,
  pageLoaded,
  isWindowSmall,
  setCurrentSection,
}) => {
  let inViewOptions = {
    threshold: 0,
    rootMargin: `${isWindowSmall ? '-100px' : '-200px'} 0px -50px 0px`,
  };

  const { ref: aboutRef, inView: aboutInView } = useInView(inViewOptions);
  const { ref: projectsRef, inView: projectsInView } = useInView(inViewOptions);
  const { ref: skillsRef, inView: skillsInView } = useInView(inViewOptions);
  const { ref: contactRef, inView: contactInView } = useInView(inViewOptions);

  const aboutAnimation = useAnimation();
  const projectAnimation = useAnimation();
  const skillsAnimation = useAnimation();
  const contactAnimation = useAnimation();

  useEffect(() => {
    if (aboutInView) {
      setCurrentSection('about');
      aboutAnimation.start(animateIn);
    }
    if (!aboutInView) aboutAnimation.start(animateOut);
  }, [aboutInView, aboutAnimation, setCurrentSection]);

  useEffect(() => {
    if (projectsInView) {
      setCurrentSection('projects');
      projectAnimation.start(animateIn);
    }
    if (!projectsInView) projectAnimation.start(animateOut);
  }, [projectsInView, projectAnimation, setCurrentSection]);

  useEffect(() => {
    if (skillsInView) {
      setCurrentSection('skills');
      skillsAnimation.start(animateIn);
    }
    if (!skillsInView) skillsAnimation.start(animateOut);
  }, [skillsInView, skillsAnimation, setCurrentSection]);

  useEffect(() => {
    if (contactInView) {
      setCurrentSection('contact');
      contactAnimation.start(animateIn);
    }
    if (!contactInView) contactAnimation.start(animateOut);
  }, [contactInView, contactAnimation, setCurrentSection]);

  return (
    <main className='min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white'>
      <Section
        pageLoaded={pageLoaded}
        id='hero'
        content={<Hero darkMode={darkMode} isWindowSmall={isWindowSmall} />}
      />

      <div ref={aboutRef}>
        <motion.div initial={{ opacity: 0 }} animate={aboutAnimation}>
          <Section
            id='about'
            title='About Me'
            content={<About darkMode={darkMode} />}
          />
        </motion.div>
      </div>

      <div ref={projectsRef}>
        <motion.div
          className={``}
          initial={{ opacity: 0 }}
          animate={projectAnimation}
        >
          <Section
            className={``}
            id='projects'
            title='Projects'
            content={<Projects />}
          />
        </motion.div>
      </div>

      <div ref={skillsRef}>
        <motion.div initial={{ opacity: 0 }} animate={skillsAnimation}>
          <Section id='skills' title='Skills' content={<Skills />} />
        </motion.div>
      </div>

      <div ref={contactRef}>
        <motion.div initial={{ opacity: 0 }} animate={contactAnimation}>
          <Section
            id='contact'
            title='Contact Me'
            content={<Contact />}
            lastPage={true}
          />
        </motion.div>
      </div>
    </main>
  );
};
