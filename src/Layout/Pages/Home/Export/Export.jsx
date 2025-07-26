import exportImg from '../../../../assets/images/export/export2.jpg';

const Export = () => {
    return (
        <div className="hero my-10 md:my-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={exportImg}
                    className="w-full md:w-1/2 rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-4xl font-bold">Exported Worldwide, Now at Your Door!</h1>
                    <h1 className="text-2xl font-semibold mt-3">Made in Bangladesh — Handpicked by XPoint</h1>
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