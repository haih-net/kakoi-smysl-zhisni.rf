import type { MetaFunction } from 'react-router'
import { createSeoMeta, unavailableSeoMeta } from '../components/seo/SeoHeaders'
import type { SeoHandle } from '../components/seo/SeoHeaders'
import { MainPage } from 'app/Custom/pages/MainPage'
import socialImage from '../Custom/pages/MainPage/View/assets/lake-hero.webp'

export const handle = {
  seo: {
    title: 'Какой смысл жизни? — Прожить как можно дольше',
    description:
      'Какой смысл жизни? Может, никакого. Размышление о том, почему продолжать жить можно и без заранее найденного предназначения.',
    path: '/',
    image: {
      src: socialImage,
      alt: 'Озеро среди леса — Какой смысл жизни?',
      width: 1536,
      height: 1024,
    },
  },
} satisfies SeoHandle

export const meta: MetaFunction = ({ error }) =>
  error ? unavailableSeoMeta() : createSeoMeta(handle.seo)
export default MainPage
