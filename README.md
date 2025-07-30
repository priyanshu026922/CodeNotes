# 🚀 CodeNotes – A Developer-Focused Blogging Platform

**CodeNotes** is a full-stack blogging platform purpose-built for developers to **publish**, **read**, and **share** technical thoughts — all optimized for an exceptional writing and reading experience. Built with speed, scalability, and developer usability at its core.

---

## 🧩 Key Features

- 🔐 **JWT-Based Authentication**  
  Secure and stateless login/signup system using **JSON Web Tokens**.

- ⚡ **Edge-Optimized Deployment**  
  Deployed using **Cloudflare Workers** for global, low-latency access.

- 🧠 **Tech-Centric Minimal Design**  
  Clean and distraction-free UI with:
  - Responsive code formatting  
  - Mobile-first layout  
  - Focused reading and writing interface  

- 📦 **Prisma ORM + PostgreSQL**  
  Type-safe, performant database queries powered by Prisma and a production-ready PostgreSQL backend.

---

## 🛠️ Tech Stack

| Layer       | Technologies Used                    |
|-------------|--------------------------------------|
| Frontend    | React.js, Tailwind CSS               |
| Backend     | Node.js, Express.js                  |
| Database    | PostgreSQL with Prisma ORM           |
| Auth        | JWT (JSON Web Token)                 |
| Deployment  | Cloudflare Workers (Edge Compute)    |

---

## 📦 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/codenotes.git
cd codenotes

cd server
npm install

# Setup Prisma
npx prisma generate
npx prisma migrate dev

npm run dev
