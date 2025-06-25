# School Management System

This is a [Next.js](https://nextjs.org) project for managing school operations including students, teachers, and educational activities.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Features

- Dark/Light mode toggle
- Responsive design with Tailwind CSS
- Role-based dashboard (Admin, Teacher, Student, Parent)
- Modern UI with Lucide React icons
- Arabic font support with Cairo font family

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **React Context** - Theme management

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   └── page.tsx            # Home page
├── components/
│   ├── Menu.tsx            # Sidebar navigation
│   ├── Navbar.tsx          # Top navigation bar
│   └── ThemeToggle.tsx     # Dark/light mode toggle
└── lib/
    └── theme.tsx           # Theme context and provider
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
