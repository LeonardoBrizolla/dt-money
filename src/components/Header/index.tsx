import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styled";
import logoImg from '../../assets/logo.svg'
import { NewTransactionModal } from "../NewTransactionModal";
import * as Dialog from '@radix-ui/react-dialog';
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal onCloseModal={setOpen}/>
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}