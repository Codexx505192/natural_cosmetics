"use client"; // Обязательно для работы usePathname

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Хук для определения текущей страницы
import style from "./tabs.module.css"

const TABS = [
  { label: 'О продукте', href: '/' },          // Главная страница
  { label: 'Каталог', href: '/catalog' },      // Вторая страница
  { label: 'Акции', href: '/promo' },          // Третья страница
  { label: 'Полезное', href: '/useful' },
  { label: 'Авторы', href: '/authors' },
];

export default function TabsNav() {
  const pathname = usePathname(); // Получаем текущий URL (например, "/catalog")

  return (
    <div className={style.tabs_container}>
      <div className={style.tabs_menu}>
        {TABS.map((tab) => {
          // Проверяем: если текущий URL совпадает с href вкладки, делаем её активной
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`tab-button ${isActive ? 'active' : ''}`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}