import React from 'react'
import PageIntro from '../../components/PageIntro'
import BookOpen from '../../public/static/emoji/book_open.png'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'

const index = () => {
  return (
    <>
      <Head>
        <title>Правила</title>
        <meta
          name="description"
          content="Правила моего Twitch и Discord сервера."
        />

        <meta itemProp="name" content="Правила" />
        <meta
          itemProp="description"
          content="Правила моего Twitch и Discord сервера."
        />
        <meta
          itemProp="image"
          content="https://media.discordapp.net/attachments/999632713189425152/1017374160114163722/1c075e19175d498f.png?width=1609&height=905"
        />

        <meta property="og:url" content="https://www.pe3ep.ru/rules/discord" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Правила" />
        <meta
          property="og:description"
          content="Правила моего Twitch и Discord сервера."
        />
        <meta
          property="og:image"
          content="https://media.discordapp.net/attachments/999632713189425152/1017374160114163722/1c075e19175d498f.png?width=1609&height=905"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Правила" />
        <meta
          name="twitter:description"
          content="Правила моего Twitch и Discord сервера."
        />
        <meta
          name="twitter:image"
          content="https://media.discordapp.net/attachments/999632713189425152/1017374160114163722/1c075e19175d498f.png?width=1609&height=905"
        />
      </Head>
      <PageIntro
        name="Правила"
        icon={BookOpen}
        blurDataURL="/static/emoji/book_open.png"
      />
      <main>
        <div className="py-12 flex justify-center gap-3">
          <Link href="/rules">
            <a className="transition flex items-center gap-2 py-3 px-6 rounded-lg hover:bg-zinc-900">
              <svg
                viewBox="0 0 2400 2800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7">
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
            </a>
          </Link>
          <Link href="/rules/discord">
            <a className="transition flex items-center gap-2 py-3 px-6 rounded-lg bg-zinc-800">
              <svg
                viewBox="0 0 71 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7">
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
            </a>
          </Link>
        </div>
        <div className="bg-zinc-900/50 py-8">
          <div className="container mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16">
                <Image src="/static/emoji/pin.png" height={64} width={64} />
              </div>
            </div>
            <div className="flex mx-8 md:mx-auto flex-col gap-3 text-center max-w-3xl">
              <p className="font-inter leading-5 lg:text-lg">
                Буллинг запрещён. Мы хотим быть спокойным местом для всех.
              </p>
              <p className="font-inter leading-5 lg:text-lg">
                Реклама запрещена, за исключением отдельного канала #💸〢реклама
              </p>
              <p className="font-inter leading-5 lg:text-lg">
                Доксинг (doxx) запрещён.
              </p>
              <p className="font-inter leading-5 lg:text-lg">
                Mini-Mod (или модерирование когда вы не являетесь модератором)
                запрещёно.
              </p>
              <p className="font-inter leading-5 lg:text-lg">
                Запрещено нарушение условий обслуживания Discord.
              </p>
              <p className="font-inter leading-5 lg:text-lg">
                Запрещен обход ограничений, наложенных на пользователя.
              </p>
              <p className="font-inter font-bold leading-5 lg:text-lg">
                Запрещено нарушение условий обслуживания Twitch.
              </p>
              <p className="font-inter leading-5 lg:text-lg">
                Запрещено использование символов, искусственно повышающих
                приоритет в сортировке.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-900/25 py-8 mb-12">
          <div className="container mx-auto">
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16">
                <Image
                  src="/static/emoji/red_exclamation.png"
                  height={64}
                  width={64}
                />
              </div>
            </div>
            <div className="flex mx-8 md:mx-auto flex-col gap-3 text-center max-w-3xl">
              <p className="leading-5 lg:text-lg">
                Данные правила распространяются на весь контент, находящийся и
                распространяемый через Discord сервер, в том числе и на контент,
                размещённный на сторонних ресурсах в любом виде. Модератор
                самостоятельно выбирает, что выдать нарушителю за нарушение
                правил: от удаления сообщения до перманентного бана. Также
                модератор имеет право отстранить пользователя по причине, не
                указанной в правилах.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default index
