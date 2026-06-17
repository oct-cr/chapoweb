import Image from 'next/image'
import Link from 'next/link'

import { CustomHead } from '../components/CustomHead'
import fxCss from '../styles/fx.module.css'


const JSONLD = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebSite',
            '@id': 'https://chapotek.net/#website',
            'url': 'https://chapotek.net/',
            'name': 'CHAPOtek',
            'inLanguage': 'es-AR',
            'description': 'CHAPOtek: desterrado del reggae y del rap. Una visión que se hace revolución.',
            'publisher': { '@type': 'Person', 'name': 'CHAPOtek', 'url': 'https://chapotek.net/' }
        },
        {
            '@type': 'Person',
            '@id': 'https://chapotek.net/#artist',
            'name': 'CHAPOtek',
            'alternateName': 'CHP',
            'url': 'https://chapotek.net/',
            'inLanguage': 'es-AR',
            'genre': ['Reggae', 'Rap', 'Hip Hop'],
            'image': [
                'https://chapotek.net/CHAPOtek-perfil.jpg',
            ],
            'sameAs': [
                'https://www.instagram.com/chapo.tek',
                'https://www.youtube.com/@chapotek',
                'https://www.facebook.com/CHAPOtek',
                'https://www.tiktok.com/@chapotek'
            ],
            'homeLocation': [
                { '@type': 'City', 'name': 'Buenos Aires, Argentina' },
                { '@type': 'City', 'name': 'Tucumán, Argentina' },
                { '@type': 'City', 'name': 'Köln, Alemania' }
            ],
            'description': 'Desterrado del reggae y del rap. Una visión que se hace revolución.',
            'potentialAction': { '@type': 'ListenAction', 'target': ['https://www.youtube.com/@chapotek'] }
        }
    ]
}


const SHOW_NEWSLETTER = false


export default function Page() {
    return (
        <main>
            <CustomHead
                title="CHAPOtek - desterrado del reggae y del rap"
                description="CHAPOtek: desterrado del reggae y del rap. Una visión que se hace revolución. Música consciente en español desde Tucumán, Baires y Köln. Escuchá el EP Busca Respuestas."
                canonical="https://chapotek.net/"
                favicon="/favicon.ico"
                faviconType="image/x-icon"
                openGraph={{
                    title: 'CHAPOtek - sacudí tu mente',
                    description: 'Un horizonte común. Algo por lo que caminar. Desterrado del reggae y del rap, desde Tucumán, Baires y Köln.',
                    image: 'https://chapotek.net/busca-respuestas-chapotek.webp',
                    url: 'https://chapotek.net/',
                    type: 'music.musician',
                }}
                twitter={{
                    card: 'summary_large_image',
                    title: 'CHAPOtek - sacudí tu mente',
                    description: 'Un horizonte común. Algo por lo que caminar. Desterrado del reggae y del rap.',
                    image: 'https://chapotek.net/busca-respuestas-chapotek.webp',
                }}
                jsonLd={JSONLD}
            />
            <div className='flex flex-col md:flex-row gap-x-20 gap-y-5 justify-center mb-20'>
                <div className='pt-10'>
                    <p>mueve tu cuerpo</p>

                    <p className='text-right'>sacude tu mente</p>

                    <h1 className='!mb-0 !normal-case'>CHAPOtek</h1>
                    <p>desterrado del reggae y del rap - una visión que se hace revolución</p>
                </div>
                <div>
                    <Image
                        className={`${fxCss.imgBlob} mx-auto my-5`}
                        src="/CHAPOtek-perfil.jpg"
                        alt="perfil"
                        width={300}
                        height={300}
                        priority
                        style={{ maxHeight: '20vh', width: 'auto' }}
                    />

                    <div className="grid grid-cols-2 gap-x-10 gap-y-3 justify-items-center text-xl">
                        <a href="https://www.instagram.com/chapo.tek/" target="_blank" rel="noopener">
                            inSta
                        </a>
                        <a href="https://www.youtube.com/@chapotek" target="_blank" rel="noopener">
                            youTube
                        </a>
                        <a href="https://www.tiktok.com/@chapotek" target="_blank" rel="noopener">
                            tikTok
                        </a>
                        <a href="https://www.facebook.com/CHAPOtek" target="_blank" rel="noopener">
                            fakEbook
                        </a>
                    </div>
                </div>
            </div>

            <div className='max-w-md mx-auto relative'>
                <p>mirá</p>
                <p>escuchá</p>
                <Link href="/busca-respuestas-ep">
                    <h2 className="after:absolute after:inset-0 after:z-10">Busca Respuestas</h2>
                </Link>
                <figure className={`${fxCss.effect} ${fxCss.glitch} ${fxCss.imgNoisedSquare}`}>
                    <Image
                        src="/busca-respuestas-chapotek.webp"
                        alt="Busca Respuestas es un álbum de CHAPOtek"
                        width={300}
                        height={300}
                    />
                </figure>
            </div>
            <div className='max-w-lg mx-auto'>
                <p>5inco canciones que mezclan rap y reggae</p>
                <Link href="/busca-respuestas-ep">
                    <h3 className='text-right'>
                        Descubrí
                        <span
                            aria-label="arrow"
                            role="img"
                            style={{
                                display: 'inline-block',
                                animation: 'arrow-move 1s linear infinite alternate',
                                marginLeft: '0.5em'
                            }}
                        >
                            &#10148;
                        </span>
                        <style jsx>{`
                            @keyframes arrow-move {
                                0% { transform: translateX(0); }
                                100% { transform: translateX(10px); }
                            }
                        `}</style>
                    </h3>
                </Link>
            </div>

            {SHOW_NEWSLETTER && (
                <section className="max-w-lg mx-auto mt-16">
                    <p className="mb-3">Sumate. Recibí lo que va saliendo.</p>
                    <form action="REEMPLAZAR_CON_FORM_KIT" method="post" className="flex flex-col sm:flex-row gap-3">
                        <label className="sr-only" htmlFor="newsletter-email">Email</label>
                        <input
                            id="newsletter-email"
                            name="email"
                            type="email"
                            required
                            placeholder="tu email"
                            className="min-w-0 flex-1 rounded border border-[var(--link)] bg-[var(--background)] px-4 py-2 text-[var(--foreground)] placeholder:text-[var(--foreground)]/60"
                        />
                        <button
                            type="submit"
                            className="rounded border border-[var(--link)] px-5 py-2 text-[var(--link)] transition-colors hover:border-[var(--link-hover)] hover:text-[var(--link-hover)]"
                        >
                            enviar
                        </button>
                    </form>
                </section>
            )}
        </main>
    )
}
