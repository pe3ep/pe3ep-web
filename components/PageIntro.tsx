import React from 'react'
import Image, { StaticImageData } from 'next/image'

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
    <div className="h-64 grid place-content-center bg-zinc-900/50">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 mb-4">
          <Image
            src={icon}
            height={64}
            width={64}
            quality={100}
            blurDataURL={blurDataURL}
            placeholder="blur"
          />
        </div>
        <div className="flex items-center">
          <h1 className="font-manrope font-bold text-3xl lg:text-4xl">
            {name}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default PageIntro
