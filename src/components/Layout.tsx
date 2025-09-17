'use client'

import { useEffect } from 'react'
// eslint-disable-next-line camelcase
import { Exo_2, Carter_One } from 'next/font/google'
import Link from 'next/link'
import NextImage from 'next/image'

import ui from '../styles/ui.module.css'


const exo = Exo_2({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-body',
})

const headerFont = Carter_One({
    subsets: ['latin'],
    weight: '400',
    display: 'swap',
    variable: '--font-header',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const img = new Image()
        img.src = '/bg-chapo-tek-website.jpg'
        img.onload = () => {
            document.body.style.backgroundImage = `url(${img.src})`
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundPosition = 'center'
        }
    }, [])

    return (
        <html lang="en">
            <body className={`${exo.variable} ${headerFont.variable}`}>
                <Link href='/'>
                    <NextImage
                        src="/logo-CHAPOtek.webp"
                        alt="Logo"
                        width={256}
                        height={46}
                        priority
                        className={ui.topLogo}
                    />
                </Link>

                {children}
            </body>
        </html>
    )
}
