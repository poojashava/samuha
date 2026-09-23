# samuha
# 🌐 Samuhamitra — Community Support Platform

> **Connecting communities, enabling support, and making social services easier to access.**

**Samuhamitra** is a community-focused web platform designed to connect people with essential social-support services. It provides a centralized platform for managing donations, fundraising activities, guest/room information, service providers, and administrative operations.

The project combines a responsive frontend with a Node.js/Express backend and SQLite database to provide a simple and accessible community management system.


✨ Features

👤 User Authentication
* User registration and login
* Password hashing using `bcryptjs`
* Session-based authentication
* Administrator access control

❤️ Food & Clothes Donations
* Submit food donations
* Submit clothing donations
* Select an orphanage for donation
* Store donation information in the database
* Admin dashboard for viewing donation records

💰 Fundraising
* Create fundraising entries
* Enter donor details and donation amount
* Select orphanage and cause
* Support multiple payment methods
* Option for anonymous contributions
* Admin can view fundraising records

 🏠 Guest & Room Management
* View available rooms
* Search guest information by room number
* Add or update guest details
* Store contact information and notes
* Admin dashboard for managing room-guest records

 🛠️ Service Providers
* Browse available community service providers
* Display service listings such as carpenters and other local services

📊 Admin Dashboard
Administrators can centrally view:

* Donation records
* Fundraising entries
* Guest/room information

🗄️ Database Management
The application uses SQLite to store:

* Users
* Donations
* Fundraising entries
* Guests
* Room information

🏗️ Project Architecture
Samuhamitra
│
├── server.js
├── package.json
├── package-lock.json
│
├── data/
│   └── samuhamitra.db
│
└── samuha-main/
    └── Samuhamitra/
        │
        ├── index.html
        ├── home.html
        ├── login.html
        ├── register.html
        ├── donations.html
        ├── fundraising.html
        ├── guestarr.html
        ├── service-givers.html
        └── admin.html
        │
        ├── css/
        │   ├── styles.css
        │   ├── donations.css
        │   ├── fundraising.css
        │   ├── guestarr.css
        │   ├── service-givers.css
        │   ├── loginss.css
        │   ├── prelogss.css
        │   └── admin.css
        │
        ├── js/
        │   ├── script.js
        │   ├── loginjs.js
        │   ├── prelogjs.js
        │   ├── donations.js
        │   ├── fundraising.js
        │   ├── guestarr.js
        │   ├── service-givers.js
        │   └── admin.js
        │
        └── assets/
            └── samuicon.png


🛠️ Technology Stack

Frontend
* HTML5
* CSS3
* JavaScript

Backend
* Node.js
* Express.js

Database
* SQLite

Security
* bcryptjs for password hashing
* HTTP-only session cookies
* Administrator authorization

 Development Tools
* Git
* GitHub
* VS Code
* npm


🔌 REST API

The backend exposes REST APIs for the major application modules.

Authentication

| Method | Endpoint        | Purpose             |
| ------ | --------------- | ------------------- |
| `POST` | `/api/register` | Create a new user   |
| `POST` | `/api/login`    | Authenticate a user |

Donations

| Method | Endpoint         | Purpose         |
| ------ | ---------------- | --------------- |
| `POST` | `/api/donations` | Save a donation |

Fundraising

| Method | Endpoint           | Purpose                    |
| ------ | ------------------ | -------------------------- |
| `POST` | `/api/fundraising` | Create a fundraising entry |

Guest Management

| Method | Endpoint                  | Purpose                  |
| ------ | ------------------------- | ------------------------ |
| `GET`  | `/api/guests/:roomNumber` | Retrieve guest details   |
| `POST` | `/api/guests`             | Add/update guest details |

 Admin

| Method | Endpoint                 | Purpose                  |
| ------ | ------------------------ | ------------------------ |
| `GET`  | `/api/admin/donations`   | View donations           |
| `GET`  | `/api/admin/fundraising` | View fundraising records |
| `GET`  | `/api/admin/guests`      | View guest records       |

 ⚙️ Installation & Setup
 1. Clone the repository
bash
git clone https://github.com/your-username/samuhamitra.git
cd samuhamitra

2. Install dependencies
bash
npm install

3. Start the server
bash
node server.js

The application will run at:
http://localhost:3000

 4. Open the application
Open your browser and visit:
http://localhost:3000


The SQLite database is automatically created inside the `data/` directory when the server starts.



 🔐 Authentication Flow

User
 │
 ├── Register
 │      ↓
 │   Password Hashing
 │      ↓
 │   SQLite Database
 │
 └── Login
        ↓
    Verify Credentials
        ↓
    Create Session
        ↓
    Access Application


Administrator endpoints are protected using session-based authorization.


🗃️ Database Structure

The application maintains several SQLite tables:

users
 ├── id
 ├── name
 ├── email
 ├── password
 ├── created_at
 └── is_admin

donations
 ├── id
 ├── donation_type
 ├── quantity
 ├── donation_date
 ├── donation_time
 └── orphanage

fundraising_entries
 ├── id
 ├── name
 ├── email
 ├── phone
 ├── amount
 ├── orphanage
 ├── cause
 ├── payment_method
 ├── anonymous
 └── payment_status

room_guests
 ├── room_number
 ├── name
 ├── contact
 ├── notes
 └── updated_at


 🎯 Project Goals

Samuhamitra aims to:

* Connect people with community-support services
* Simplify donation management
* Encourage community fundraising
* Improve coordination of guest and room information
* Provide centralized administrative management
* Create a simple digital platform for community organizations

---

## 🔮 Future Enhancements

Potential improvements include:

* 💳 Real payment gateway integration
* 📱 Mobile-responsive Progressive Web App
* 🔔 SMS and email notifications
* 🗺️ Location-based service discovery
* 📊 Advanced admin analytics
* 🔎 Search and filtering for service providers
* 🌐 Regional language support
* ☁️ Cloud deployment
* 🔐 JWT-based authentication
* 🧾 Digital donation receipts
* 📈 Fundraising progress dashboards

---

