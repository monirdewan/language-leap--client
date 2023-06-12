import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-[#120F2D] text-white p-8'>
           <div className='grid grid-cols-1 md:grid-cols-4'>
                <div>
                    <h4>Contact Us</h4>
                </div>
                <div>
                    <h4>Support</h4>
                </div>
                <div>
                    <h4>Useful Link</h4>
                </div>
                <div>
                    <h4>Follow us</h4>
                </div>
           </div>
           <p className='text-center mt-8'>&copy;  2023 Language Leap. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;