import { styled } from '@linaria/react'
import { theme } from '.'

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
    outline: ${theme.outline};
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
