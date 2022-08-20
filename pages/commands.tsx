import { HashtagIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import React from 'react'

const commandList = [
  {
    command: '!sens',
    description: 'Моя чуствительность в VALORANT',
    response: {
      authour: 'Pe3epWithYou',
      authourBadge: <img src="/badges/streamer.png" className="h-5 w-5" />,
      bot: 'Nightbot',
      botBadge: <img src="/badges/verified.png" className="h-5 w-5" />,
      botResponse: '@Pe3epWithYou 0.2 800 DPI / скоп 1.0 ',
    },
  },
  {
    command: '!crosshair',
    description: 'Мой прицел в VALORANT',
    response: {
      authour: 'Pe3epWithYou',
      authourBadge: <img src="/badges/streamer.png" className="h-5 w-5" />,
      bot: 'Nightbot',
      botBadge: <img src="/badges/verified.png" className="h-5 w-5" />,
      botResponse: '@Pe3epWithYou *код прицела* ',
    },
  },
  {
    command: '!rank',
    description: 'Мой текущий ранг в VALORANT',
    response: {
      authour: 'Pe3epWithYou',
      authourBadge: <img src="/badges/streamer.png" className="h-5 w-5" />,
      bot: 'Nightbot',
      botBadge: <img src="/badges/verified.png" className="h-5 w-5" />,
      botResponse: '@Pe3epWithYou Мэйн: Алмаз 1 / Альт: без ранга ',
    },
  },
  {
    command: '!discord',
    description: 'Ссылка на мой Disocrd сервер.',
    response: {
      authour: 'Pe3epWithYou',
      authourBadge: <img src="/badges/streamer.png" className="h-5 w-5" />,
      bot: 'Nightbot',
      botBadge: <img src="/badges/verified.png" className="h-5 w-5" />,
      botResponse:
        '@Pe3epWithYou Ссылка на мой дискорд чат: https://pe3ep.ru/discord ',
    },
  },
  {
    command: '!emotes',
    description:
      'Ссылка на страницу для скачивания расширений для эмоутов в чате.',
    response: {
      authour: 'Pe3epWithYou',
      authourBadge: <img src="/badges/streamer.png" className="h-5 w-5" />,
      bot: 'Nightbot',
      botBadge: <img src="/badges/verified.png" className="h-5 w-5" />,
      botResponse:
        '@Pe3epWithYou Расширения для браузера, а также приложение для андройд для наикрутейших смайлов можно найти сдесь: https://pe3ep.ru/emotes',
    },
  },
  {
    command: '!rules',
    description: 'Правила моего чата и Discord сервера',
    response: {
      authour: 'Pe3epWithYou',
      authourBadge: <img src="/badges/streamer.png" className="h-5 w-5" />,
      bot: 'Nightbot',
      botBadge: <img src="/badges/verified.png" className="h-5 w-5" />,
      botResponse:
        '@Pe3epWithYou Правила моего чата находятся на моём сайте: https://pe3ep.ru/rules',
    },
  },
  {
    command: '!commands',
    description: 'Ссылка на эту страницу',
    response: {
      authour: 'Pe3epWithYou',
      authourBadge: <img src="/badges/streamer.png" className="h-5 w-5" />,
      bot: 'Nightbot',
      botBadge: <img src="/badges/verified.png" className="h-5 w-5" />,
      botResponse:
        '@Pe3epWithYou Список и описание моих команд наглядно: https://pe3ep.ru/commands',
    },
  },
]

const commands = () => {
  return (
    <>
      <Head>
        <title>Команды | Pe3ep</title>
      </Head>

      <div className="h-52 grid place-content-center bg-topography">
        <div className="flex items-center">
          <HashtagIcon className="h-8 w-8 md:h-10 md:w-10 mr-2" />
          <h1 className="font-manrope font-bold text-3xl lg:text-4xl">
            Команды
          </h1>
        </div>
      </div>
      <div className="h-12"></div>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1800px] mx-auto">
        {commandList.map((item, index) => (
          <div
            key={index}
            className="p-4 border-2 border-neutral-800 shadow-lg m-2 rounded-lg flex flex-col justify-between">
            <div className="">
              <h1 className="font-manrope font-bold text-3xl">
                {item.command}
              </h1>
              <p className="font-inter text-neutral-400">{item.description}</p>
            </div>
            <div className="mt-4 p-4 h-full bg-black/20 rounded-lg flex flex-col gap-1">
              <p className="font-inter flex items-center text-neutral-300">
                <span className="mr-1">{item.response.authourBadge}</span>
                <span className="text-amber-500 font-semibold">
                  {item.response.authour}
                </span>
                : {item.command}
              </p>
              <p className="font-inter">
                <span className="flex items-center">
                  <span className="mr-1">{item.response.botBadge}</span>
                  <span className="text-indigo-700 font-semibold">
                    {item.response.bot}:
                  </span>
                </span>
                {item.response.botResponse}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default commands
