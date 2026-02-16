import ScrollToTop from "../../../Components/ScrollToTop";
import Title from "../../../Components/Title/Title";
import Marquee from "react-fast-marquee";


const Return = () => {
    return (
        <div className="px-3 md:px-7 bg-white text-black">
            <ScrollToTop></ScrollToTop>
            {/* Announcements */}
            <div className="bg-neutral-800 text-white my-2 rounded-md">
                <p className="text-center py-3">
                    <Marquee
                        pauseOnHover={true}
                    >
                        <p><b>📢 Announcement:</b> Sometimes our return and exchange service is unavailable due to rapid-sales and stock-shortages. <i>(Especially during Eid)</i></p>
                    </Marquee>
                </p>
            </div>
            <Title heading={'Return & Exchange'} subheading={'Our Return & Exchange Policies'}></Title>
            <p className="pb-5">At XPoint, we value our customers and aim to provide the best shopping experience. However, we understand that sometimes a purchase may not turn out as expected. That’s why we offer a straightforward and customer-friendly return and exchange policy to ensure your satisfaction. <br /> <br />

                Products purchased from XPoint can be returned or exchanged within <b>3 days</b> of purchase. To be eligible, the item must be in <b>unused and original condition</b>, with the <b>product tag intact and undamaged</b>. We take product tags seriously, as they serve as proof of authenticity and product integrity. Any item returned without its tag or with a damaged tag will unfortunately not be accepted for return or exchange. <br /> <br />

                At the time of purchase, we provide an <b>official invoice</b>, which is <b>essential for processing any return</b>. This invoice helps us locate your transaction in our system by matching the invoice number with our sales records. Without the invoice, we won’t be able to verify the purchase, and as a result, <b className="text-red-800">we will not be able to process the return</b>. Please make sure to keep your invoice safe until you are fully satisfied with your purchase. <br /> <br />

                If the product was sold with a <b>box or any special packaging</b>, it must also be returned along with the item. However, we understand that some customers may discard the <b>shopping bag</b> we provide at the time of purchase — that’s completely fine and not required for a return. <br /> <br />

                We accept returns for valid reasons only. Whether it’s a sizing issue, a defect, or you received the wrong item, we’re here to help — but <b>returns without a justified reason will not be accepted</b>. Our goal is to protect both customer rights and ensure fairness in our return system. <br /> <br />

                When your return meets the conditions mentioned above, you’ll have two options: we can either provide a <b>cash refund</b>, or you may choose to <b>exchange the item for another product</b>. If the new item is of higher value, you will simply need to <b>pay the difference</b>.</p>
        </div>
    );
};

export default Return;