import { motion } from 'motion/react';
import React from 'react';

interface CarouselProps {
    content: React.ReactNode,
    title: String
}

const Carousel: React.FC<CarouselProps> = ({ content, title }) => {
    return (<div><div className='flex flex-row justify-between'>
        <motion.h3
            className='text-white m-10'
            style={{
                fontSize: '50px',
                fontWeight: 'bold',
                fontFamily: 'Bebas Neue',
                marginBottom: '-40px',
                marginTop: '-10px',
                position: 'sticky'
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, type: 'spring', delay: 0.3 }}
        >
            {title}
        </motion.h3>
        <div className='flex flex-row'><button
            style={{
                transform: "translateY(-50%)",
                zIndex: 1,
                background: "rgba(0,0,0,0.5)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "25px",
                marginBottom: "-40px",
                marginLeft: "5px",
                marginRight: "5px"
            }}
            onClick={() => {
                const container = document.getElementById("scrollable-row");
                if (container) container.scrollBy({ left: -1 * screen.width / 3, behavior: "smooth" });
            }}
            aria-label="Scroll left"
        >
            &#8592;
        </button>

            <button
                style={{
                    transform: "translateY(-50%)",
                    zIndex: 1,
                    background: "rgba(0,0,0,0.5)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "25px",
                    marginBottom: "-40px",
                    marginLeft: "5px",
                    marginRight: "20px"
                }}
                onClick={() => {
                    const container = document.getElementById("scrollable-row");
                    if (container) container.scrollBy({ left: screen.width / 3, behavior: "smooth" });
                }}
                aria-label="Scroll right"
            >
                &#8594;
            </button></div></div>
        <div style={{ position: "relative" }}>
            <motion.div
                id="scrollable-row"
                className="flex flex-row overflow-x-auto overflow-y-visible"
                style={{
                    minWidth: 0,
                    paddingBottom: "10px",
                    marginBottom: "30px",
                    gap: "15px",
                    paddingLeft: "40px",
                    scrollBehavior: "smooth",
                }}
            >
                {content}
            </motion.div>
        </div></div>)
};

export default Carousel;