import React from 'react'
import { contactDetails, Contact } from '../data/contact'
import { body } from '../data/contact'


function ContactBody() {
    return (
        <div>
            <section className="py-10 md:py-12 lg:mx-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">

                        <div className='pt-10' >
                            <img src="contactimgs.png" alt="" />
                        </div>


                        <div className="space-y-8 px-4 md:px-8 lg:px-14">
                            <div>
                                <p className="text-sm uppercase tracking-wider text-purple-900 mb-2 text-center md:text-left">
                                    {body.label}
                                </p>
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-playfair font-semibold mb-4 text-center md:text-left">
                                    {body.title}
                                </h2>
                                <p className="text-gray-600 text-center md:text-left">
                                    {body.des}
                                </p>
                            </div>


                            <div className="space-y-6">
                                {contactDetails.map((contact: Contact, index: number) => (
                                    <div className="flex items-start gap-4" key={index}>
                                        <div className="p-4 bg-white border-black border-2 item-center w-16 rounded-lg hidden md:flex">
                                            <img src={contact.icon} alt={contact.label} />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold font-playfair text-lg mb-1">{contact.label}</h3>
                                            <p className="text-gray-600 text-sm md:text-base">{contact.des}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactBody