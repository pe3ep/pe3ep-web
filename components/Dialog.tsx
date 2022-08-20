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

                  <div className="mt-4 flex gap-2 justify-center items-center">
                    <button
                      type="button"
                      className="text-white flex justify-center items-center py-2 px-4 bg-red-500 rounded-lg">
                      <img src="/icons/zip.png" className="w-5 h-5 mr-2" />
                      Скачать .zip
                    </button>
                    <button
                      type="button"
                      className={`${
                        copied ? 'bg-green-600' : 'bg-red-500'
                      } transition text-white flex justify-center items-center py-2 px-4 rounded-lg`}
                      onClick={() => {
                        copy('No link for now hahaha')
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
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
