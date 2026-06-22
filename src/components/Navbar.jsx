import { useState, useRef, useEffect } from 'react'
import { MdMenu, MdShoppingCart, MdNotifications, MdExpandMore } from 'react-icons/md'

function Dropdown({ trigger, children }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handle)
    return () => document.removeEventListener('mousedown', handle)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button onClick={() => setOpen((o) => !o)} className="focus:outline-none">
        {trigger}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
          {children}
        </div>
      )}
    </div>
  )
}

function DropdownItem({ children }) {
  return (
    <button className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors">
      {children}
    </button>
  )
}

export default function Navbar({ onMenuToggle }) {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-sidebarBorder h-16 flex items-center px-3 sm:px-4 lg:px-6 gap-2">
      {/* Mobile menu toggle */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
      >
        <MdMenu size={22} />
      </button>

      {/* Page breadcrumb area */}
      <div className="flex-1" />

      {/* Right actions */}
        <div className="flex items-center gap-1 sm:gap-2">
        {/* Cart */}
        <Dropdown
          trigger={
            <div className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-500">
              <MdShoppingCart size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </div>
          }
        >
          <div className="px-4 py-2 text-xs font-semibold text-textMuted uppercase">Cart</div>
          <DropdownItem>Item 1 — $12.00</DropdownItem>
          <DropdownItem>Item 2 — $8.50</DropdownItem>
          <div className="border-t border-gray-100 mt-1 pt-1">
            <DropdownItem>View Cart</DropdownItem>
          </div>
        </Dropdown>

        {/* Notifications */}
        <Dropdown
          trigger={
            <div className="relative p-2 rounded-lg hover:bg-gray-100 text-gray-500">
              <MdNotifications size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </div>
          }
        >
          <div className="px-4 py-2 text-xs font-semibold text-textMuted uppercase">Notifications</div>
          <DropdownItem>New image uploaded</DropdownItem>
          <DropdownItem>Storage 80% full</DropdownItem>
        </Dropdown>

        {/* Profile */}
        <Dropdown
          trigger={
            <div className="flex items-center gap-1.5 pl-1.5 pr-1 py-1 rounded-lg hover:bg-gray-100 cursor-pointer">
              <img
                src="https://i.pravatar.cc/40?img=3"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="hidden md:block text-sm font-medium text-gray-700">Anna</span>
              <MdExpandMore size={16} className="hidden sm:block text-gray-400" />
            </div>
          }
        >
          <div className="px-4 py-2 text-xs font-semibold text-textMuted uppercase">Account</div>
          <DropdownItem>Profile</DropdownItem>
          <DropdownItem>Privacy Settings</DropdownItem>
          <div className="border-t border-gray-100 mt-1 pt-1">
            <DropdownItem>Logout</DropdownItem>
          </div>
        </Dropdown>
      </div>
    </header>
  )
}
