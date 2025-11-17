import BottomNav from "./BottomNav/BottomNav";
import Export from "./Export/Export";
import Faq from "./Faq/Faq";
import NewArrival from "./NewArrival/NewArrival";
import Slider from "./Slider/Slider";
import Video from "./Video/Video";


const Home = () => {

    return (
        <div>
            <BottomNav></BottomNav>
            <Slider></Slider>
            <NewArrival></NewArrival>
            <Faq></Faq>
            {/* <Video></Video> */}
            <Export></Export>
        </div>
    );
};

export default Home;