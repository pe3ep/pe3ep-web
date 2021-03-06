import type { NextPage } from 'next'
import SocButton from '../components/SocButton'
import Head from 'next/head'
import Image from 'next/image'

const skills = [
  {
    name: 'Javascript',
    icon: 'js.png',
    description:
      'Полноценный динамический язык программирования, который применяется к HTML документу, и может обеспечить динамическую интерактивность на веб-сайтах.',
  },
  {
    name: 'Typescript',
    icon: 'ts.png',
    description:
      'Язык программирования, представленный Microsoft в 2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript.',
  },
  {
    name: 'nextJS',
    icon: 'next.png',
    description:
      'Фреймворк, основанный на React, который позволяет создавать веб-приложения с улучшенной производительностью и улучшенным пользовательским опытом с помощью дополнительных функций предварительного рендеринга.',
  },
  {
    name: 'Tailwindcss',
    icon: 'tailwind.png',
    description:
      'CSS-библиотека, которая упрощает стилизацию HTML, тем же путем, как это делает Bootstrap, – добавляя огромное количество разнообразных классов.',
  },
  {
    name: 'HTML',
    icon: 'html.png',
    description:
      'Язык гипертекстовой разметки — стандартизированный язык разметки документов во Всемирной паутине.',
  },
  {
    name: 'CSS',
    icon: 'css.png',
    description:
      'Язык описания внешнего вида документа, написанного с использованием языка разметки.',
  },
]

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная | Pe3ep</title>
      </Head>
      <main>
        <div className="h-screen bg-topography grid place-items-center">
          <div className="max-w-xs flex flex-col gap-8 md:max-w-lg lg:max-w-5xl">
            <div className="">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-manrope font-bold mb-2">
                Меня зовут{' '}
                <span className="bg-gradient-to-tl from-red-500 to-red-400 bg-clip-text text-transparent">
                  Резер.
                </span>
              </h1>
              <p className="font-inter text-neutral-400">
                Начинающий стример и web-разработчик.
              </p>
            </div>
            <div className="grid gap-2 grid-cols-2 grid-flow-row md">
              <SocButton
                href="/twitch"
                className="bg-purple-600 hover:bg-purple-700">
                <svg
                  viewBox="0 0 2400 2800"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-6 w-6">
                  <path
                    d="M500 0L0 500V2300H600V2800L1100 2300H1500L2400 1400V0H500ZM2200 1300L1800 1700H1400L1050 2050V1700H600V200H2200V1300Z"
                    fill="currentColor"></path>
                  <path
                    d="M1900 550H1700V1150H1900V550Z"
                    fill="currentColor"></path>
                  <path
                    d="M1350 550H1150V1150H1350V550Z"
                    fill="currentColor"></path>
                </svg>
                Twitch
              </SocButton>
              <SocButton
                href="/github"
                className="bg-zinc-800 hover:bg-neutral-800">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  version="1.1"
                  fill="white"
                  data-view-component="true"
                  className="mr-2 h-6 w-6">
                  <path
                    fillRule="evenodd"
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                Github
              </SocButton>
              <SocButton
                href="/discord"
                className="bg-indigo-600 hover:bg-indigo-700">
                <svg
                  viewBox="0 0 71 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2 h-5 w-5">
                  <g clipPath="url(#clip0)">
                    <path
                      d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
                      fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="71" height="55" fill="currentColor"></rect>
                    </clipPath>
                  </defs>
                </svg>
                Discord
              </SocButton>
              <SocButton
                href="/donate"
                className="bg-orange-400 hover:bg-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 17 20">
                  <g fill="#FFF" fillRule="nonzero">
                    <path d="M8.588 11.562H7.253a.288.288 0 0 1-.204-.08.233.233 0 0 1-.07-.192l.118-1.213c.011-.129.13-.228.274-.228h1.335c.078 0 .152.03.205.081a.233.233 0 0 1 .07.192l-.118 1.213c-.012.129-.131.228-.275.227zM8.802 9.188h-1.36a.268.268 0 0 1-.272-.264l.37-4.098a.27.27 0 0 1 .272-.232h1.36c.15 0 .272.118.272.264l-.38 4.1a.27.27 0 0 1-.262.23z"></path>
                    <path d="M16.8 4.441L13.279.293A.827.827 0 0 0 12.647 0H2.095a.832.832 0 0 0-.827.752L.003 15.3a.841.841 0 0 0 .215.638c.158.173.38.271.612.27h2.073L2.587 20l4.075-3.788h4.628a.826.826 0 0 0 .579-.235l4.348-4.259a.84.84 0 0 0 .248-.528l.532-6.132a.841.841 0 0 0-.196-.617zm-3.222 5.579a.84.84 0 0 1-.248.531l-2.517 2.417a.826.826 0 0 1-.574.23H4.083a.837.837 0 0 1-.61-.273.851.851 0 0 1-.218-.635l.746-8.517a.832.832 0 0 1 .827-.752h6.26c.241 0 .47.105.627.288l1.987 2.315a.84.84 0 0 1 .214.611l-.338 3.785z"></path>
                  </g>
                </svg>
                Donate
              </SocButton>
            </div>
          </div>
        </div>
        <div>
          <div className="h-12"></div>
          <div className="mx-4">
            <h1 className="font-manrope font-bold text-3xl text-center mb-8">
              Навыки
            </h1>
            <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1800px] mx-auto">
              {skills.map((item, index) => (
                <div
                  key={index}
                  className="border-2 flex flex-col gap-2 border-neutral-800 shadow-lg rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <h1 className="font-manrope font-bold text-xl">
                      {item.name}
                    </h1>
                    <div className="rounded-md overflow-hidden h-12 w-12">
                      <Image
                        src={`/langs/${item.icon}`}
                        width="48"
                        height="48"
                        blurDataURL={`/langs/${item.icon}`}
                        placeholder="blur"
                        objectFit="contain"
                      />
                    </div>
                  </div>
                  <p className="font-inter leading-5 text-neutral-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="h-12"></div>
        </div>
      </main>
    </>
  )
}

export default Home
