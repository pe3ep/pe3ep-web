import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
const FourOhFour = () => {
  return (
    <>
      <div className="h-screen grid place-content-center bg-zinc-900/50">
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: 'easeOut' },
            }}
            className="flex justify-center mb-6">
            <Image
              src="/static/emoji/what.png"
              width={128}
              height={128}
              placeholder="blur"
              blurDataURL="/static/emoji/what.png"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.5, ease: 'easeOut' },
            }}
            className="font-manrope font-extrabold text-5xl tracking-tighter mb-6">
            Страница не найдена
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, delay: 1, ease: 'easeOut' },
            }}
            className="flex justify-center">
            <Link href="/">
              <a className="transition py-3 px-6 rounded-lg bg-zinc-900 hover:bg-zinc-800">
                На главную
              </a>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default FourOhFour
