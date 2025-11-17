const CustomButton = ({ text }) => {
    return (
        <button
            className="
                px-4 py-2 
                bg-white 
                text-black 
                rounded 
                border 
                border-gray-300
                shadow-sm
                transition-colors 
                duration-200
                hover:bg-black
                hover:text-white
                font-semibold
            "
        >
            {text}
        </button>
    );
};

export default CustomButton;

