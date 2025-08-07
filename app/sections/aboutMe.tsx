import React from 'react';

const AboutMe: React.FC = () => {
    return (
        <div style={{ padding: "0px 50px", marginBottom: "20px", paddingBottom: "90px", marginTop: "0px", paddingTop: "90px", backgroundColor: "rgb(150,150,150)", color: "black" }} className='flex flex-row justify-between'>
            <div className="flex flex-col justify-center" style={{ minHeight: "100%" }}>
                <h3 style={{ fontSize: "80px", fontFamily: "Bebas Neue" }}>My Story</h3>
            </div>
            <p style={{ width: "70vw", fontSize: "20px" }}>Hi, my name is Tripti, and I want to share my story with you. As someone who has always been passionate about art and nature, I've found my creative outlet in nature photography and painting on canvas. Since childhood, I've been fascinated by the world's beauty - from the vibrant colors of flowers to the majesty of landscapes and the changing seasons. Through my lens and brushstrokes, I aim to capture and share this beauty with others, spreading positivity and wonder. My art is a reflection of my enthusiasm for life, and I'm excited to connect with like-minded individuals who appreciate the magic of nature and creativity. With every click and every stroke, I feel alive and connected to the world. I'm looking forward to sharing my art with a wider audience through S3, my online platform where I'll be showcasing my work and journey as an artist. I'm excited to inspire others and fuel my passion further.</p>
        </div>
    );
};

export default AboutMe;