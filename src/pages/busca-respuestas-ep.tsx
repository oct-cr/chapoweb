import Image from 'next/image'

import { CustomHead } from '../components/CustomHead'
import QuotesCarousel from '../components/QuotesCarousel'
import Video from '../components/YouTubeVideo'

import quotes from '../data-sources/br-quotes'


const JSONLD = {
    '@context': 'https://schema.org',
    '@graph': [
        {
            '@type': 'WebPage',
            '@id': 'https://chapotek.net/busca-respuestas-ep/#webpage',
            'url': 'https://chapotek.net/busca-respuestas-ep/',
            'name': 'Busca Respuestas – EP | CHAPOtek',
            'inLanguage': 'es-AR',
            'description': '“Busca Respuestas” mezcla reggae y rap. 5 canciones que invitan a mover el cuerpo y sacudir la mente.',
            'isPartOf': { '@id': 'https://chapotek.net/#website' }
        },
        {
            '@type': 'MusicAlbum',
            '@id': 'https://chapotek.net/busca-respuestas-ep/#album',
            'name': 'Busca Respuestas',
            'url': 'https://chapotek.net/busca-respuestas-ep/',
            'inLanguage': 'es-AR',
            'image': 'https://chapotek.net/busca-respuestas-chapotek.webp',
            'byArtist': { '@id': 'https://chapotek.net/#artist' },
            'genre': ['Reggae', 'Rap', 'Hip Hop'],
            'numTracks': 5,
            'datePublished': '2024',
            'potentialAction': [
                { '@type': 'ListenAction', 'target': 'https://open.spotify.com/album/7qw2W7e3Q8DzlWM79A4AxU' },
                { '@type': 'ListenAction', 'target': 'https://music.youtube.com/playlist?list=OLAK5uy_lcuFKUglE3nUEHT7fdVDTY3E8SjOYZLrA' },
                { '@type': 'ListenAction', 'target': 'https://www.youtube.com/playlist?list=PLP2B7J7vbwY8-W3U7yg1-LF9qJewnr5v7' }
            ],
            'producer': [
                { '@type': 'Person', 'name': 'Luis Gomez Salas', 'sameAs': 'https://www.instagram.com/lu.go.sa/' },
                { '@type': 'Person', 'name': 'CHP' }
            ],
            'recordingLocation': { '@type': 'Place', 'name': 'Lugosa', 'sameAs': 'https://www.instagram.com/estudiolugosa' },
            'track': [
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://chapotek.net/busca-respuestas-ep/#track-agua-va-a-caer',
                    'name': 'Agua va a caer',
                    'inLanguage': 'es-AR',
                    'byArtist': { '@id': 'https://chapotek.net/#artist' },
                    'isPartOf': { '@id': 'https://chapotek.net/busca-respuestas-ep/#album' },
                    'url': 'https://chapotek.net/busca-respuestas-ep/#AguaVaACaer',
                    'video': {
                        '@type': 'VideoObject',
                        'name': 'CHAPOtek - Agua va a caer',
                        'embedUrl': 'https://www.youtube.com/embed/Dp1tXlliNYM',
                        'url': 'https://www.youtube.com/watch?v=Dp1tXlliNYM',
                        'thumbnailUrl': 'https://i.ytimg.com/vi/Dp1tXlliNYM/maxresdefault.jpg',
                        'uploadDate': '2023-12-15T14:00:00+00:00',
                        'isFamilyFriendly': true
                    },
                    'contributor': [
                        { '@type': 'Person', 'name': 'Natalia Gómez Salas', 'roleName': 'Coros' },
                        { '@type': 'Person', 'name': 'Álvaro Drop', 'roleName': 'Dirección y Edición de video', 'sameAs': 'https://www.instagram.com/alvarodrop' }
                    ]
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://chapotek.net/busca-respuestas-ep/#track-llamando-tu-atencion',
                    'name': 'Llamando tu atención',
                    'inLanguage': 'es-AR',
                    'byArtist': { '@id': 'https://chapotek.net/#artist' },
                    'isPartOf': { '@id': 'https://chapotek.net/busca-respuestas-ep/#album' },
                    'url': 'https://chapotek.net/busca-respuestas-ep/#LlamandoTuAtencion',
                    'video': {
                        '@type': 'VideoObject',
                        'name': 'CHAPOtek - Llamando tu atención',
                        'embedUrl': 'https://www.youtube.com/embed/AAPeuN0obXE',
                        'url': 'https://www.youtube.com/watch?v=AAPeuN0obXE',
                        'thumbnailUrl': 'https://i.ytimg.com/vi/AAPeuN0obXE/maxresdefault.jpg',
                        'uploadDate': '2023-09-28T14:00:00+00:00',
                        'isFamilyFriendly': true
                    },
                    'contributor': [
                        { '@type': 'Person', 'name': 'Jp Gómez', 'roleName': 'Guitarra' },
                        { '@type': 'Person', 'name': 'Álvaro Drop', 'roleName': 'Dirección y Edición de video', 'sameAs': 'https://www.instagram.com/alvarodrop' },
                        { '@type': 'Person', 'name': 'Agustina Garrocho', 'roleName': 'Guion, DF y Color' },
                        { '@type': 'Person', 'name': 'Martín Burgos', 'roleName': 'Cámaras y Visuales' },
                        { '@type': 'Person', 'name': 'Martín Falci', 'roleName': 'Producción' }
                    ]
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://chapotek.net/busca-respuestas-ep/#track-busca-respuestas',
                    'name': 'Busca Respuestas',
                    'inLanguage': 'es-AR',
                    'byArtist': { '@id': 'https://chapotek.net/#artist' },
                    'isPartOf': { '@id': 'https://chapotek.net/busca-respuestas-ep/#album' },
                    'url': 'https://chapotek.net/busca-respuestas-ep/#BuscaRespuestas',
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://chapotek.net/busca-respuestas-ep/#track-viene-y-agita',
                    'name': 'Viene y agita',
                    'inLanguage': 'es-AR',
                    'byArtist': { '@id': 'https://chapotek.net/#artist' },
                    'isPartOf': { '@id': 'https://chapotek.net/busca-respuestas-ep/#album' },
                    'url': 'https://chapotek.net/busca-respuestas-ep/#VieneYAgita',
                    'video': {
                        '@type': 'VideoObject',
                        'name': 'CHAPOtek - Viene y agita',
                        'embedUrl': 'https://www.youtube.com/embed/x6ntGoI_eOU',
                        'url': 'https://www.youtube.com/watch?v=x6ntGoI_eOU',
                        'thumbnailUrl': 'https://i.ytimg.com/vi/x6ntGoI_eOU/maxresdefault.jpg',
                        'uploadDate': '2024-01-11T14:00:00+00:00',
                        'isFamilyFriendly': true
                    }
                },
                {
                    '@type': 'MusicRecording',
                    '@id': 'https://chapotek.net/busca-respuestas-ep/#track-ven-seremos',
                    'name': 'Ven seremos',
                    'inLanguage': 'es-AR',
                    'byArtist': { '@id': 'https://chapotek.net/#artist' },
                    'isPartOf': { '@id': 'https://chapotek.net/busca-respuestas-ep/#album' },
                    'url': 'https://chapotek.net/busca-respuestas-ep/#VenSeremos',
                    'video': {
                        '@type': 'VideoObject',
                        'name': 'CHAPOtek - Ven seremos',
                        'embedUrl': 'https://www.youtube.com/embed/Pua0M65BSY4',
                        'url': 'https://www.youtube.com/watch?v=Pua0M65BSY4',
                        'thumbnailUrl': 'https://i.ytimg.com/vi/Pua0M65BSY4/maxresdefault.jpg',
                        'uploadDate': '2024-03-16T14:00:00+00:00',
                        'isFamilyFriendly': true
                    },
                    'contributor': [
                        { '@type': 'Person', 'name': 'Jp Gómez', 'roleName': 'Guitarra' }
                    ]
                }
            ],
            'contributor': [
                { '@type': 'Person', 'name': 'Julio Zavalía', 'roleName': 'Fotografía de tapa', 'sameAs': 'https://www.instagram.com/juliozavalia/' },
                { '@type': 'Person', 'name': 'Pablo López', 'roleName': 'Diseño de tapa', 'sameAs': 'https://www.instagram.com/pab.lop.visual/' },
                { '@type': 'Person', 'name': 'ARI Riddim Maker', 'roleName': 'Mezcla', 'sameAs': 'https://www.instagram.com/arm_b3at' },
                { '@type': 'Organization', 'name': 'Afrosound', 'roleName': 'Masterización (pistas 1 y 2)' },
                { '@type': 'Person', 'name': 'Matías Parisi', 'roleName': 'Masterización (pistas 3–5)', 'sameAs': 'https://www.matiasparisimastering.com/' }
            ]
        },
        {
            '@type': 'BreadcrumbList',
            'itemListElement': [
                {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Inicio',
                    'item': 'https://chapotek.net/'
                },
                {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': 'Busca Respuestas (EP)',
                    'item': 'https://chapotek.net/busca-respuestas-ep/'
                }
            ]
        }
    ]
}


