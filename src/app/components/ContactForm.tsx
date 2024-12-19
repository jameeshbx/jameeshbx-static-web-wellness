import React from 'react'
import { contactForm } from '../data/contact'

function ContactForm() {
    return (
        <div>
            <section className="bg-pink py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <p className="text-Manrope text-lg uppercase tracking-wider text-darkpink mb-4">
                            {contactForm.label}
                        </p>
                        <h2 className="text-3xl md:text-4xl font-playfair font-semibold mb-6">
                            {contactForm.title}
                        </h2>
                        <p className="text-gray-600 px-14">
                            {contactForm.des}
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-14 mx-8">
                            <form className="space-y-2">
                                <div className="relative">
                                    <img src="/contactuser.png" alt="" className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full pl-10 pr-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    />
                                </div>

                                <div className="relative">
                                    <img src="/contactemail.png" alt="" className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full pl-10 pr-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    />
                                </div>

                                <div className="relative">
                                    <img src="/contactphone.png" alt="" className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="w-full pl-10 pr-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    />
                                </div>

                                <div className="relative">
                                    <img src="/contactbook.png" alt="" className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

                                    <input
                                        type="text"
                                        placeholder="Service You Need"
                                        className="w-full pl-10 pr-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                                    />
                                </div>

                                <div className="relative">
                                    <img src="/contactnote.png" alt="" className="absolute left-3 top-3 h-5 w-5 text-gray-400" />

                                    <textarea
                                        placeholder="Any Note For Us"
                                        className="w-full pl-10 pr-3 py-2 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent min-h-[100px]"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gray-900  text-white py-3 rounded-md  ease-in-out"
                                >
                                    SUBMIT
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactForm