import { ReactNode, useState } from "react";

interface ModalProps {
  children: ReactNode
  className?: string
}

export default function Modal({ children, className }: ModalProps) {
  const [activeModal, setActiveModal] = useState(true);
  const handleClickAddCustomer = () =>{
    setActiveModal(!activeModal)
  }

  return (
    <dialog onClick={handleClickAddCustomer} open={activeModal} className={`w-screen overflow-hidden absolute top-0 z-50 h-screen bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg`}>
      {children}
    </dialog>
  )
}
