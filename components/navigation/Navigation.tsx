import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import MenuButton from './MenuButton'

const menu = [
  { title: 'Главная', path: '/' },
  { title: 'Правила', path: '/rules' },
  { title: 'Эмоуты', path: '/emotes' },
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
        className={`fixed w-full z-50 transition border-b-2 border-transparent text-gray-50 font-manrope font-bold  ${
          small
            ? 'bg-black/25 backdrop-blur-sm border-b-2 border-stone-800 '
            : ''
        }`}>
        <div className="container mx-auto px-3">
          <div className="flex justify-between items-center py-4 lg:justify-start lg:space-x-10 select-none">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link href="/">
                <a className="focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-md transition hover:opacity-80 overflow-hidden">
                  <img src="/logo.png" className="h-10 w-auto" />
                </a>
              </Link>
            </div>
            <MenuButton />
            <nav className="hidden md:flex space-x-4 xl:space-x-8">
              {menu.map((item, index) => {
                return (
                  <Link key={index} href={item.path}>
                    <a
                      className={`cursor-pointer ${
                        router.pathname === item.path
                          ? 'text-red-500 after:bg-red-500 after:block after:w-full after:rounded-lg after:h-[3px] after:-mb-4 after:mt-[14px]'
                          : 'hover:text-red-500 transition-colors'
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
