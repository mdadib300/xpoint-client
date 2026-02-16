import Brands from "./Brands/Brands";
import Categories from "./Categories/Categories";
import Export from "./Export/Export";
import NewArrival from "./NewArrival/NewArrival";
import Slider from "./Slider/Slider";


const Home = () => {

    return (
        <div>
            <Slider></Slider>
            <NewArrival></NewArrival>
            <Brands></Brands>
            <Categories></Categories>
            <Export></Export>
        </div>
    );
};

export default Home;