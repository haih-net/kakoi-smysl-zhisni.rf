import { styled } from '@linaria/react'
import { theme } from '../theme'

export const CustomLayoutSectionStyled = styled.section`
  display: contents;
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
  width: 100%;
  min-width: 0;
  max-width: 1328px;
  min-height: 0;
  padding: 44px 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${theme.breakpoints.sm}px) {
    padding: 64px 40px;
  }

  &[data-home='true'] {
    max-width: none;
    padding: 0;
  }
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
