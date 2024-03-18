import React from 'react'
import { Instagram, Facebook, Twitter, Linkedin } from 'react-feather'

const FooterSection = () => {
    return (
        <>
            <div className='flex flex-wrap mt-[100px] px-[20px] lg:px-[120px]'>
                <div className='px-20 lg:px-5 w-full  lg:mx-0  lg:w-1/2'>
                    <img src='fabricaLogo.png' className='block h-12 w-12' />
                    <p className='text-[14px] text-gray-500 mt-2'>
                        Join our newsletter to stay up to date on features and releases.
                    </p>
                    <div className='flex mt-2 gap-4 h-[50px] py-1 w-3/4'>
                        <input placeholder='Enter your Email' className='border-slate-400 border-2 w-[400px] placeholder:px-4' />
                        <button className='rounded-3xl px-4 text-[12px] border-slate-400 border-2'>Subscribe</button>
                    </div>
                    <p className='text-[12px] mt-2 w-[400px] text-slate-400'>
                        By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.
                    </p>
                </div>
                <div className='flex justify-around w-full mt-10 lg:mt-0 lg:w-1/2'>
                    <div className='text-gray-400'>
                        <h2 className='font-semibold text-black mb-2'>About Us</h2>
                        <p className='py-1' >FAQ</p>
                        <p className='py-1' >Contact</p>
                        <p className='py-1' >Returns</p>
                        <p className='py-1' >Blog</p>
                        <p className='py-1' >Shipping</p>
                    </div>
                    <div className='text-gray-400'>
                        <h2 className='font-semibold text-black mb-2'>Customer Support</h2>
                        <p className='py-1' >Affiliates</p>
                        <p className='py-1' >Apple Pay Payments</p>
                        <p className='py-1' >Returns</p>
                        <p className='py-1' >Returns Policy</p>
                        <p className='py-1' >Customer Exec.</p>
                    </div>
                    <div className='text-gray-400'>
                        <h2 className='font-semibold text-black mb-2'>About Us</h2>
                        <p className='flex gap-2 items-center py-2' >
                            <Facebook size={20} />
                            <span>Facebook</span>
                        </p>
                        <p className='flex gap-2 items-center py-2' >
                            <Instagram size={20} />
                            <span>Instagram</span>
                        </p>
                        <p className='flex gap-2 items-center py-2' >
                            <Twitter size={20} />
                            <span>Twitter</span>
                        </p>
                        <p className='flex gap-2 items-center py-2' >

                            <Linkedin size={20} />
                            <span>
                                Linkedin
                            </span>
                        </p>
                    </div>

                </div>

            </div>
            <div className='flex flex-wrap justify-between mt-[100px] mb-[20px] px-[20px] lg:px-[120px] text-[14px]  text-slate-500'>
                <div className='w-full text-center lg:text-start lg:w-1/2' >
                    © 2023 GFirnuture. All rights reserved.
                </div>
                <div className='flex justify-around px-10 lg:justify-between w-full mt-4 lg:mt-0  lg:text-start lg:w-1/2'>
                    <span>
                        Privacy Policy
                    </span>
                    <span>
                        Terms of Service
                    </span>
                    <span>
                        Cookies Settings
                    </span>
                </div>
            </div>
        </>
    )
}

export default FooterSection