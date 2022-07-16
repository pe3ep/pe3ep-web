import React, { Fragment } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import {
  MenuIcon,
  BookOpenIcon,
  HomeIcon,
  MapIcon,
} from '@heroicons/react/solid'

const MenuButton = () => {
  return (
    <div className="md:hidden ">
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
          <Menu.Items className="absolute right-0 left-0 m-2 mt-4 p-2 rounded-lg flex gap-2 flex-col bg-neutral-900 border-2 border-neutral-700 ">
            <Menu.Item>
              {({ active }) => (
                <div className="flex items-center gap-1 flex-col py-4">
                  <MapIcon className="h-8 w-8" />
                  <h1 className="font-manrope text-xl font-bold">Меню</h1>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex items-center bg-neutral-800 rounded-md p-2">
                  <HomeIcon className="h-5 w-5 mr-2" />
                  <Link href="/">
                    <a>Главная</a>
                  </Link>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div className="flex items-center bg-neutral-800 rounded-md p-2">
                  <BookOpenIcon className="h-5 w-5 mr-2" />
                  <Link href="/rules">
                    <a>Правила</a>
                  </Link>
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default MenuButton
