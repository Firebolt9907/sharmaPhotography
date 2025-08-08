import React from 'react';
import ShimmerButton from '~/components/subcomponents/shimmerButton';

const ContactMe: React.FC = () => {
    return (
        <div className="overflow-hidden" style={{ padding: "0px 50px", marginBottom: "0px", marginTop: "0px", paddingTop: "90px", backgroundColor: "white", color: "black" }}>
            <div className='flex flex-row justify-between' style={{ paddingBottom: "80px", }}>
                <div className="flex flex-col justify-center" style={{ minHeight: "100%" }}>
                    <h3 style={{ fontSize: "80px", fontFamily: "Bebas Neue" }}>Contact Me</h3>
                </div>
                <div className='flex flex-row'>
                    <ShimmerButton
                        title='contactMe'
                        content={<div className='flex flex-row gap-5'><img className='size-25' src="https://raw.githubusercontent.com/Firebolt9907/sharmaPhotography/21dfa99a75751c0fb4cc679c6383a883f3a71621/photos/email-logo.svg" style={{ filter: "invert(1)" }} /> <div className='flex flex-col justify-center'><p className='text-6xl'>Email  </p></div></div>}
                        handleClick={() => { window.open('mailto:sharmatripti24@gmail.com', '_blank') }} />
                </div>
            </div>
            <div className='flex flex-row justify-center text-gray-500 text-sm pb-4 space-x-4'>
                <span>
                    Photography & Paintings &copy; {new Date().getFullYear()} Tripti Sharma. All rights reserved.
                </span>
                <span>
                    Website &copy; {new Date().getFullYear()} Rishu Sharma. <a href='https://github.com/Firebolt9907/sharmaPhotography' style={{ textDecoration: "underline" }}>Source Code</a>
                </span>
            </div>
        </div>

    );
};

export default ContactMe;