export default function Page() {
    return (
        <main>
            <CustomHead
                title="Busca Respuestas EP | CHAPOtek"
                description='"Busca Respuestas" mezcla reggae y rap. 5inco canciones que invitan a mover el cuerpo y sacudir la mente.'
                canonical="https://chapotek.net/busca-respuestas-ep/"
                favicon="/favicon.ico"
                faviconType="image/x-icon"
                openGraph={{
                    title: 'Busca Respuestas EP | CHAPOtek',
                    description: '"Busca Respuestas": 5inco canciones que mezclan reggae y rap para mover el cuerpo y sacudir la mente.',
                    image: 'https://chapotek.net/busca-respuestas-chapotek.webp',
                    url: 'https://chapotek.net/busca-respuestas-ep/',
                    type: 'music.album',
                }}
                twitter={{
                    card: 'summary_large_image',
                    title: 'Busca Respuestas EP | CHAPOtek',
                    description: '"Busca Respuestas": reggae, rap y música consciente en español.',
                    image: 'https://chapotek.net/busca-respuestas-chapotek.webp',
                }}
                jsonLd={JSONLD}
            />
            <h1>Busca Respuestas</h1>
            <p>EP - 2024</p>
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

            <QuotesCarousel id="letras" quotes={quotes} />

            <h3>mirá</h3>

            <h2>Agua va a caer</h2>
            <Video videoid="Dp1tXlliNYM" />


            <h2>Llamando tu atención</h2>
            <Video videoid='AAPeuN0obXE' />

            <h2>Busca Respuestas</h2>
            <Video videoid="emltQ0w45zk" />

            <h2>Viene y agita</h2>
            <Video videoid="x6ntGoI_eOU" />

            <h2>ven seremos</h2>
            <Video videoid="Pua0M65BSY4" />

            <hr className="my-15 border-0" />

            <h3>con la participación de:</h3>


            <p><strong>Fotografía Tapa</strong>: <a href="https://www.instagram.com/juliozavalia/" target="_blank" rel="noopener">Julio Zavalía</a> ** <strong>Diseño Tapa</strong>: <a href="https://www.instagram.com/pab.lop.visual/" target="_blank" rel="noopener">Pablo López</a></p>
            <p><strong>Producción Musical</strong>: <a href="https://www.instagram.com/lu.go.sa/" target="_blank" rel="noreferrer noopener">Luis Gomez Salas</a> &amp; CHP [[ <strong>Grabado en</strong>: <a href="https://www.instagram.com/estudiolugosa" target="_blank" rel="noreferrer noopener">Lugosa</a> ^^ <strong>Mezcla</strong>: <a href="https://www.instagram.com/arm_b3at" target="_blank" rel="noreferrer noopener">ARI Riddim Maker</a> ;; <strong>Masterización</strong>: 1 y 2: Afrosound; 3, 4 y 5: <a href="https://www.matiasparisimastering.com/" target="_blank" rel="noopener">Matías Parisi</a> @@ <strong>Letra</strong> y <strong>Música</strong>: CHP</p>

            <h4>Agua va a caer</h4>
            <p>
                <strong>Coros</strong>:&nbsp;<a href="" target="_blank" rel="noreferrer noopener">Natalia Gómez Salas</a>
            </p>
            <p>
                <strong>VIDEO: Dirección</strong> &amp; <strong>Edición</strong>:&nbsp;
                <a href="https://www.instagram.com/alvarodrop" target="_blank" rel="noreferrer noopener">Álvaro Drop</a>
            </p>

            <h4>Llamando tu atención</h4>
            <p><strong>Guitarra</strong>:&nbsp;<a href="" target="_blank" rel="noreferrer noopener">Jp Gómez</a></p>
            <p>
                <strong>VIDEO: Dirección</strong> &amp; <strong>Edición</strong>:&nbsp;
                <a href="https://www.instagram.com/alvarodrop" target="_blank" rel="noreferrer noopener">Álvaro Drop</a>
                _ <strong>Guión</strong>:&nbsp;
                <a href="https://www.instagram.com/agusti_" target="_blank" rel="noreferrer noopener">Agustina Garrocho</a>
                &nbsp;&#8211; Álvaro Drop
                ** <strong>DF</strong> &amp; <strong>Color</strong>: Agustina Garrocho ==
                <strong>Cámaras</strong>: Agustina Garrocho &#8211; Martín Burgos ++
                <strong>Visuales en Videowall</strong>:&nbsp;
                <a href="https://www.instagram.com/_______marto" target="_blank" rel="noreferrer noopener">Martín Burgos</a>
                {'}}'} <strong>Producción</strong>:&nbsp;
                <a href="https://www.instagram.com/martinfalci.filma" target="_blank" rel="noreferrer noopener">Martín Falci</a>
                &nbsp;&#8211; Álvaro Drop
            </p>

            <h5>ven seremos</h5>
            <p>
                <strong>Guitarra</strong>:&nbsp;<a href="" target="_blank" rel="noreferrer noopener">Jp Gómez</a>
            </p>

            <hr />

            <p><strong>Grax</strong>: Pablo Arias, Iggy Ras, Pete Nadal, Jin Yerei, Germán Paz, El Ju, Ariel Paex, Jero Santillán, amigues, familia y Magda</p>
        </main >
    )
}
