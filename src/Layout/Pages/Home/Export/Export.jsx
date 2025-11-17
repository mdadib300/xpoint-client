// import exportImg from '../../../../assets/images/export/export2.jpg';
import Video from '../Video/Video';

const Export = () => {
    return (
        <div className="hero py-10 md:py-20 bg-white text-black">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img
                    src={exportImg}
                    className="w-full md:w-1/2 rounded-lg shadow-2xl"
                /> */}

                <div className="w-full lg:w-1/2">
                    <Video></Video>
                </div>
                <div className="w-full lg:w-1/2">
                    <h1 className="text-3xl font-bold">Step Into XPoint — See What’s Waiting Inside</h1>
                    <h1 className="text-2xl font-semibold mt-3">Exported Worldwide, Now at Your Door!</h1>
                    <p className="py-6">
                        Bangladesh is one of the leading hubs of global garment exports, known for producing high-quality clothing for top international brands. From premium denim and formal wear to casual essentials, these garments are made in state-of-the-art factories using finest fabrics, advanced technology, and the hands of skilled workers. After passing strict quality checks, they are shipped out to countries like the USA, UK, Germany, and Canada, where they are worn with pride and trust. <br /><br />
                        XPoint brings you a curated collection of authentic export menswear, directly from the source—now available both online and offline.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Export;