import React, { Fragment, forwardRef } from 'react'
import Link from 'next/link'
import { Menu, Transition } from '@headlessui/react'
import {
  MenuIcon,
  BookOpenIcon,
  HomeIcon,
  MapIcon,
  EmojiHappyIcon,
  HashtagIcon,
} from '@heroicons/react/solid'

const menu = [
  {
    title: 'Главная',
    path: '/',
    icon: <HomeIcon className="h-5 w-5 mr-2" />,
  },
  {
    title: 'Правила',
    path: '/rules',
    icon: <BookOpenIcon className="h-5 w-5 mr-2" />,
  },
  {
    title: 'Эмоуты',
    path: '/emotes',
    icon: <EmojiHappyIcon className="h-5 w-5 mr-2" />,
  },
  {
    title: 'Команды',
    path: '/commands',
    icon: <HashtagIcon className="h-5 w-5 mr-2" />,
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
            <Menu.Items className="absolute shadow-2xl right-0 left-0 mx-4 mt-12 p-4 rounded-lg flex gap-4 flex-col bg-zinc-900 ">
              {menu.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <MyLink href={item.path}>
                      <a className="flex items-center bg-neutral-800 rounded-lg p-4">
                        {item.icon}
                        {item.title}
                      </a>
                    </MyLink>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </>
  )
}

export default MenuButton
