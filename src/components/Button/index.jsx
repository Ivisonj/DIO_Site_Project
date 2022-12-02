import React from 'react'

import { ButtonContainner } from './styles';

const Button = ({title, variant="primary", onClick}) => {
  return (
    <ButtonContainner variant={variant} onClick={onClick}>
        {title}
    </ButtonContainner>
  )
}

export { Button }