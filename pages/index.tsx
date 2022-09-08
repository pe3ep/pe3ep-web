import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Head from 'next/head'

const index = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1.5,
        staggerChildren: 0.25,
      },
    },
  }
  const item = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
  }

  const socialsList = [
    {
      title: 'Twitch',
      icon: '/static/emoji/clapper_board.png',
      color: 'bg-purple-500/25',
      link: 'https://www.pe3ep.ru/twitch',
    },
    {
      title: 'Telegram',
      icon: '/static/emoji/airplane.png',
      color: 'bg-sky-500/25',
      link: 'https://www.pe3ep.ru/tg',
    },
    {
      title: 'Discord',
      icon: '/static/emoji/speaker.png',
      color: 'bg-violet-500/25',
      link: 'https://www.pe3ep.ru/discord',
    },
    {
      title: 'DonationAlerts',
      icon: '/static/emoji/money.png',
      color: 'bg-orange-500/25',
      link: 'https://www.pe3ep.ru/donate',
    },
    {
      title: 'Github',
      icon: '/static/emoji/cat.png',
      color: 'bg-black/25',
      link: 'https://www.pe3ep.ru/github',
    },
    {
      title: 'Email',
      icon: '/static/emoji/email.png',
      color: 'bg-neutral-500/25',
      link: 'mailto:ad@pe3ep.ru',
    },
  ]

  return (
    <>
      <Head>
        <title>Главная</title>
        <meta
          name="description"
          content="Меня зовут Pe3ep. Я начинающий веб-разаботчик и стример."
        />

        <meta itemProp="name" content="Главная" />
        <meta
          itemProp="description"
          content="Меня зовут Pe3ep. Я начинающий веб-разаботчик и стример."
        />
        <meta
          itemProp="image"
          content="https://media.discordapp.net/attachments/999632713189425152/1017335057188392990/sadasd.png?width=1609&height=905"
        />

        <meta property="og:url" content="https://www.pe3ep.ru" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Главная" />
        <meta
          property="og:description"
          content="Меня зовут Pe3ep. Я начинающий веб-разаботчик и стример."
        />
        <meta
          property="og:image"
          content="https://media.discordapp.net/attachments/999632713189425152/1017335057188392990/sadasd.png?width=1609&height=905"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Главная" />
        <meta
          name="twitter:description"
          content="Меня зовут Pe3ep. Я начинающий веб-разаботчик и стример."
        />
        <meta
          name="twitter:image"
          content="https://media.discordapp.net/attachments/999632713189425152/1017335057188392990/sadasd.png?width=1609&height=905"
        />
      </Head>

      <main>
        <div className="bg-zinc-900/50 pt-36 pb-44 md:pt-96 md:pb-80 grid gap-4 place-content-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { delay: 1.25, ease: 'easeOut', duration: 0.5 },
            }}
            className="flex justify-center">
            <Image src="/static/emoji/waving_hand.png" width={96} height={96} />
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.25, ease: 'easeOut', duration: 1 },
            }}>
            <h1 className="font-manrope font-extrabold text-5xl md:text-7xl text-center tracking-tighter">
              Привет. Меня зовут Pe3ep
            </h1>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 1.25 } }}
          className="flex justify-center items-center gap-2 py-12">
          <Image src="/static/emoji/link.png" width={32} height={32} />
          <h1 className="font-manrope font-extrabold text-2xl tracking-tighter">
            Ссылки
          </h1>
        </motion.div>
        <section className="md:mx-auto max-w-4xl mx-4">
          <motion.div
            className="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            animate="show">
            {/* Cards */}
            {socialsList.map((items, index) => (
              <motion.a
                key={index}
                variants={item}
                className="transition-colors p-8 rounded-lg bg-zinc-900 border-2 border-neutral-800 hover:bg-neutral-800"
                href={items.link}>
                <div className="flex gap-4">
                  <div className={`p-3 ${items.color} rounded-lg`}>
                    <div className="w-8 h-8">
                      <Image src={items.icon} width={32} height={32} />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <h1 className="font-manrope font-extrabold text-xl text-center tracking-tighter">
                      {items.title}
                    </h1>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </section>
        <div className="h-12"></div>
      </main>
    </>
  )
}

export default index
