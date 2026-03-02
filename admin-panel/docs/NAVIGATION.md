# Навигация: Players и Wallet Transaction

## Схема переключения из сайдбара

```
┌─────────────────────────────────────────────────────────────────────────┐
│  SIDEBAR                    │  MAIN CONTENT                              │
├────────────────────────────┼───────────────────────────────────────────┤
│  MAIN CARD / ADMIN PANEL    │                                           │
│  ALL CASINOS ▼             │  Breadcrumb: ALL CASINOS / …               │
│  ─────────────────────     │                                           │
│  REVENUE                    │  • По клику «PLAYERS» → таблица игроков   │
│  ► PLAYERS          ◀───────┼──• По клику «WALLET TRANSACTION» →        │
│  TRANSACTIONS               │    страница Wallet Transactions           │
│  WALLET TRANSACTION ◀───────┼──• Из таблицы «Open →» → профиль игрока   │
│  MANAGE                     │    (стрелка «назад» возвращает в таблицу) │
│  CRM / TEAM / …             │                                           │
└────────────────────────────┴───────────────────────────────────────────┘
```

## Маршруты

| URL | Страница |
|-----|----------|
| `/` | Редирект на `/wallet-transactions` |
| `/wallet-transactions` | Wallet Transactions (чипы, фильтры, пустая таблица) |
| `/players` | Список игроков (таблица, кнопка «Open →» у каждой строки) |
| `/players/:id` | Профиль игрока (Summary, балансы, данные, KYC), кнопка «назад» → `/players` |

## Поведение

1. **Players** — вложенная логика: сайдбар «PLAYERS» → таблица игроков → клик по игроку → профиль игрока.
2. **Wallet Transaction** — отдельная страница: сайдбар «WALLET TRANSACTION» → страница Wallet Transactions.
3. Активный пункт сайдбара подсвечивается по текущему URL (Players при `/players` и `/players/:id`).
4. В профиле игрока кнопка «назад» (стрелка слева от email) ведёт на `/players`.
