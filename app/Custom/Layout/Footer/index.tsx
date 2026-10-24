import type * as React from 'react'
import { Link } from 'react-router'
import { FooterStyled } from './styles'

export const Footer: React.FC = () => (
  <FooterStyled>
    <div className="footer-inner">
      <div>
        <Link className="footer-title" to="/">
          какой смысл жизни?
        </Link>
        <p>Можно продолжать искать.</p>
      </div>
      <nav aria-label="Навигация в подвале">
        <Link to="/#idea">Об идее</Link>
        <Link to="/#main-content">Наверх ↑</Link>
      </nav>
      <a
        target="_blank"
        href="https://fi1osof.ru"
        aria-label="Разработка и сопровождение — 𝕱i1osof"
        title="Разработка и сопровождение — 𝕱i1osof"
      >
        By 𝕱
      </a>
    </div>
  </FooterStyled>
)
