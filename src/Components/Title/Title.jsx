

const Title = ({heading, subheading}) => {
    return (
        <div className='py-10'>
            <h1 className='text-center text-3xl font-semibold'>{heading}</h1>
            <h3 className='text-center text-xl mt-3'>{subheading}</h3>
        </div>
    );
};

export default Title;