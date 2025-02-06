# 🎨 DrawCanvas

A real-time collaborative drawing application built with Next.js and WebSocket technology. This project was developed as part of the 100xDevs Cohort 3.0 program.

## ✨ Features

- 🖌️ Real-time drawing collaboration
- 🎯 Multiple tool options (Pen, Line, Rectangle, Circle)
- 🔐 User authentication with secure sessions
- 🏠 Create or join drawing rooms with unique room codes
- 📱 Responsive design for desktop and mobile devices



## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/himanshu-tyd/100x-canvas.git
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
```bash
cp .env
```

4. Run the development server:
```bash
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Tech Stack

- ⚡ Next.js 14 with App Router
- 🎭 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🔌 WebSocket for real-time communication
- 🔒 Jsonwebtoken for authentication
- 📦 Prisma as ORM
- 🗄️ PostgreSQL for database
- 🎯 Canvas API for drawing functionality
<!-- - ☁️ Vercel for deployment -->

## 📁 Project Structure

```
.
├── apps/
│   └── drawcanvas/          # Main Next.js application
├── packages/
│   ├── backend-common/      # Shared backend utilities
│   │   └── src/
│   ├── common/             # Shared utilities and types
│   │   └── src/
│   ├── db/                 # Database configuration and models
│   │   ├── prisma/
│   │   │   └── migrations/
│   │   └── src/
│   ├── eslint-config/     # Shared ESLint configuration
│   ├── typescript-config/ # Shared TypeScript configuration
│   └── ui/               # Shared UI components
│       └── src/
```

Key directories:
- `apps/drawcanvas`: Main Next.js application with all the drawing functionality
- `packages/backend-common`: Shared backend utilities and helper functions
- `packages/common`: Shared types, constants, and utility functions
- `packages/db`: Database schema, migrations, and Prisma configuration
- `packages/ui`: Reusable React components shared across the application
- `packages/typescript-config`: Shared TypeScript configuration
- `packages/eslint-config`: Shared ESLint rules and configuration

## 🌟 Key Features Explained

### Real-time Collaboration
- Multiple users can draw simultaneously
- Cursor positions are synced across all users
- Changes are reflected  for all participants

### Drawing Tools
- Pen tool with adjustable stroke width
- Shape tools: Line, Rectangle, Circle


### Room Management
- Create drawing rooms
- Join existing rooms via unique codes


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Development Team

This project was developed as part of the 100xDevs Cohort 3.0 program under the mentorship of Harkirat Singh.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to [100xDevs](https://100xdevs.com) for the guidance and support
- Special thanks to Harkirat Singh for the mentorship
- All the contributors who have helped shape this project
