## 📅 SniperThink

A full-stack web application that allows users to schedule appointments using Google Calendar integration. Users can sign in via Google OAuth, fill out a form with their details, and book an event directly on their Google Calendar.

---

## 🗂️ Project Structure

```
root
│
├── client/              # Frontend (React + Supabase)
│   └── ...
│
├── server/              # Backend (Node.js + Express)
│   └── ...
│
├── README.md
└── .env
```

---

## 🔗 Live Demo

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ Tech Stack

### Frontend

- React
- Tailwind CSS
- Framer Motion
- React DatePicker
- Supabase Auth (`@supabase/auth-helpers-react`)
- Google OAuth (via Supabase)

### Backend

- Node.js
- Express.js
- Google APIs (`googleapis`)
- CORS

---

## 🚀 Features

- 🔐 Google Sign-In with Supabase OAuth
- 📆 Google Calendar integration
- 📝 Appointment form with name, email, description, date & time
- 🧠 Intelligent event creation with timezone support
- ✅ Event confirmation and preview
- 🔒 Token-based secure scheduling via backend

---

## 🔧 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/appointment-scheduler.git
cd appointment-scheduler
```

---

## ⚙️ Backend Setup

```bash
cd server
npm install
```

### Create `.env` file:

```env
PORT=3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

> 📝 You don’t need to use refresh tokens here because Supabase handles Google login and provides `provider_token`.

### Start Backend

```bash
npm run dev
```

---

## 🌐 Frontend Setup

```bash
cd client
npm install
```

### Create `.env` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Start Frontend

```bash
npm run dev
```

---

## 📌 Supabase Configuration

1. Create a new Supabase project at [supabase.io](https://supabase.io)

2. Enable **Google OAuth** under Authentication → Providers

3. Set the **Redirect URL** to:

   ```
   http://localhost:5173
   ```

4. Get your:

   - Supabase URL
   - Supabase Anon Key

5. Paste into your `.env` (see above)

---

## 📅 Google Cloud Console Configuration

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable the **Google Calendar API**
3. Set **OAuth consent screen** (External, add scopes)
4. Under **OAuth 2.0 Client IDs**:

   - Set Authorized redirect URI to:

     ```
     http://localhost:5173
     ```

---

## 📬 API Endpoint (Backend)

### POST `/api/schedule`

| Param       | Type   | Required | Description                         |
| ----------- | ------ | -------- | ----------------------------------- |
| name        | String | ✅       | Name of the person                  |
| email       | String | ✅       | Email of the person                 |
| contact     | String | ✅       | Contact number                      |
| description | String | ✅       | Description of the appointment      |
| dateTime    | Date   | ✅       | Date and time in ISO format         |
| token       | String | ✅       | `provider_token` from Supabase auth |

---

## 🔐 Security Notes

- Tokens are **never exposed on the frontend** for API requests to Google.
- Backend handles all calls to the **Google Calendar API**, ensuring **CORS compliance and token security**.

---

## 📦 Future Improvements

- Calendar UI for viewing all scheduled appointments
- Reminder notifications via email
- Admin dashboard
- Availability check with Google Calendar's free/busy API

---

## 🧑‍💻 Author

**Harsh Sangwan**
• [GitHub](https://github.com/harsh-sangwan2002) 
• [LinkedIn](https://www.linkedin.com/in/harsh-sangwan2002)

---

## 🪪 License

This project is open-sourced under the [MIT License](LICENSE).