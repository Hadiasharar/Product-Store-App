# 🛍️ Product Store App

A modern e-commerce store built with React, featuring full shopping cart, dark mode, and category filtering.

## Features

- Browse products by category (Dresses, Shirts, Shoes, Jewellery, Electronics)
- Click any product to view full details
- Add/remove items from cart
- Increase or decrease item quantity
- Cart saved to localStorage (persists on refresh)
- Dark / Light mode toggle
- Grid / List view toggle
- Loading and error states

## Tools & Libraries

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| React Router v6 | Page navigation |
| Redux Toolkit | Cart state management |
| Context API + useReducer | Theme, view, category settings |
| React Query | Fetching products from API |
| DummyJSON API | Product data source |
| Vite | Build tool |

## How to Run

1. Clone the repository
2. Navigate to the project folder:
   cd product-store-app
3. Install dependencies:
   npm install
4. Start the development server:
   npm run dev
5. Open http://localhost:5173 in your browser

## Project Structure

src/
├── components/     # Navbar, ProductCard, ProductList, Cart, CartItem, SettingsPanel
├── context/        # SettingsContext (theme, view, category)
├── pages/          # Home, CartPage, ProductDetailPage
├── store/          # Redux store + cartSlice
└── App.jsx

## Screenshots
<img width="1892" height="997" alt="image" src="https://github.com/user-attachments/assets/6fe78d4a-1263-4946-b7c5-5f172845c0f2" />

<img width="1892" height="982" alt="image" src="https://github.com/user-attachments/assets/bea9d672-0061-4a36-9074-341c7612f84c" />

<img width="1891" height="991" alt="image" src="https://github.com/user-attachments/assets/c4935a12-6802-4968-9fa7-8e020f5093b8" />

<img width="1919" height="995" alt="image" src="https://github.com/user-attachments/assets/af295317-582b-4c24-aeaf-4e28c3370342" />

<img width="1912" height="897" alt="image" src="https://github.com/user-attachments/assets/0c655dde-5137-4c6d-bb69-b56eed4f5389" />










