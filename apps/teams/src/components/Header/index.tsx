import React from 'react'
import { BackButton, BackIcon, Container, Logo } from './styles'
import logoImg from '@assets/logo.png'

type Props = {
  showBackButton?: boolean
}

const Header = ({ showBackButton = false }: Props) => {
  return (
    <Container>
      {
        showBackButton && 
          <BackButton>
            <BackIcon />
          </BackButton>
      }
      <Logo source={logoImg} />
    </Container>
  )
}

export { Header }