import paymentMethods from '../../../../assets/images/stats/atm-card.png';
import satisfaction from '../../../../assets/images/stats/customer-satisfaction.png';
import delivery from '../../../../assets/images/stats/express-delivery (1).png';


const Stats = () => {
    return (
        <div className="stats stats-vertical shadow py-5 md:py-0">
            <div className="stat">
                <div className='flex flex-col items-center'>
                    <div className="font-bold text-xl">Easy Payments</div>
                <img src={paymentMethods} className='w-20 my-3' />
                <div className="">We accept Bkash, Nagad, Rocket, Cards and many more payment methods for offline purchase.</div>
                </div>
            </div>
            <div className="stat">
                <div className='flex flex-col items-center'>
                    <div className="font-bold text-xl">Satisfaction Guaranteed</div>
                <img src={satisfaction} className='w-20 my-3' />
                <div className="">We always focus on customer satisfaction which has brought us here!</div>
                </div>
            </div>
            <div className="stat">
                <div className='flex flex-col items-center'>
                    <div className="font-bold text-xl">Delivery anywhere inside 🇧🇩</div>
                <img src={delivery} className='w-20 my-3' />
                <div className="">We deliver our customer's products in a standard duration all over the country.</div>
                </div>
            </div>

            
        </div>
    );
};

export default Stats;