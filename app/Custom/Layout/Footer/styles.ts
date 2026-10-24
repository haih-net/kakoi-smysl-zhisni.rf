import { styled } from '@linaria/react'
import { theme } from '../../theme'

export const FooterStyled = styled.footer`
  border-top: 1px solid ${theme.colors.border};
  .footer-inner {
    max-width: 1280px;
    margin: auto;
    padding: 40px 24px 88px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 28px;
  }
  .footer-title {
    font-size: 23px;
  }
  p {
    margin-top: 8px;
    color: ${theme.colors.text.secondary};
    font-size: 16px;
  }
  nav {
    display: flex;
    gap: 28px;
  }
  @media (min-width: ${theme.breakpoints.sm}px) {
    .footer-inner {
      padding: 44px 40px;
    }
  }
`
