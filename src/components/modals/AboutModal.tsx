import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        این  نسخه فارسی و متن باز بازی محبوب wordle است -{' '}
        <a
          href="https://github.com/PedramH/wordle-farsi"
          className="underline font-bold"
        >
          میتوانید کد را اینجا ببینید
        </a>{' '}
      </p>
    </BaseModal>
  )
}
