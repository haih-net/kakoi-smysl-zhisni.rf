import { styled } from '@linaria/react'
import { CallsStyled } from 'app/Custom/components/Calls/styles'
import {
  CustomLayoutStyled,
  CustomLayoutMainStyled,
} from 'app/Custom/Layout/styles'
import { HeaderStyled } from 'app/Custom/Layout/Header/styles'
import { FooterStyled } from 'app/Custom/Layout/Footer/styles'
import { ChatWidgetContainer } from 'app/Custom/components/Chat/ChatWidget/styles'

export const CallRoomStyled = styled(CallsStyled)`
  body:has(&) ${HeaderStyled} {
    transition: height 240ms ease;
  }
  body:has(&) ${HeaderStyled} .header-inner {
    transition: padding 240ms ease;
  }
  body:has(&[data-active='true']) ${CustomLayoutStyled} {
    height: 100dvh;
    min-height: 0;
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
  }
  body:has(&[data-active='true']) ${HeaderStyled} {
    --header-height: 0px;
    height: var(--header-height);
    position: relative;
    overflow: hidden;
    visibility: hidden;
    border-bottom: 0;
  }
  body:has(&[data-active='true']) ${HeaderStyled} .header-inner {
    padding-top: 0;
    padding-bottom: 0;
  }
  body:has(&[data-active='true']) ${CustomLayoutMainStyled} {
    min-height: 0;
    display: grid;
    grid-template-rows: minmax(0, 1fr);
    padding: 0;
    margin: 0;
    max-width: unset;
  }
  body:has(&[data-active='true'])
    ${FooterStyled},
    body:has(&[data-active='true'])
    ${ChatWidgetContainer} {
    display: none;
  }
  &[data-active='true'] {
    max-width: none;
    min-height: 0;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`
