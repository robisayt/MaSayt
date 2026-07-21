# MaSayt — портфоліо-сайт (Next.js + Tailwind CSS)

Це той самий сайт, що й раніше, але перебудований як звичайний Next.js-проєкт:
- **Tailwind CSS підключено як npm-залежність** (`tailwindcss` + `@tailwindcss/postcss`), без `<script src="https://cdn.tailwindcss.com">`.
- **Next.js 16 (App Router) + TypeScript + React 19.**
- Шрифти (Space Grotesk, Inter, JetBrains Mono) підключені через `next/font/google` — без зовнішніх `<link>` на fonts.googleapis.com.
- Favicon та Open Graph-зображення підключені через файлові конвенції Next.js (`app/icon.svg`, `app/opengraph-image.png`) — працюють одразу, без ручних мета-тегів.
- Фото в блоці «Про мене» рендериться через `next/image` (оптимізація, без попереджень у консолі про відсутні `width`/`height`).

## Встановлення

Знадобиться **Node.js 20 або новіше** (вимога Next.js 16).

```bash
npm install
```

## Розробка

```bash
npm run dev
```

Відкрийте http://localhost:3000

## Продакшн-збірка

```bash
npm run build
npm run start
```

`npm run build` — це і є перевірка «без попереджень у консолі»: Next.js під час білду
показує ESLint- та TypeScript-помилки прямо в терміналі. Проєкт написаний так, щоб
збірка проходила чисто, але саму команду `npm run build` варто запустити
самостійно на вашій машині — у середовищі, де я збирав цей проєкт, немає доступу
до інтернету для `npm install`, тож фінальну збірку я перевірити не міг.

## Лінтер

```bash
npm run lint
```

## Структура проєкту

```
app/
  layout.tsx        — шрифти, метадані, favicon
  page.tsx           — головна сторінка (збирає всі секції)
  globals.css        — Tailwind v4 (@theme) + вся кастомна CSS-анімація
  icon.svg           — favicon (авто-виявляється Next.js)
  opengraph-image.png — OG-зображення для прев'ю в соцмережах
components/          — усі секції та інтерактивні віджети
lib/
  data.ts            — весь текстовий контент (проєкти, послуги, відгук, FAQ тощо)
  icons.tsx          — іконки та спільний логотип
public/
  about-photo.jpg    — фото у блоці «Про мене»
```

## Де редагувати контент

- **Контакти (Telegram/Email):** `lib/data.ts` → `SOCIAL_LINKS`
- **Проєкти портфоліо:** `lib/data.ts` → `PROJECTS`
- **Послуги / переваги / етапи / відгук / FAQ:** `lib/data.ts`
- **Форма зв'язку (Web3Forms):** ключ доступу — у `components/Contact.tsx`
  (константа `WEB3FORMS_ACCESS_KEY`)
- **Фото в блоці «Про мене»:** замініть `public/about-photo.jpg` на власне фото
  з таким самим іменем файлу (або оновіть шлях у `components/About.tsx`)

## Усунення можливих проблем

- **Помилка збірки про `subsets` шрифту** (`app/layout.tsx`): я не мав змоги
  запустити `npm run build` у своєму середовищі (немає доступу до інтернету),
  тож не перевірив наостанок, чи Google Fonts дійсно віддає підмножину
  `cyrillic` для JetBrains Mono. Якщо збірка впаде саме на цьому — приберіть
  `"cyrillic"` з масиву `subsets` відповідного шрифту в `app/layout.tsx`,
  залишивши лише `"latin"`.

## Деплой

Найпростіше — [Vercel](https://vercel.com/new): підключіть репозиторій, і Vercel
сам розпізнає Next.js та застосує правильні налаштування збірки.
