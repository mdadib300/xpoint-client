import TextType from './TextType';

const Title = ({ heading, subheading }) => {
    return (
        <div className='py-3 mb-7 border-b-1 md:border-b-2 w-3/4 md:w-1/3 mx-auto'>
            <h1 className='text-center text-xl md:text-3xl font-semibold'>{heading}</h1>
            <h3 className='text-center text-md md:text-xl mt-3'>
                <TextType
                    text={subheading}
                    typingSpeed={75}
                    pauseDuration={1000}
                    showCursor
                    cursorCharacter=""
                    deletingSpeed={40}
                    variableSpeedEnabled={false}
                    variableSpeedMin={60}
                    variableSpeedMax={120}
                    cursorBlinkDuration={0.5}
                />
            </h3>
        </div>
    );
};

export default Title;