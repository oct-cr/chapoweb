import Image from 'next/image'

import fxCss from './styles/fx.module.css'


export default function Page() {
    return (
        <main>
            <div className='flex flex-col md:flex-row gap-x-10 gap-y-5 justify-center mb-20'>
                <div>
                    <p>mueve tu cuerpo</p>

                    <p className='text-right'>sacude tu mente</p>

                    <h1>CHAPOtek</h1>
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
                    />

                    <div className="flex gap-10 justify-center text-xl">
                        <a href="https://www.instagram.com/chapo.tek/" target="_blank" rel="noopener">
                            Insta
                        </a>
                        <a href="https://www.youtube.com/@chapotek" target="_blank" rel="noopener">
                            youTube
                        </a>
                        <a href="https://www.facebook.com/CHAPOtek" target="_blank" rel="noopener">
                            fake
                        </a>
                    </div>
                </div>
            </div>

            <p>mirá</p>
            <p>escuchá</p>
            <h2>Busca Respuestas</h2>

            <Image
                src="/busca-respuestas-chapotek.webp"
                alt="Busca Respuestas es un álbum de CHAPOtek"
                width={300}
                height={300}
                className={fxCss.imgNoisedSquare}
            />
        </main>
    )
}
