# Installation

```
npm i
```

# Phase 1
## Progress
- Setup React Native project through Expo
- Setup ESLint in the project
- Setup `drizzle-orm`, `drizzle-kit`, and `expo-sqlite`
- Setup `drizzle.config.json`
- Added migrations for phase 1: `0000_create_categories_and_transactions.sql`.

## Todos
- [] `PRAGMA foreign_keys = ON;` on every DB connection init.
- [] CRUD operations
- [] Basic transactions screen showing list of all transactions with a aggregated total
- [] Transaction create, and edit form
- [] Allow multiple select in transactions, and then delete
- [] Delete button in edit form
- [] Unit tests with `jest`