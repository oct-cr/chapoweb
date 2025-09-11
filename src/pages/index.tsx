import Image from 'next/image'
import Link from 'next/link'

import fxCss from '../styles/fx.module.css'


export default function Page() {
    return (
        <main>
            <div className='flex flex-col md:flex-row gap-x-20 gap-y-5 justify-center mb-20'>
                <div className='pt-10'>
                    <p>mueve tu cuerpo</p>

                    <p className='text-right'>sacude tu mente</p>

                    <h1 className='!mb-0 !normal-case'>CHAPOtek</h1>
                    <p>hace una mezcla de reggae y rap</p>
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

                    <div className="flex gap-10 justify-center text-xl">
                        <a href="https://www.instagram.com/chapo.tek/" target="_blank" rel="noopener">
                            inSta
                        </a>
                        <a href="https://www.youtube.com/@chapotek" target="_blank" rel="noopener">
                            youTube
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
        </main>
    )
}
