import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { motion } from 'framer-motion'

const PageIntro = ({
  name,
  icon,
  blurDataURL,
}: {
  name: string
  icon: StaticImageData
  blurDataURL: string
}) => {
  return (
    <div className="pt-36 pb-24 grid place-content-center bg-zinc-900/50">
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: 'easeOut' },
          }}
          className="w-16 h-16 mb-4">
          <Image
            src={icon}
            height={64}
            width={64}
            quality={100}
            blurDataURL={blurDataURL}
            placeholder="blur"
          />
        </motion.div>
        <div className="flex items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, delay: 0.35, ease: 'easeOut' },
            }}
            className="font-manrope font-bold text-3xl lg:text-4xl tracking-tighter">
            {name}
          </motion.h1>
        </div>
      </div>
    </div>
  )
}

export default PageIntro
