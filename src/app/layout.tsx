'use client'

import { useEffect } from 'react'
import { Exo } from 'next/font/google'
import NextImage from 'next/image'

import './styles/globals.css'
import ui from './styles/ui.module.css'


const exo = Exo({
    subsets: ['latin'],
})


export default function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            <body className={`${exo.className}`}>
                <NextImage
                    src="/logo-CHAPOtek.webp"
                    alt="Logo"
                    width={256}
                    height={46}
                    priority
                    className={ui.topLogo}
                />

                {children}
            </body>
        </html>
    )
}
