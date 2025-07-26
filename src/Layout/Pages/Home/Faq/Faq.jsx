import Qna from "./Qna";
import Stats from "./Stats";


const Faq = () => {
    return (
        <div className="md:flex items-center m-5 md:m-10">
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