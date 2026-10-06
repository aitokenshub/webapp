# webapp
A showoom of projects using AI tools to show the Tokens used on each Agents


# Gemini AI Experience & Model Portfolio

aitokenshub

A modern, high-performance Flask application showcasing AI engineering experience, models deployed, token consumption metrics, and evaluation star rankings.

Designed with the sleek dark aesthetic of `~/dev/appCopilot/index.html` (Aurora theme), backed by MySQL running in Docker container **`geminiDB`**.

---

## 🌟 Key Features

- **User Registration & Authentication**: Secure user registration, password hashing (`Werkzeug`), and session management (`Flask-Login`).
- **Granular Ownership & Permissions**: Only the user that published a post can edit or delete their own posts. Unauthenticated visitors and other users are restricted from modifying others' posts.
- **Frontier Models Showcase**: Dedicated tracking for all AI models (e.g. Gemini 2.0 Flash, Gemini 1.5 Pro, Claude 3.5 Sonnet, DeepSeek-R1, GPT-4o, Llama 3.3 70B).
- **Token Analytics**: Live telemetry of tokens processed per project and model architecture with formatted indicators (`M`/`K`) and bar chart distribution.
- **Star Rankings**: Visual and interactive 1-to-5 star evaluation system reflecting model reliability, latency, and reasoning capability.
- **Blog-Style Technical Logs**: Comprehensive entries with problem statements, architecture writeups, markdown support, key milestone metrics, and repository links.
- **Interactive Filtering & Search**: Instant filtering by author (`@username`), model architecture, star rating, category, and keyword search.
- **Dockerized MySQL Backend**: Pre-configured to communicate seamlessly with container `geminiDB`.
- **REST API**: Built-in JSON endpoints (`/api/experiences`, `/api/stats`) for external integrations.

---

## 🔐 Authentication & Accounts

- **Registration (`/register`)**: Create a new account with a username, display name, email, and password.
- **Sign In (`/login`)**: Sign in using either username or email.
- **Ownership Rules**:
  - Anyone can browse and read posts and filter by author.
  - To log an experience, a user must be signed in (`@login_required`).
  - Only the author who created an experience has access to its **Edit** (`/experience/<id>/edit`) and **Delete** actions.

---

## 🚀 Quick Start

### 1. MySQL Container (`geminiDB`)

The database runs in a Docker container named `geminiDB`:

```bash
docker run -d \
  --name geminiDB \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=rootpassword \
  -e MYSQL_DATABASE=gemini_ai \
  -e MYSQL_USER=gemini \
  -e MYSQL_PASSWORD=geminisecret \
  mysql:8.0
```

To verify the container is running:
```bash
docker ps --filter "name=geminiDB"
```

### 2. Activate Virtual Environment & Run App

```bash
cd /home/zveb/dev/gemini_flask

# Activate virtual environment
source .venv/bin/activate

# Launch the Flask server
python3 app.py
```

The application will be accessible at: **`http://localhost:5000`**

---

## 🗂️ Project Structure

```
/home/zveb/dev/gemini_flask/
├── app.py                  # Flask app, routes, auth handlers, and authorization guards
├── config.py               # Database and secret key configuration
├── models.py               # SQLAlchemy models (User, Experience, can_edit checks)
├── seed_data.py            # Initial seed data and default demo account setup
├── requirements.txt        # Python package dependencies
├── .env                    # Database credentials and environment variables
├── .env.example            # Sample configuration template
├── static/
│   ├── css/
│   │   └── style.css       # Aurora dark theme styles (based on appCopilot)
│   └── js/
│       └── main.js         # Client-side dynamic token formatting & filters
└── templates/
    ├── base.html           # Base layout with Aurora branding, auth nav & status chips
    ├── index.html          # Main portfolio, stats dashboard, token chart, cards with author tags
    ├── detail.html         # Full technical log view with markdown & author-guarded actions
    ├── create.html         # Add new AI experience with star rating selector
    ├── edit.html           # Edit existing experience (author-guarded)
    ├── login.html          # Sign in template with Aurora styling
    └── register.html       # User registration template
```

---

## 📡 API Endpoints

- `GET /api/experiences`: Returns all AI experiences as JSON.
- `GET /api/stats`: Returns aggregated token volume, model count, and average stars.
