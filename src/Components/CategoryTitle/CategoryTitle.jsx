import { Typewriter } from 'react-simple-typewriter'

const CategoryTitle = ({ titleText }) => {

    return (
        <div className='text-2xl md:text-3xl text-center font-semibold md:font-bold mt-3 md:mt-5 mb-3 md:mb-8 mx-2'>
            <Typewriter
                words={[`${titleText}`]}
                loop={5}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={70}
                delaySpeed={3000}
            />
        </div>
    );
};

export default CategoryTitle;