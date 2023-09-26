import {motion} from 'framer-motion';
import {fadeIn, textVariant} from "../utils/motion.js";
import {styles} from "../styles.js";
import SectionWrapper from "../hoc/SectionWrapper.jsx";

const AboutMe = () => {
    return (
        <div className="mt-[10rem]">
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Briefly something about me</h2>
            </motion.div>
            <motion.div
                variants={fadeIn('', '', 0.1, 1)}
                className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
               Full Stack Developer. Team Leader . Web Development . Mobile Development . Tech Architecture
                ...................
                ................
                .................
                .................
                .................
            </motion.div>
        </div>
    );
};

export default SectionWrapper(AboutMe, 'about');