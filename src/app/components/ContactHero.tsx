import React from 'react'
import { hero } from '../data/contact'

function ContactHero() {
    return (
        <div>
            <section className="bg-[url('/Background.png')] text-white py-20 text-center">
                <div className="container mx-auto px-4">
                    <p className="text-sm uppercase tracking-wider mb-4">{hero.label}</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl px-16 font-playfair max-w-3xl mx-auto leading-tight">
                        {hero.title}
                    </h1>
                </div>
            </section>
        </div>
    )
}

export default ContactHero