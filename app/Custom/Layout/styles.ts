import { styled } from '@linaria/react'
import { theme } from '../theme'

export const CustomLayoutSectionStyled = styled.section`
  max-width: 1328px;
  padding: 44px 24px;
  margin: auto;

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: 64px 40px;
  }
`

export const CustomLayoutGridStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 18px;

  @media (min-width: ${theme.breakpoints.xs}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: ${theme.breakpoints.sm}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
`

export const CustomLayoutMainStyled = styled.main`
  flex: 1;
  min-width: 0;
`

export const CustomLayoutStyled = styled.div`
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  color: ${theme.colors.foreground};
  background: ${theme.backgrounds.page};
  .ai-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 0;
    border: 0;
    background: transparent;
    color: ${theme.colors.primary};
    font: inherit;
    cursor: pointer;
    text-decoration: none;
  }
  .ai-button:hover {
    color: ${theme.colors.primaryHover};
    text-decoration: underline;
  }
  .skip-link {
    position: absolute;
    top: -100px;
    left: 20px;
    padding: 12px 20px;
    background: white;
    z-index: 1100;
  }
  .skip-link:focus {
    top: 12px;
  }
`

export const HtmlStyled = styled.html`
  font-family: ${theme.font};
  color: ${theme.colors.foreground};
  background: ${theme.backgrounds.page};
  line-height: 1.6;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  scroll-padding-top: 112px;
  ::selection {
    background: ${theme.colors.accentSoft};
    color: ${theme.colors.foreground};
  }
  :where(h1, h2, h3) {
    font-weight: 400;
    line-height: 1.2;
  }
  body {
    margin: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: none;
  }
  :where(h1, h2, h3, h4, p, ul) {
    margin: 0;
    padding: 0;
  }
  button,
  input,
  textarea,
  select {
    font: inherit;
  }
  button {
    touch-action: manipulation;
  }
  button:enabled {
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
  img {
    max-width: 100%;
  }
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    text-underline-offset: 0.2em;
    text-decoration-thickness: 1px;
  }
  a:hover {
    text-decoration: underline;
  }
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      scroll-behavior: auto !important;
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`
