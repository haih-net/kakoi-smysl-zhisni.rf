import { styled } from '@linaria/react'
import { theme } from '../../theme'

export const HeaderStyled = styled.header`
  position: relative;
  top: 0;
  z-index: 300;
  background: ${theme.backgrounds.page};
  .site-name {
    font-size: clamp(20px, 2vw, 25px);
    line-height: 1.2;
  }
  .header-inner {
    max-width: 1440px;
    margin: auto;
    min-height: 80px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    @media (min-width: ${theme.breakpoints.xs}px) {
      padding: 16px 24px;
      gap: 32px;
    }

    @media (min-width: ${theme.breakpoints.sm}px) {
      min-height: 88px;
      padding: 18px 40px;
    }
  }
  nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 20px 24px 28px;
    background: ${theme.backgrounds.page};
    box-shadow: 0 16px 24px #182e2012;
    border-bottom: 1px solid ${theme.colors.border};
    align-items: stretch;
    gap: 6px;
    font-size: 17px;

    @media (min-width: ${theme.breakpoints.sm}px) {
      display: flex;
      position: static;
      padding: 0;
      background: transparent;
      box-shadow: none;
      border-bottom: 0;
      align-items: center;
      gap: 20px;
    }

    @media (min-width: ${theme.breakpoints.md}px) {
      gap: 32px;
    }
  }
  nav[data-open='true'] {
    display: flex;
    flex-direction: column;

    @media (min-width: ${theme.breakpoints.sm}px) {
      flex-direction: row;
    }
  }
  nav a {
    padding: 12px 0;

    @media (min-width: ${theme.breakpoints.sm}px) {
      padding: 10px 0;
    }
  }
  nav a[aria-current='page'] {
    font-weight: 700;
  }
  .ai-button {
    margin-top: 10px;
    justify-content: flex-start;

    @media (min-width: ${theme.breakpoints.sm}px) {
      margin-top: 0;
      margin-left: 0;
      justify-content: flex-start;
    }

    @media (min-width: ${theme.breakpoints.md}px) {
      margin-left: 0;
    }
  }
  .menu-toggle {
    display: flex;
    background: transparent;
    border: 1px solid ${theme.colors.border};
    border-radius: 10px;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    color: inherit;

    @media (min-width: ${theme.breakpoints.sm}px) {
      display: none;
    }
  }

  .feedback-button,
  .signin-link {
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    min-height: 44px;
    padding: 10px 0;
    border: 0;
    border-radius: 0;
    color: ${theme.colors.primary};
    background: transparent;
    font: inherit;
    font-weight: 400;
    text-decoration: none;
    cursor: pointer;
  }
  .feedback-button:hover,
  .signin-link:hover {
    background: transparent;
    text-decoration: underline;
  }
  .account-menu {
    position: relative;
    min-width: 0;
  }
  .account-menu summary {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 8px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 700;
    list-style: none;
  }
  .account-menu summary::-webkit-details-marker {
    display: none;
  }
  .account-menu summary:hover,
  .account-menu[open] summary {
    background: ${theme.colors.accentSoft};
  }
  .account-avatar {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: ${theme.colors.accentSoft};
    flex-shrink: 0;
  }
  .account-name {
    max-width: 140px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .account-dropdown {
    padding: 10px;
    margin-top: 8px;
    border: 1px solid ${theme.colors.border};
    border-radius: 12px;
    background: white;
    box-shadow: 0 12px 32px #252b3014;
    min-width: 220px;
    @media (min-width: ${theme.breakpoints.sm}px) {
      position: absolute;
      right: 0;
      top: 100%;
    }
  }
  .account-dropdown p {
    margin: 4px 12px 8px;
    color: ${theme.colors.text.secondary};
    font-size: 12px;
  }
  .account-dropdown a,
  .account-dropdown button {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    padding: 10px 12px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: ${theme.colors.primary};
  }
  .account-dropdown a:hover {
    text-decoration: underline;
    background: ${theme.colors.accentSoft};
  }
  .account-dropdown button {
    margin-top: 4px;
    border-top: 1px solid ${theme.colors.border};
  }
`
