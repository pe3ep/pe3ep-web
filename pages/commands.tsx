import { HashtagIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import React, { useState, useEffect } from 'react'
import PageIntro from '../components/PageIntro'
import Plug from '../public/static/emoji/plug.png'

const commands = () => {
  const [commandList, setCommands]: any = useState()

  const getApiData = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    }
    const response = await fetch(
      'https://pe3ep.ru/data/commands.json',
      requestOptions
    )
      .then((response) => response.json())
      .catch((e) => console.log(e))

    setCommands(response)
  }

  useEffect(() => {
    getApiData()
  }, [])
  return (
    <>
      <Head>
        <title>Команды | Pe3ep</title>
      </Head>

      <PageIntro
        name="Команды"
        icon={Plug}
        blurDataURL="/static/emoji/plug.png"
      />
      <div className="h-12"></div>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1800px] mx-auto">
        {commandList ? (
          commandList.map((item: any, index: any) => (
            <div
              key={index}
              className="p-4 border-2 border-neutral-800 bg-zinc-900 shadow-lg m-2 rounded-lg flex flex-col justify-between">
              <div className="">
                <h1 className="font-manrope font-bold text-3xl">
                  {item.command}
                </h1>
                <p className="font-inter text-neutral-400">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 p-4 h-full bg-black/20 rounded-lg flex flex-col gap-1">
                <p className="font-inter flex items-center text-neutral-300">
                  <span className="mr-1">
                    <img src={item.response.authourBadge} alt="" />
                  </span>
                  <span className="text-amber-500 font-semibold">
                    {item.response.authour}
                  </span>
                  : {item.command}
                </p>
                <p className="font-inter">
                  <span className="flex items-center">
                    <span className="mr-1">
                      <img src={item.response.botBadge} alt="" />
                    </span>
                    <span className="text-indigo-700 font-semibold">
                      {item.response.bot}:
                    </span>
                  </span>
                  {item.response.botResponse}
                </p>
              </div>
            </div>
          ))
        ) : (
          <>
            <div className="p-4 border-2 border-neutral-900 m-2 rounded-lg flex flex-col justify-between">
              <div className="">
                <div className="h-14 w-[40%] animate-pulse rounded-lg bg-neutral-900 font-manrope font-bold text-3xl mb-4"></div>
                <p className="h-7 animate-pulse rounded-lg bg-neutral-900 font-inter text-neutral-400"></p>
              </div>
              <div className="mt-4 p-4 h-full border-2 border-neutral-900 rounded-lg flex flex-col gap-1">
                <p className="h-7 w-[70%] animate-pulse rounded-lg bg-neutral-900 font-inter flex items-center text-neutral-300 mb-2"></p>
                <p className="h-7 animate-pulse rounded-lg bg-neutral-900 font-inter">
                  <span className="flex items-center">
                    <span className="mr-1"></span>
                    <span className="text-indigo-700 font-semibold"></span>
                  </span>
                </p>
              </div>
            </div>
            <div className="p-4 border-2 border-neutral-900 m-2 rounded-lg flex flex-col justify-between">
              <div className="">
                <div className="h-14 w-[40%] animate-pulse rounded-lg bg-neutral-900 font-manrope font-bold text-3xl mb-4"></div>
                <p className="h-7 animate-pulse rounded-lg bg-neutral-900 font-inter text-neutral-400"></p>
              </div>
              <div className="mt-4 p-4 h-full border-2 border-neutral-900 rounded-lg flex flex-col gap-1">
                <p className="h-7 w-[70%] animate-pulse rounded-lg bg-neutral-900 font-inter flex items-center text-neutral-300 mb-2"></p>
                <p className="h-7 animate-pulse rounded-lg bg-neutral-900 font-inter">
                  <span className="flex items-center">
                    <span className="mr-1"></span>
                    <span className="text-indigo-700 font-semibold"></span>
                  </span>
                </p>
              </div>
            </div>
            <div className="p-4 border-2 border-neutral-900 m-2 rounded-lg flex flex-col justify-between">
              <div className="">
                <div className="h-14 w-[40%] animate-pulse rounded-lg bg-neutral-900 font-manrope font-bold text-3xl mb-4"></div>
                <p className="h-7 animate-pulse rounded-lg bg-neutral-900 font-inter text-neutral-400"></p>
              </div>
              <div className="mt-4 p-4 h-full border-2 border-neutral-900 rounded-lg flex flex-col gap-1">
                <p className="h-7 w-[70%] animate-pulse rounded-lg bg-neutral-900 font-inter flex items-center text-neutral-300 mb-2"></p>
                <p className="h-7 animate-pulse rounded-lg bg-neutral-900 font-inter">
                  <span className="flex items-center">
                    <span className="mr-1"></span>
                    <span className="text-indigo-700 font-semibold"></span>
                  </span>
                </p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default commands
