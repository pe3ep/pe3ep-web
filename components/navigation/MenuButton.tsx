import React, { Fragment, useState, forwardRef } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import { MenuIcon, MapIcon, HomeIcon } from '@heroicons/react/solid'
import { CollectionIcon } from '@heroicons/react/outline'

const menu = [
  {
    title: 'Модпак',
    path: '/',
    icon: <HomeIcon className="h-5 w-5 mr-2" />,
  },
  {
    title: 'Список модов',
    path: '/list',
    icon: <CollectionIcon className="h-5 w-5 mr-2" />,
  },
]

const MyLink: any = forwardRef((props, ref) => {
  let { href, children, ...rest }: any = props
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  )
})

const MenuButton = () => {
  return (
    <>
      <div className="md:hidden">
        <Menu>
          <Menu.Button className="p-2 bg-red-500 rounded-md">
            <MenuIcon className="h-5 w-5 text-white" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100 origin-top-right"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75 origin-top-right"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="absolute shadow-lg right-0 left-0 m-2 mt-4 p-2 rounded-lg flex gap-2 flex-col bg-neutral-900 border-2 border-neutral-700 ">
              <Menu.Item>
                <div className="flex items-center gap-1 flex-col py-4">
                  <MapIcon className="h-8 w-8" />
                  <h1 className="font-manrope text-xl font-bold">Меню</h1>
                </div>
              </Menu.Item>
              {menu.map((item, index) => (
                <Menu.Item key={index}>
                  <MyLink href={item.path}>
                    <a className="flex items-center bg-neutral-800 rounded-md p-2">
                      {item.icon}
                      {item.title}
                    </a>
                  </MyLink>
                </Menu.Item>
              ))}
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="https://pe3ep.ru"
                    className="flex items-center justify-center">
                    <button className="py-2 px-4 rounded-md bg-red-500 text-white font-manrope font-extrabold">
                      На основной сайт
                    </button>
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}

export default MenuButton
