import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="راهنمای بازی" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        شش شانس برای حدس کلمه مورد نظر دارید. بعد از هر حدس حروف به شکل زیر تغییر رنگ می دهند.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ب" status="correct" />
        <Cell value="ا" />
        <Cell value="ر" />
        <Cell value="ا" />
        <Cell value="ن" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        حرف ب در جای درست قرار گرفته
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="پ" />
        <Cell value="ر" />
        <Cell value="گ" status="present" />
        <Cell value="ا" />
        <Cell value="ر" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        حرف گ در کلمه جواب وجود دارد اما در جای اشتباهی است
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="م" />
        <Cell value="ر" />
        <Cell value="ا" />
        <Cell value="س" status="absent" />
        <Cell value="م" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        حرف س در جواب وجود ندارد
      </p>
    </BaseModal>
  )
}
