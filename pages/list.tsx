import React from 'react'
import { CollectionIcon } from '@heroicons/react/solid'
import { ArrowUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'

const list = () => {
  function turncateName(text: string): string {
    const characterLimit = 80
    if (text.length > characterLimit) {
      text = text.substr(0, characterLimit) + '\u2026'
    }
    return text
  }
  const modlist = [
    {
      name: 'Sodium',
      description:
        'Modern rendering engine and client-side optimization mod for Minecraft.',
      icon: 'https://cdn-raw.modrinth.com//data/AANobbMI/icon.png',
      link: 'https://modrinth.com/mod/sodium',
    },
    {
      name: 'Lithium',
      description: 'No-compromises game logic/server optimization mod.',
      icon: 'https://cdn.modrinth.com/data/gvQqBUqZ/icon.png',
      link: 'https://modrinth.com/mod/lithium',
    },
    {
      name: 'Mod Menu',
      description:
        'Adds a mod menu to view the list of mods you have installed.',
      icon: 'https://cdn.modrinth.com/data/mOgUt4GM/icon.png',
      link: 'https://modrinth.com/mod/modmenu',
    },
    {
      name: 'ReplayMod',
      description:
        'A Minecraft Mod to record, relive and share your experience.',
      icon: 'https://cdn.modrinth.com/data/Nv2fQJo5/icon.png',
      link: 'https://modrinth.com/mod/replaymod',
    },
    {
      name: 'Capes',
      description:
        'Lets you use capes from OptiFine, LabyMod and other cape mods.',
      icon: 'https://cdn.modrinth.com/data/89Wsn8GD/icon.png',
      link: 'https://modrinth.com/mod/capes',
    },
    {
      name: 'Dynamic FPS',
      description: 'Improve performance when Minecraft is in the background.',
      icon: 'https://cdn.modrinth.com/data/LQ3K71Q1/icon.png',
      link: 'https://modrinth.com/mod/dynamic-fps',
    },
    {
      name: 'Iris',
      description:
        'A modern shaders mod for Minecraft intended to be compatible with existing OptiFine shader packs.',
      icon: 'https://cdn.modrinth.com/data/YL57xq9U/icon.webp',
      link: 'https://modrinth.com/mod/iris',
    },
    {
      name: 'Enhanced Block Entities',
      description:
        'Reduce FPS lag with block entities, as well as customize them with resource packs.',
      icon: 'https://cdn.modrinth.com/data/OVuFYfre/icon.png',
      link: 'https://modrinth.com/mod/ebe',
    },
    {
      name: 'No Chat Reports',
      description: 'Makes chat unreportable (where possible).',
      icon: 'https://cdn.modrinth.com/data/qQyHxfxd/icon.png',
      link: 'https://modrinth.com/mod/no-chat-reports',
    },
    {
      name: 'AdvancementInfo',
      description: 'Show more information about advancement requirements.',
      icon: 'https://cdn.modrinth.com/data/G1epq3jN/icon.png',
      link: 'https://modrinth.com/mod/advancementinfo',
    },
    {
      name: 'Animatica',
      description:
        'A mod implementing the OptiFine/MCPatcher animated texture format.',
      icon: 'https://cdn.modrinth.com/data/PRN43VSY/icon.png',
      link: 'https://modrinth.com/mod/animatica',
    },
    {
      name: 'AntiGhost',
      description:
        'Get rid of ghost blocks by requesting resends from the server.',
      icon: 'https://cdn.modrinth.com/data/Jw3Wx1KR/icon.png',
      link: 'https://modrinth.com/mod/antighost',
    },
    {
      name: 'Auditory',
      description:
        'A mod that expands and improves upon the sound and audio aspects of Minecraft.',
      icon: 'https://cdn.modrinth.com/data/1LjfkWOR/icon.png',
      link: 'https://modrinth.com/mod/auditory',
    },
    {
      name: 'Better Mount HUD',
      description: 'Improves the ingame HUD while riding a mount.',
      icon: 'https://cdn.modrinth.com/data/kqJFAPU9/icon.png',
      link: 'https://modrinth.com/mod/better-mount-hud',
    },
    {
      name: 'CIT Resewn',
      description:
        "Re-implements MCPatcher's CIT (custom item textures from optifine resource packs).",
      icon: 'https://cdn.modrinth.com/data/otVJckYQ/icon.png',
      link: 'https://modrinth.com/mod/cit-resewn',
    },
    {
      name: 'Colormatic',
      description:
        'Enables resource packs to add and change block and biome colors.',
      icon: 'https://cdn.modrinth.com/data/V4IQxkZC/icon.png',
      link: 'https://modrinth.com/mod/colormatic',
    },
    {
      name: 'Continuity',
      description: 'A Fabric mod that allows for efficient connected textures.',
      icon: 'https://cdn.modrinth.com/data/1IjD5062/icon.png',
      link: 'https://modrinth.com/mod/continuity',
    },
    {
      name: 'CrashBrander',
      description:
        'Small mod which adds your (modpack) branding to crash reports, useful for debugging.',
      icon: 'https://cdn.modrinth.com/data/C9eIZ8sb/icon.png',
      link: 'https://modrinth.com/mod/crashbrander',
    },
    {
      name: 'Cull Less Leaves',
      description: 'Cull leaves while looking hot.',
      icon: 'https://cdn.modrinth.com/data/iG6ZHsUV/icon.png',
      link: 'https://modrinth.com/mod/cull-less-leaves',
    },
    {
      name: 'Custom Entity Models',
      description: 'Custom Entity Models suport on Fabric.',
      icon: 'https://cdn.modrinth.com/data/YOQCucah/icon.png',
      link: 'https://modrinth.com/mod/cem',
    },
    {
      name: 'Custom Entity Models',
      description: 'Custom Entity Models suport on Fabric.',
      icon: 'https://cdn.modrinth.com/data/YOQCucah/icon.png',
      link: 'https://modrinth.com/mod/cem',
    },
  ]

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
          {modlist.map((item, index) => (
            <div
              key={index}
              className="bg-neutral-800 p-4 rounded-lg shadow-lg flex flex-col justify-between">
              <div className="flex flex-col gap-2 mb-2">
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
                <a href={item.link} target="_blank">
                  <button className="transition py-2 px-4 flex justify-center items-center font-inter font-semibold text-black rounded-lg gap-1 bg-[#1bd96a] hover:bg-[#1bd96a]/75 ">
                    <div className="w-5 h-5">
                      <Image
                        src="/icons/modrinth.svg"
                        height="20"
                        width="20"
                        blurDataURL="/icons/modrinth.svg"
                        placeholder="blur"
                      />
                    </div>
                    Modrinth
                  </button>
                </a>
              </div>
            </div>
          ))}
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
