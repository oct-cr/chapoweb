import Image from 'next/image'
import Video from '../components/YouTubeVideo'
import QuotesCarousel from '../components/QuotesCarousel'
import quotes from '../data-sources/br-quotes'

export default function Page() {
    return (
        <main>
            <h1>Busca Respuestas</h1>
            <Image
                src="/busca-respuestas-chapotek.webp"
                alt="Busca Respuestas es un álbum de CHAPOtek"
                width={300}
                height={300}
                className='mx-auto mb-3 shadow-xl/100 rounded-lg border-emerald-900 border-2'
            />

            <h2 className="text-center"><em>escuchá</em></h2>

            <div className='flex gap-10 justify-center mb-10'>
                <a href="https://open.spotify.com/album/7qw2W7e3Q8DzlWM79A4AxU" className="icon-link" target="_blank" rel="noopener">
                    <span className="icon-spotify"></span>
                    <span className="caption">Spotify</span>
                </a>
                <a href="https://music.youtube.com/playlist?list=OLAK5uy_lcuFKUglE3nUEHT7fdVDTY3E8SjOYZLrA" className="icon-link" target="_blank" rel="noopener">
                    <span className="icon-youtube-music"></span>
                    <span className="caption">YouTube<br />Music</span>
                </a>
                <a href="https://www.youtube.com/playlist?list=PLP2B7J7vbwY8-W3U7yg1-LF9qJewnr5v7" className="icon-link" target="_blank" rel="noopener">
                    <span className="icon-youtube"></span>
                    <span className="caption">YouTube</span>
                </a>
            </div>

            <QuotesCarousel id="letras" quotes={quotes}/>

            <h3>mirá</h3>

            <h2>Agua va a caer</h2>
            <Video videoid="Dp1tXlliNYM" />

            <h2>Llamando tu atención</h2>

            <Video videoid='AAPeuN0obXE' />

            <p className="has-text-align-center"><strong>Guitarra</strong>:&nbsp;<a href="" target="_blank" rel="noreferrer noopener">Jp Gómez</a></p>

            <h3>Video</h3>
            <p className="has-text-align-center"><strong>Dirección</strong> &amp; <strong>Edición</strong>:&nbsp;<a href="https://www.instagram.com/alvarodrop" target="_blank" rel="noreferrer noopener">Álvaro Drop</a> _ <strong>Guión</strong>:&nbsp;<a href="https://www.instagram.com/agusti_" target="_blank" rel="noreferrer noopener">Agustina Garrocho</a>&nbsp;&#8211; Álvaro Drop ** <strong>DF</strong> &amp; <strong>Color</strong>: Agustina Garrocho == <strong>Cámaras</strong>: Agustina Garrocho &#8211; Martín Burgos ++ <strong>Visuales en Videowall</strong>:&nbsp;<a href="https://www.instagram.com/_______marto" target="_blank" rel="noreferrer noopener">Martín Burgos</a> {'}}'} <strong>Producción</strong>:&nbsp;<a href="https://www.instagram.com/martinfalci.filma" target="_blank" rel="noreferrer noopener">Martín Falci</a>&nbsp;&#8211; Álvaro Drop</p>

            <h2>Busca Respuestas</h2>
            <div className="wp-block-embed__wrapper">
                <Video videoid="emltQ0w45zk" />
            </div>

            <h2>Viene y agita</h2>
            <p>
                <Video videoid="x6ntGoI_eOU" />
            </p>

            <h2>ven seremos</h2>
            <div className="wp-block-embed__wrapper">
                <Video videoid="Pua0M65BSY4" />
            </div>

            <p className="has-text-align-center">
                <strong>Guitarra</strong>:&nbsp;<a href="" target="_blank" rel="noreferrer noopener">Jp Gómez</a>
            </p>

            <p>&nbsp;</p>

            <p><strong>Fotografía Tapa</strong>: <a href="https://www.instagram.com/juliozavalia/" target="_blank" rel="noopener">Julio Zavalía</a> ** <strong>Diseño Tapa</strong>: <a href="https://www.instagram.com/pab.lop.visual/" target="_blank" rel="noopener">Pablo López</a></p>
            <p><strong>Producción Musical</strong>: <a href="https://www.instagram.com/lu.go.sa/" data-type="link" data-id="https://www.instagram.com/lu.go.sa/" target="_blank" rel="noreferrer noopener">Luis Gomez Salas</a> &amp; CHP [[ <strong>Grabado en</strong>: <a href="https://www.instagram.com/estudiolugosa" target="_blank" rel="noreferrer noopener">Lugosa</a> ^^ <strong>Mezcla</strong>: <a href="https://www.instagram.com/arm_b3at" target="_blank" rel="noreferrer noopener">ARI Riddim Maker</a> ;; <strong>Masterización</strong>: 1 y 2: Afrosound; 3, 4 y 5: <a href="https://www.matiasparisimastering.com/" target="_blank" rel="noopener">Matías Parisi</a> @@ <strong>Letra</strong> y <strong>Música</strong>: CHP</p>
            <p><strong>Grax</strong>: Pablo Arias, Iggy Ras, Pete Nadal, Jin Yerei, Germán Paz, El Ju, Ariel Paex, Jero Santillán, amigues, familia y Magda</p>
        </main >
    )
}
