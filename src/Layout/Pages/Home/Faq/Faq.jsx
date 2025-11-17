import Qna from "./Qna";
import Stats from "./Stats";


const Faq = () => {
    return (
        <div className="bg-white text-black md:flex items-center p-5 md:p-10">
            <div className="w-full md:w-3/4">
                <Qna></Qna>
            </div>
            <div className="w-full md:w-1/4">
                <Stats></Stats>
            </div>
        </div>
    );
};

export default Faq;