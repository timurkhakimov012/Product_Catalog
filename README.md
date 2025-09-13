# E-commerce App

Приложение интернет-магазина одежды, построенное на Next.js с фильтрацией товаров.

## Технологии

-   **Next.js 14** - React фреймворк
-   **TypeScript** - типизация
-   **CSS Modules** - стилизация
-   **JSON Server** - API для данных товаров

## Установка и запуск

### 1. Установка зависимостей

```bash
npm install
```

### 2. Установка JSON Server (глобально)

```bash
npm install -g json-server@0.17
```

### 3. Запуск JSON Server

```bash
json-server --watch db.json --port 3050
```

JSON Server будет доступен по адресу: `http://localhost:3050`

### 4. Запуск приложения

В отдельном терминале:

```bash
npm run dev
```

Приложение будет доступно по адресу: `http://localhost:3000`

## API Endpoints

### Товары

-   `GET /products` - получить все товары
-   `GET /products?category=Футболки` - фильтр по категории
-   `GET /products?category=Футболки,Худи` - фильтр по нескольким категориям

### Примеры запросов

```bash
# Все товары
curl http://localhost:3050/products

# Только футболки
curl "http://localhost:3050/products?category=Футболки"

# Футболки и худи
curl "http://localhost:3050/products?category=Футболки,Худи"
```

## Структура проекта

```
├── app/                    # Next.js App Router
│   ├── page.tsx           # Главная страница
│   ├── layout.tsx         # Основной layout
│   └── globals.css        # Глобальные стили
├── components/            # React компоненты
│   ├── card/             # Карточка товара
│   ├── logo/             # Логотип
│   └── sidebarCategories/ # Боковая панель фильтров
├── data/                 # Данные
│   └── products.js       # JS массив товаров
├── db.json              # JSON база данных для json-server
└── public/              # Статические файлы
    └── products/        # Изображения товаров
```

## Функциональность

### Фильтрация товаров

-   ✅ Фильтр по категориям (Футболки, Худи, Кофты)
-   🔄 Фильтр по цветам (в разработке)
-   🔄 Фильтр по размерам (в разработке)
-   🔄 Фильтр по цене (в разработке)

### Компоненты

-   **Card** - карточка товара с изображением, названием, ценой и статусом
-   **SidebarCategories** - боковая панель с фильтрами по категориям
-   **Logo** - логотип компании

## База данных

Файл `db.json` содержит массив товаров с полями:

```json
{
	"id": 1,
	"title": "Название товара",
	"image": "/products/01.png",
	"price": 29.99,
	"status": "in stock",
	"category": "Футболки",
	"color": "blue"
}
```

## Разработка

### Запуск в режиме разработки

```bash
# Терминал 1: JSON Server
json-server --watch db.json --port 3050

# Терминал 2: Next.js приложение
npm run dev
```

### Сборка для продакшена

```bash
npm run build
npm start
```

## Примечания

-   JSON Server должен быть запущен на порту 3050
-   Next.js приложение использует порт 3000
-   Изображения товаров находятся в папке `public/products/`
