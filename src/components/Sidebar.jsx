import { NavLink } from 'react-router-dom'
import {
  MdDashboard,
  MdImage,
  MdVideoLibrary,
  MdInsertDriveFile,
  MdFolderOpen,
  MdDelete,
  MdLogout,
  MdHelp,
} from 'react-icons/md'

const navGroups = [
  {
    label: 'File Manager',
    items: [
      { to: '/', label: 'Dashboard', icon: MdDashboard, end: true },
    ],
  },
  {
    label: 'Pages',
    items: [
      { to: '/file-manager/images', label: 'Image', icon: MdImage },
      { to: '/file-manager/videos', label: 'Video', icon: MdVideoLibrary },
      { to: '/file-manager/documents', label: 'Document', icon: MdInsertDriveFile },
      { to: '/file-manager/all-files', label: 'All Files', icon: MdFolderOpen },
      { to: '/file-manager/trash', label: 'Trash', icon: MdDelete },
    ],
  },
  {
    label: 'Other',
    items: [
      { to: '/sign-out', label: 'Sign Out', icon: MdLogout },
      { to: '/help', label: 'Help', icon: MdHelp },
    ],
  },
]

function NavItem({ to, label, icon: Icon, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-2.5 rounded-lg mx-2 text-sm font-medium transition-colors ${
          isActive
            ? 'bg-primary/10 text-primary border-l-4 border-primary pl-3'
            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
        }`
      }
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  )
}

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-sidebarBorder z-30 flex flex-col transition-transform duration-300 flex-shrink-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:sticky lg:top-0 lg:h-screen`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2 px-6 py-5 border-b border-sidebarBorder">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="text-lg font-bold text-gray-800">Hope UI</span>
        </div>

        {/* User mini profile */}
        <div className="flex items-center gap-3 px-6 py-4 border-b border-sidebarBorder">
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="User"
            className="w-9 h-9 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">Anna Sthesia</p>
            <p className="text-xs text-textMuted">Admin</p>
          </div>
        </div>

        {/* Nav groups */}
        <nav className="flex-1 overflow-y-auto py-4 space-y-4">
          {navGroups.map((group) => (
            <div key={group.label}>
              <p className="px-6 text-xs font-semibold text-textMuted uppercase tracking-wider mb-1">
                {group.label}
              </p>
              <ul className="space-y-0.5">
                {group.items.map((item) => (
                  <li key={item.to}>
                    <NavItem {...item} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  )
}
