import { useState } from "react";

const ZoomImage = ({ src }) => {
    const [zoomStyle, setZoomStyle] = useState({});

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setZoomStyle({
            transformOrigin: `${x}% ${y}%`,
            transform: "scale(3)",
        });
    };

    const handleMouseLeave = () => {
        setZoomStyle({
            transform: "scale(1)",
            transformOrigin: "center",
        });
    };

    return (
        <div
            className="overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <img
                src={src}
                alt="Product Image"
                className="w-full h-full object-cover transition-transform duration-200 ease-out"
                style={zoomStyle}
            />
        </div>
    );
};

export default ZoomImage;