import React, { Key } from 'react'
import { CollectionIcon } from '@heroicons/react/solid'
import { ArrowUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import { SpinnerCircular } from 'spinners-react'

export interface CatsData {
  animal: string
  name: string
  id: string
}

export interface CatsDataModel {
  data: CatsData[]
}

const list = ({ data }: any) => {
  const [modlist, setModlist]: any = useState()

  const getApiData = async () => {
    const response = await fetch('https://mods.pe3ep.ru/data/modlist.json')
      .then((response) => response.json())
      .then((response) =>
        response.sort((a: { name: string }, b: { name: string }) => {
          let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase()

          if (fa < fb) {
            return -1
          }
          if (fa > fb) {
            return 1
          }
          return 0
        })
      )

    setModlist(response)
    // update the state
  }

  function turncateName(text: string): string {
    const characterLimit = 80
    if (text.length > characterLimit) {
      text = text.substr(0, characterLimit) + '\u2026'
    }
    return text
  }

  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowButton(true)
      } else {
        setShowButton(false)
      }
    })

    // Get modlist data from API
    getApiData()
  }, [])

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smoothly scrolling
    })
  }

  return (
    <>
      <Head>
        <title>Список модов | Pe3ep Modpack</title>
        <meta
          name="description"
          content="Список Minecraft модов из моего модпака."
        />
        <meta name="robots" content="index, follow" />
      </Head>
      <main>
        <div className="h-[30vh] bg-topography grid place-content-center">
          <h1 className="font-manrope font-bold text-2xl flex justify-center items-center">
            <CollectionIcon className="w-7 h-7 mr-2" />
            Список модов
          </h1>
        </div>
        <div className="h-12"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 max-w-[1600px] gap-4 w-[90vw] mx-auto">
          {modlist ? (
            modlist.map((item: any, index: Key) => (
              <div
                key={index}
                className="bg-neutral-800 p-4 rounded-lg shadow-lg flex flex-col justify-between">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-lg overflow-hidden">
                      <Image
                        src={item.icon}
                        width="64"
                        height="64"
                        blurDataURL={item.icon}
                        placeholder="blur"
                      />
                    </div>
                    <h1 className="font-manrope font-extrabold text-xl">
                      {item.name}
                    </h1>
                  </div>
                  <p className="group leading-5 font-inter text-neutral-300">
                    {turncateName(item.description)}
                  </p>
                </div>
                <div>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      className="transition py-2 px-4 flex justify-center items-center font-inter font-semibold text-black rounded-lg gap-1 bg-[#1bd96a] hover:bg-[#1bd96a]/75 ">
                      <div className="w-5 h-5">
                        <Image
                          src="/icons/modrinth.svg"
                          height="20"
                          width="20"
                        />
                      </div>
                      Modrinth
                    </a>
                  ) : (
                    ``
                  )}
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="border-neutral-800 border-2 p-4 rounded-lg flex flex-col justify-between">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="animate-pulse w-16 h-16 rounded-lg bg-neutral-800 overflow-hidden"></div>
                    <div className="animate-pulse h-9 w-48 rounded-lg bg-neutral-800"></div>
                  </div>
                  <div className="animate-pulse mt-2 h-5 w-72 rounded-lg bg-neutral-800"></div>
                </div>
                <div>
                  <a className="animate-pulse h-9 py-2 px-4 flex justify-center items-center font-inter font-semibold text-black rounded-lg gap-1 bg-neutral-800 "></a>
                </div>
              </div>
              <div className="border-neutral-800 border-2 p-4 rounded-lg flex flex-col justify-between">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="animate-pulse w-16 h-16 rounded-lg bg-neutral-800 overflow-hidden"></div>
                    <div className="animate-pulse h-9 w-48 rounded-lg bg-neutral-800"></div>
                  </div>
                  <div className="animate-pulse mt-2 h-5 w-72 rounded-lg bg-neutral-800"></div>
                </div>
                <div>
                  <a className="animate-pulse h-9 py-2 px-4 flex justify-center items-center font-inter font-semibold text-black rounded-lg gap-1 bg-neutral-800 "></a>
                </div>
              </div>
              <div className="border-neutral-800 border-2 p-4 rounded-lg flex flex-col justify-between">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="animate-pulse w-16 h-16 rounded-lg bg-neutral-800 overflow-hidden"></div>
                    <div className="animate-pulse h-9 w-48 rounded-lg bg-neutral-800"></div>
                  </div>
                  <div className="animate-pulse mt-2 h-5 w-72 rounded-lg bg-neutral-800"></div>
                </div>
                <div>
                  <a className="animate-pulse h-9 py-2 px-4 flex justify-center items-center font-inter font-semibold text-black rounded-lg gap-1 bg-neutral-800 "></a>
                </div>
              </div>
              <div className="border-neutral-800 border-2 p-4 rounded-lg flex flex-col justify-between">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="animate-pulse w-16 h-16 rounded-lg bg-neutral-800 overflow-hidden"></div>
                    <div className="animate-pulse h-9 w-48 rounded-lg bg-neutral-800"></div>
                  </div>
                  <div className="animate-pulse mt-2 h-5 w-72 rounded-lg bg-neutral-800"></div>
                </div>
                <div>
                  <a className="animate-pulse h-9 py-2 px-4 flex justify-center items-center font-inter font-semibold text-black rounded-lg gap-1 bg-neutral-800 "></a>
                </div>
              </div>
              <div className="border-neutral-800 border-2 p-4 rounded-lg flex flex-col justify-between">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="animate-pulse w-16 h-16 rounded-lg bg-neutral-800 overflow-hidden"></div>
                    <div className="animate-pulse h-9 w-48 rounded-lg bg-neutral-800"></div>
                  </div>
                  <div className="animate-pulse mt-2 h-5 w-72 rounded-lg bg-neutral-800"></div>
                </div>
                <div>
                  <a className="animate-pulse h-9 py-2 px-4 flex justify-center items-center font-inter font-semibold text-black rounded-lg gap-1 bg-neutral-800 "></a>
                </div>
              </div>
              <div className="border-neutral-800 border-2 p-4 rounded-lg flex flex-col justify-between">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="animate-pulse w-16 h-16 rounded-lg bg-neutral-800 overflow-hidden"></div>
                    <div className="animate-pulse h-9 w-48 rounded-lg bg-neutral-800"></div>
                  </div>
                  <div className="animate-pulse mt-2 h-5 w-72 rounded-lg bg-neutral-800"></div>
                </div>
                <div>
                  <a className="animate-pulse h-9 py-2 px-4 flex justify-center items-center font-inter font-semibold text-black rounded-lg gap-1 bg-neutral-800 "></a>
                </div>
              </div>
              <div className="border-neutral-800 border-2 p-4 rounded-lg flex flex-col justify-between">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="animate-pulse w-16 h-16 rounded-lg bg-neutral-800 overflow-hidden"></div>
                    <div className="animate-pulse h-9 w-48 rounded-lg bg-neutral-800"></div>
                  </div>
                  <div className="animate-pulse mt-2 h-5 w-72 rounded-lg bg-neutral-800"></div>
                </div>
                <div>
                  <a className="animate-pulse h-9 py-2 px-4 flex justify-center items-center font-inter font-semibold text-black rounded-lg gap-1 bg-neutral-800 "></a>
                </div>
              </div>
              <div className="border-neutral-800 border-2 p-4 rounded-lg flex flex-col justify-between">
                <div className="flex flex-col gap-2 mb-4">
                  <div className="flex gap-4 items-center">
                    <div className="animate-pulse w-16 h-16 rounded-lg bg-neutral-800 overflow-hidden"></div>
                    <div className="animate-pulse h-9 w-48 rounded-lg bg-neutral-800"></div>
                  </div>
                  <div className="animate-pulse mt-2 h-5 w-72 rounded-lg bg-neutral-800"></div>
                </div>
                <div>
                  <a className="animate-pulse h-9 py-2 px-4 flex justify-center items-center font-inter font-semibold text-black rounded-lg gap-1 bg-neutral-800 "></a>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="h-12"></div>
      </main>
      <AnimatePresence>
        {showButton && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.2 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="fixed bottom-0 left-0 right-0 m-4 flex justify-center items-center">
            <button
              onClick={scrollToTop}
              className="transition rounded-lg shadow-lg bg-neutral-700 flex justify-center items-center font-manrope font-bold py-2 px-4">
              <ArrowUpIcon className="h-5 w-5 mr-2" />
              Наверх
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default list
