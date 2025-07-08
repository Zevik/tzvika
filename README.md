# צביקה אבנרי - אתר אישי

אתר אישי מודרני עבור צביקה אבנרי, יזם סדרתי ויועץ אסטרטגי.

## טכנולוגיות

- React 18
- TypeScript
- Vite
- Tailwind CSS
- CSS Variables
- CSS Modules
- Responsive Design
- Dark Mode Support
- RTL Support

## תכונות

- עיצוב מודרני עם אפקטים של Glassmorphism
- תמיכה מלאה בעברית ו-RTL
- תצוגה מותאמת למובייל
- מצב לילה אוטומטי
- אנימציות חלקות
- טפסי יצירת קשר
- גלריית פרויקטים עם פילטרים
- אייקונים מודרניים
- SEO מותאם

## התקנה

```bash
# התקנת תלויות
npm install

# הרצת שרת פיתוח
npm run dev

# בניית גרסת ייצור
npm run build

# תצוגה מקדימה של גרסת הייצור
npm run preview
```

## מבנה הפרויקט

```
src/
  ├── components/
  │   ├── layout/
  │   │   ├── Header.tsx
  │   │   └── Footer.tsx
  │   └── sections/
  │       ├── Hero.tsx
  │       ├── Services.tsx
  │       ├── Projects.tsx
  │       └── Contact.tsx
  ├── data/
  │   └── index.ts
  ├── styles/
  │   └── globals.css
  ├── types/
  │   └── index.ts
  ├── App.tsx
  └── main.tsx
```

## תצורה

### Tailwind CSS

הפרויקט משתמש ב-Tailwind CSS עם הגדרות מותאמות אישית עבור:
- צבעים
- אפקטי זכוכית
- צללים
- מעברים
- גרדיאנטים

### CSS Variables

משתני CSS גלובליים מוגדרים ב-`globals.css` ומשמשים לשמירה על עקביות בעיצוב. 