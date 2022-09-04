import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { DownloadIcon, CollectionIcon } from '@heroicons/react/outline'
import MyDialog from '../components/Dialog'
import { useState } from 'react'

const Homepage = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <Head>
        <title>Модпак | Pe3ep</title>
        <meta
          name="description"
          content="Страница загрузки модпака Pe3ep's Modpack."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        <video
          className="hidden lg:block object-cover w-full h-screen opacity-25 z-10 fixed"
          src="/video/bg_videoLoop.webm"
          autoPlay
          loop
          muted></video>
        <div className="h-screen grid place-content-center z-20 relative">
          <div className="flex flex-col gap-4 p-8 md:p-10 w-[90vw] max-w-3xl mx-auto rounded-lg border-2 border-neutral-800 bg-neutral-900 shadow-xl">
            <div className="flex justify-center">
              <div className="rounded-lg overflow-hidden w-16 h-16 shadow-xl shadow-green-600/20">
                <Image
                  src="/icons/modpack/1000x1000.png"
                  width="64"
                  height="64"
                  blurDataURL="/icons/modpack/1000x1000.png"
                  placeholder="blur"
                  objectFit="cover"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className="font-manrope font-extrabold text-2xl text-center">
                Modpack v1.2a
              </h1>
              <p className="leading-5 font-inter font-medium text-neutral-300 text-center">
                Это мой личный модпак, который я использую каждый день на
                сервере{' '}
                <span className="text-red-500 font-bold underline underline-offset-3">
                  <a href="https://pepeland.net">Pepeland 7</a>
                </span>
                .
              </p>
              <div className="flex justify-center items-center gap-2">
                <button
                  onClick={() => setIsOpen(true)}
                  // disabled
                  className="transition flex items-center justify-center py-2 px-4 disabled:bg-red-500/25 enabled:bg-red-500 enabled:hover:bg-red-500/75 rounded-lg">
                  <DownloadIcon className="w-5 h-5 mr-2" />
                  Скачать
                  {/* Недоступно */}
                </button>

                <Link href="/list">
                  <button className="transition flex items-center justify-center py-2 px-4 bg-neutral-700 rounded-lg hover:bg-neutral-700/75">
                    <CollectionIcon className="w-5 h-5 mr-2" />
                    Моды
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <MyDialog
          closeModal={() => closeModal()}
          openModal={() => openModal()}
          isOpen={isOpen}
          setIsOpen={() => setIsOpen(!isOpen)}
        />
      </main>
    </>
  )
}

export default Homepage
