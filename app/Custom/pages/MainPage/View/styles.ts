import { styled } from '@linaria/react'
import { theme } from '../../../theme'

export const MainPageViewStyled = styled.article`
  overflow-wrap: anywhere;
  .introduction {
    position: relative;
    isolation: isolate;
    text-align: center;
  }
  .hero-copy {
    position: relative;
    z-index: 1;
    padding: 36px 22px 12px;
    max-width: 1200px;
    margin: 0 auto;
  }
  h1 {
    font-size: clamp(42px, 6.1vw, 88px);
    font-weight: 600;
    line-height: 1.08;
    letter-spacing: -0.045em;
    text-wrap: balance;
  }
  .answer {
    margin-top: 20px;
    font-size: clamp(30px, 4vw, 55px);
    line-height: 1.2;
    letter-spacing: -0.025em;
  }
  .premise {
    max-width: 820px;
    margin: 28px auto 0;
    font-size: clamp(19px, 2vw, 26px);
    line-height: 1.55;
    text-wrap: pretty;
  }
  .hero-goal {
    margin-top: 22px;
    font-size: clamp(28px, 3.5vw, 46px);
    line-height: 1.22;
    letter-spacing: -0.025em;
    text-wrap: balance;
  }
  .read-on {
    display: inline-block;
    padding: 14px 0;
    margin-top: 20px;
    font-size: 21px;
  }
  .read-on span {
    margin-left: 8px;
  }
  .hero-landscape {
    position: relative;
    display: block;
    margin-top: 16px;
    height: 270px;
    overflow: hidden;
  }
  .hero-landscape::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      white,
      transparent 18%,
      transparent 90%,
      white
    );
    pointer-events: none;
  }
  .hero-landscape img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 70% center;
  }
  .essay-layout {
    max-width: 1200px;
    margin: 0 auto;
    padding: 48px 24px 0;
    scroll-margin-top: 28px;
  }
  .contents {
    padding-bottom: 32px;
    margin-bottom: 40px;
    border-bottom: 1px solid ${theme.colors.divider};
    font-size: 16px;
  }
  .contents > p {
    margin-bottom: 14px;
    color: ${theme.colors.text.secondary};
    font-family: ${theme.fontUi};
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .contents nav {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 24px;
  }
  .thoughts {
    min-width: 0;
    max-width: ${theme.readingWidth};
    margin: auto;
  }
  .thoughts section + section {
    margin-top: 64px;
  }
  h2 {
    margin-bottom: 26px;
    font-size: clamp(30px, 3vw, 42px);
    line-height: 1.2;
    letter-spacing: -0.025em;
    text-wrap: balance;
    scroll-margin-top: 36px;
  }
  .thoughts section p {
    font-size: 20px;
    line-height: 1.8;
  }
  .thoughts section p + p {
    margin-top: 22px;
  }
  .reading-illustration {
    margin: 44px -12px;
  }
  .reading-illustration img {
    display: block;
    width: 100%;
    height: auto;
  }
  .closing {
    max-width: 1100px;
    margin: 0 auto;
    padding: 80px 24px;
    text-align: center;
    font-size: clamp(27px, 3.2vw, 42px);
    line-height: 1.35;
    letter-spacing: -0.02em;
    text-wrap: balance;
  }
  .closing p:first-child {
    color: ${theme.colors.text.secondary};
  }
  .closing p + p {
    margin-top: 12px;
  }
  .closing a {
    display: inline-block;
    margin-top: 30px;
    padding: 10px 0;
    font-size: 19px;
    letter-spacing: normal;
  }
  @media (min-width: ${theme.breakpoints.sm}px) {
    .introduction {
      min-height: max(800px, 63vw);
    }
    .hero-copy {
      padding: 40px 32px 0;
    }
    .hero-landscape {
      position: absolute;
      inset: 0;
      height: auto;
      margin: 0;
      z-index: -1;
    }
    .hero-landscape img {
      object-position: center bottom;
    }
    .hero-landscape::after {
      background: linear-gradient(
        to bottom,
        white,
        transparent 12%,
        transparent 94%,
        white
      );
    }
    .essay-layout {
      padding: 76px 40px 0;
    }
    .reading-illustration {
      margin: 52px -36px;
    }
    .closing {
      padding: 110px 40px;
    }
  }
  @media (min-width: ${theme.breakpoints.md}px) {
    .essay-layout {
      display: grid;
      grid-template-columns: 220px minmax(0, 720px);
      column-gap: 72px;
      align-items: start;
    }
    .contents {
      position: sticky;
      top: 48px;
      border: 0;
      padding: 8px 0;
      margin: 0;
    }
    .contents nav {
      flex-direction: column;
      gap: 18px;
    }
    .thoughts section + section {
      margin-top: 88px;
    }
    .thoughts section p {
      font-size: 21px;
    }
  }
`
