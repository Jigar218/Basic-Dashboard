Dashboard Overview

1. Layout Structure:

Topbar: Navigation or header area at the top.

Sidebar: Side navigation with links to different pages.

Main Content Area: Where the page content (Home, Users, Settings) is displayed.

2. Pages:

Home: Displays a simple welcome message.

Users: i) Fetches data from an API using TanStack Query and an Axios instance.

       ii) Shows 20 random users in a table with details like profile, name, email, phone, and country.

Settings: i)Contains a Username input field.

          ii)Dark Mode toggle to switch between light and dark themes.

          iii)Notifications toggle to enable/disable notifications.

          iV)Save Settings button saves the user’s preferences (dark mode, username, notifications) to localStorage.

Technologies & Features:

React for frontend.
TanStack Query for data fetching and caching.
Axios for API calls.
LocalStorage to persist settings across page reloads.
Dark mode implementation with global body class.
