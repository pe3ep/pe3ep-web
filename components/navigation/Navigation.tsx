import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuButton from './MenuButton'
import { motion } from 'framer-motion'

const menu = [
  { title: 'Главная', path: '/' },
  { title: 'Правила', path: '/rules', altPath: '/rules/discord' },
  { title: 'Эмоуты', path: '/emotes' },
  { title: 'Команды', path: '/commands' },
  { title: 'Сборка', path: 'https://mods.pe3ep.ru/' },
]

const Navigation = ({ children }: any) => {
  const router = useRouter()
  const [small, setSmall] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', () =>
        setSmall(window.pageYOffset > 100)
      )
    }
  }, [])

  return (
    <>
      <header
        className={`transition fixed w-full z-50 border-b-2 border-transparent text-gray-50  font-medium  ${
          small ? 'bg-black/25 backdrop-blur-md border-b-2 border-zinc-800' : ''
        }`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-8 lg:justify-start lg:space-x-10 select-none">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <motion.a
                  whileTap={{
                    scale: 0.85,
                    transition: { duration: 0.05, ease: 'easeInOut' },
                  }}
                  className="focus:outline-none focus-visible:ring focus-visible:ring-red-500 rounded-md transition overflow-hidden">
                  <img src="/logo.png" className="h-10 w-auto" />
                </motion.a>
              </Link>
            </div>
            <MenuButton />
            <nav className="hidden md:flex gap-2">
              {menu.map((item, index) => {
                return (
                  <Link key={index} href={item.path}>
                    <a
                      className={`transition cursor-pointer px-6 py-3 rounded-lg ${
                        router.pathname === item.path
                          ? 'text-red-500 bg-zinc-900'
                          : 'hover:bg-zinc-900'
                      } ${
                        router.pathname === item.altPath
                          ? 'text-red-500 bg-zinc-900'
                          : 'hover:bg-zinc-900'
                      }`}>
                      {item.title}
                    </a>
                  </Link>
                )
              })}
            </nav>
          </div>
        </div>
      </header>
      {children}
    </>
  )
}

export default Navigation
