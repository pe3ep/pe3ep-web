import Image from 'next/image'
import React from 'react'
import { DownloadIcon } from '@heroicons/react/outline'

const emotes = () => {
  return (
    <div>
      <div className="h-52 grid place-content-center bg-topography">
        <h1 className="font-manrope font-bold text-3xl lg:text-4xl">Эмоуты</h1>
      </div>
      <div className="h-12 bg-neutral-900"></div>
      <div className="max-w-5xl mx-auto flex flex-col justify-center px-2">
        <h1 className="text-center mb-4 font-manrope font-bold text-xl md:text-2xl">
          Браузеры
        </h1>
        <div className="grid grid-rows-2 md:grid-cols-2 md:grid-rows-none gap-4">
          <div className="border-2 border-neutral-800 rounded-lg p-4 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <Image
                src="/chrome.svg"
                width="64"
                height="64"
                blurDataURL="/chrome.svg"
                placeholder="blur"
              />
              <div>
                <h1 className="font-manrope font-bold text-xl text-center">
                  Google Chrome
                </h1>
                <p className="font-inter leading-5 text-neutral-400 text-center">
                  Работает на всех браузерах на Chromium: Opera, Yandex Browser,
                  Microsoft Edge, Brave и т.д.
                </p>
              </div>
            </div>
            <a
              href="https://chrome.google.com/webstore/detail/7tv/ammjkodgmmoknidbanneddgankgfejfh?hl=ru-RU"
              className="flex items-center transition mt-4 bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg font-inter">
              <DownloadIcon className="h-5 w-5 mr-2" />
              Загрузить расширение
            </a>
          </div>
          <div className="border-2 border-neutral-800 rounded-lg p-4 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <Image
                src="/firefox.svg"
                width="64"
                height="64"
                blurDataURL="/firefox.svg"
                placeholder="blur"
              />
              <div>
                <h1 className="font-manrope font-bold text-xl text-center">
                  Firefox
                </h1>
                <p className="font-inter leading-5 text-neutral-400 text-center">
                  Работает только на Firefox
                </p>
              </div>
            </div>
            <a
              href="https://addons.mozilla.org/ru/firefox/addon/7tv/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search"
              className="flex items-center transition bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg font-inter">
              <DownloadIcon className="h-5 w-5 mr-2" />
              Загрузить расширение
            </a>
          </div>
        </div>
      </div>
      <div className="h-12"></div>
      <div className="max-w-5xl mx-auto flex flex-col justify-center px-2">
        <h1 className="text-center mb-4 font-manrope font-bold text-xl md:text-2xl">
          Смартфоны
        </h1>
        <div className="flex justify-center">
          <div className="border-2 border-neutral-800 rounded-lg p-4 flex flex-col justify-between lg:max-w-lg">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 12a12 12 0 1 1-24 0 12 12 0 0 1 24 0ZM13.33 8.6l7 7h-3.12l-5.24-5.24-1.26 1.26 3.99 3.98h-3.13l-2.42-2.42-2.42 2.42H3.6l7-7c.48-.48.72-.72 1-.8a1.2 1.2 0 0 1 .75 0c.27.08.5.32.98.8Z"></path>
                </svg>
              </div>

              <div>
                <h1 className="font-manrope font-bold text-xl text-center">
                  Frosty
                </h1>
                <p className="font-inter leading-5 text-neutral-400 text-center">
                  Мод на официальный клиент Twitch с поддержкой 7tv, BTTV и FFZ
                  эмоутов.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="https://apps.apple.com/us/app/frosty-for-twitch/id1603987585"
                className="flex items-center transition mt-4 bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg font-inter">
                <DownloadIcon className="h-5 w-5 mr-2" />
                Загрузить IOS
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.tommychow.frosty&hl=ru&gl=US"
                className="flex items-center transition bg-neutral-700 hover:bg-neutral-600 p-2 rounded-lg font-inter">
                <DownloadIcon className="h-5 w-5 mr-2" />
                Загрузить Andriod
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12"></div>
    </div>
  )
}

export default emotes
