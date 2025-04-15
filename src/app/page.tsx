import Image from 'next/image'

import fxCss from './styles/fx.module.css'


export default function Page() {
    return (
        <main>
            <p>mueve tu cuerpo</p>

            <p>sacude tu mente</p>

            <h1>CHAPOtek</h1>
            <p>hace una mezcla de reggae y rap</p>

            <Image
                className={fxCss.imgBlob}
                src="/CHAPOtek-perfil.jpg"
                alt="perfil"
                width={300}
                height={300}
                priority
            />

            <div className="d-flex gap-3 justify-content-center fs-1 my-5">
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
