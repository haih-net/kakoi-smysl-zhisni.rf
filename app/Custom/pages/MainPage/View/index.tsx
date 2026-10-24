import type * as React from 'react'
import { MainPageViewStyled } from './styles'
import lake from './assets/lake-hero.webp'
import lakeSmall from './assets/lake-hero-960.webp'
import lakeMobile from './assets/lake-hero-mobile.webp'
import notebook from './assets/notebook.webp'
import notebookSmall from './assets/notebook-600.webp'

export const MainPageView: React.FC = () => {
  return (
    <MainPageViewStyled>
      <header className="introduction">
        <div className="hero-copy">
          <h1 tabIndex={-1}>Какой смысл жизни?</h1>
          <p className="answer">Может, никакого.</p>
          <p className="premise">
            Но смерти нам не избежать в любом случае. А потому кажется логичной
            только одна игра —
          </p>
          <p className="hero-goal">Прожить как можно дольше.</p>
          <a className="read-on" href="#idea">
            Размышлять дальше <span aria-hidden="true">↓</span>
          </a>
        </div>
        <picture className="hero-landscape">
          <source media="(max-width: 799px)" srcSet={lakeMobile} />
          <img
            src={lake}
            srcSet={`${lakeSmall} 960w, ${lake} 1536w`}
            sizes="100vw"
            width={1536}
            height={1024}
            alt=""
            fetchPriority="high"
          />
        </picture>
      </header>

      <div className="essay-layout" id="idea">
        <aside className="contents">
          <p>Одна возможная игра</p>
          <nav aria-label="Содержание главной страницы">
            <a href="#meaning-title">Поиск ответа</a>
            <a href="#time-title">Открытое будущее</a>
            <a href="#game-title">Жить дальше</a>
          </nav>
        </aside>
        <div className="thoughts">
          <section aria-labelledby="meaning-title">
            <div>
              <h2 id="meaning-title">Необязательно сначала найти ответ</h2>
              <p>
                Есть ли у жизни предназначение? Кто его определяет? И существует
                ли ответ, который подойдёт каждому? Можно размышлять об этом всю
                жизнь. Но продолжать жить можно и с открытым вопросом.
              </p>
              <p>
                Эта игра не требует заранее выбрать великую цель. Можно искать,
                сомневаться, менять своё мнение — и жить дальше.
              </p>
            </div>
          </section>

          <section aria-labelledby="time-title">
            <div>
              <h2 id="time-title">Финал известен. Всё остальное — ещё нет</h2>
              <p>
                Мы знаем, что жизнь конечна. Но не знаем, сколько у нас времени,
                что ещё предстоит увидеть, понять и сделать. Неизбежность конца
                оставляет открытым вопрос о том, что будет до него.
              </p>
              <p>
                На продолжительность и содержание жизни можно влиять, хотя
                далеко не всё зависит от нас. Именно здесь начинается задача:
                разобраться, что в наших силах, и попробовать.
              </p>
            </div>
          </section>

          <figure className="reading-illustration">
            <img
              src={notebook}
              srcSet={`${notebookSmall} 600w, ${notebook} 1000w`}
              sizes="(min-width: 1050px) 720px, (min-width: 800px) 80vw, 100vw"
              width={1000}
              height={667}
              loading="lazy"
              decoding="async"
              alt="Открытый блокнот на скамье под берёзой, за ним — солнечный луг и озеро."
            />
          </figure>
          <section aria-labelledby="game-title">
            <div>
              <h2 id="game-title">Прожить как можно дольше</h2>
              <p>
                Узнавать, как устроены собственное тело и окружающий мир.
                Заботиться о себе. Искать способы сделать жизнь лучше и
                сохранить возможность продолжать её. Задача достаточно сложная,
                чтобы заниматься ею всю жизнь.
              </p>
              <p>
                Здесь нет таблицы лидеров: чужой возраст не определяет твой
                успех. Есть твоя жизнь, твои обстоятельства и возможность
                выбирать следующий шаг.
              </p>
            </div>
          </section>
        </div>
      </div>

      <footer className="closing">
        <p>Возможно, смысл так и не найдётся.</p>
        <p>Но игра может продолжаться.</p>
        <a href="#main-content">
          Вернуться к вопросу <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </MainPageViewStyled>
  )
}
