

const Qna = () => {
    return (
        <div className="pe-0 md:pe-10">
            <h1 className="font-bold text-2xl lg:text-3xl my-10">Frequently Asked Questions</h1>
            <div className="collapse collapse-arrow mb-2 md:mb-4">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">Are your products original export items?</div>
                <div className="collapse-content text-sm">Yes, we sell 100% authentic export products. These are original garments made for international brands and come with premium quality.</div>
            </div>
            <div className="collapse collapse-arrow mb-2 md:mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Do you have physical outlets?</div>
                <div className="collapse-content text-sm">Yes, we do! You can shop in person at our offline outlet, try products before buying, and enjoy personalized service. Our outlet location: Hazi Amir Hosen Plaza (Ground Floor) Kolakandi Road, Abdullahpur Bazaar, South Keraniganj, Dhaka-1310</div>
            </div>
            <div className="collapse collapse-arrow mb-2 md:mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How long does Home delivery take?</div>
                <div className="collapse-content text-sm">Typically, 2–5 business days. Delivery time may vary slightly depending on your location.</div>
            </div>
            <div className="collapse collapse-arrow mb-2 md:mb-4">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">Can I return or exchange a product?</div>
                <div className="collapse-content text-sm">Yes, if there’s a size issue or product defect, we offer easy exchanges or returns within 3 days of receiving your order. The item must be unused and with original tags. And, The most important point is you must have the invoice which we will provide.</div>
            </div>
        </div>
    );
};

export default Qna;