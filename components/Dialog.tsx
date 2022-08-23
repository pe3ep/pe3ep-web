import { Dialog, Transition } from '@headlessui/react'
import { DownloadIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import copy from 'copy-to-clipboard'

export default function MyModal(props: any) {
  const [copied, setCopied] = useState(false)
  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95">
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-lg bg-neutral-900 border-2 border-neutral-800 p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-center items-center mb-4">
                    <DownloadIcon className="w-10 h-10 text-white" />
                  </div>
                  <Dialog.Title
                    as="h1"
                    className="text-xl text-center font-manrope font-extrabold leading-6 text-white">
                    Загрузить модпак
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-neutral-300">
                      Your payment has been successfully submitted. We’ve sent
                      you an email with all of the details of your order.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-col sm:flex-row gap-2 justify-center items-center">
                    <a
                      href="https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1BPX5UfQB3ngBmwbLUzhU4NK5E-gCYZqj"
                      download>
                      <button
                        type="button"
                        className="text-white flex justify-center items-center py-2 px-4 bg-red-500 rounded-lg">
                        <img src="/icons/zip.png" className="w-5 h-5 mr-2" />
                        Скачать .zip
                      </button>
                    </a>
                    <button
                      type="button"
                      className={`${
                        copied ? 'bg-green-600' : 'bg-red-500'
                      } transition text-white flex justify-center items-center py-2 px-4 rounded-lg`}
                      onClick={() => {
                        copy(
                          'https://drive.google.com/uc?export=download&confirm=no_antivirus&id=1Ba6hH6wPu7E5vrjnKkpTRBxaIIf4Dv8d'
                        )
                        setCopied(true)
                        setTimeout(() => setCopied(false), 1500)
                      }}>
                      <img
                        src="/icons/minecraft.png"
                        className="w-5 h-5 mr-2"
                      />
                      Ссылка MultiMC
                    </button>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <iframe
                      // width={396}
                      // height={223}
                      src="https://www.youtube.com/embed/Ojh4kx1ILuc?controls=2&showinfo=0"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                      className="rounded-lg w-[341px] h-[192px] md:w-[396px] md:h-[223px]"
                      allowFullScreen></iframe>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
