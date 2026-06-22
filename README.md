# File Manager — Image Gallery Module

A pixel-accurate clone of the [Hope UI Pro File Manager → Image Folder](https://templates.iqonic.design/hope-ui/pro/html/file-manager/image-folder.html) page, built with React + Vite + Tailwind CSS.

## Tech Stack

| Tool | Version | Why |
|------|---------|-----|
| React | 18+ | Component model |
| Vite | 5+ | Fast dev server & build |
| Tailwind CSS | v3 | Utility-first styling with design tokens |
| React Router | v6 | Client-side routing with NavLink active states |
| react-icons | latest | Icon set (Material Design) |

## State Management Decision

**React's built-in tools (`useReducer` + `Context API`) were the right fit.**

The app has one shared domain (the image list), two derived views (filtered grid + recently viewed), and two transient UI states (search query, open modal). A single `useReducer` lifted into a `AppContext` gives every component access with zero boilerplate. Redux Toolkit or Zustand would add meaningful value only when multiple unrelated domains grow large enough to warrant slice separation or middleware — that threshold isn't reached here.

## Project Structure

```
src/
├── components/
│   ├── AppLayout.jsx    # Shell: Sidebar + Navbar + Outlet
│   ├── Sidebar.jsx      # Grouped nav with active-link highlight
│   ├── Navbar.jsx       # Cart / Notifications / Profile dropdowns
│   ├── ImageCard.jsx    # Reusable card (compact + full variants)
│   └── ImageModal.jsx   # Read-only lightbox preview
├── context/
│   └── AppContext.jsx   # useReducer store + derived selectors
├── data/
│   └── images.js        # 16 mock image objects
├── hooks/
│   └── useImages.js     # Encapsulates all image state actions
├── pages/
│   ├── ImagesPage.jsx   # Main cloned screen
│   ├── DashboardPage.jsx
│   ├── VideosPage.jsx
│   ├── DocumentsPage.jsx
│   ├── AllFilesPage.jsx
│   └── TrashPage.jsx
└── utils/
    └── time.js          # timeAgo() + formatDate() helpers
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173/file-manager/images](http://localhost:5173/file-manager/images)

## Known Limitations

- **Add Image** button is visually present but non-functional (out of scope this round).
- **Delete / Edit / Trash restore** flows are intentionally not implemented.
- Images are served from `picsum.photos` (external CDN) — requires internet connection.
- No persistence: refreshing the page resets all state to the mock dataset.
