import { useEffect } from 'react'
import { MdClose, MdImage } from 'react-icons/md'
import { formatDate, timeAgo } from '../utils/time'

export default function ImageModal({ image, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <MdImage size={18} className="text-primary" />
            <span className="text-sm font-semibold text-gray-800 truncate max-w-xs">
              {image.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <MdClose size={18} />
          </button>
        </div>

        {/* Image */}
        <div className="bg-gray-50 flex items-center justify-center overflow-hidden" style={{ maxHeight: '55vh' }}>
          <img
            src={image.url}
            alt={image.name}
            className="max-w-full max-h-full object-contain"
            style={{ maxHeight: '55vh' }}
          />
        </div>

        {/* Metadata */}
        <div className="px-5 py-4 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
          <div>
            <p className="text-xs text-textMuted uppercase tracking-wide mb-1">File Name</p>
            <p className="font-medium text-gray-700 truncate">{image.name}</p>
          </div>
          <div>
            <p className="text-xs text-textMuted uppercase tracking-wide mb-1">Created</p>
            <p className="font-medium text-gray-700">{formatDate(image.createdAt)}</p>
          </div>
          <div>
            <p className="text-xs text-textMuted uppercase tracking-wide mb-1">Last Opened</p>
            <p className="font-medium text-info">{timeAgo(image.lastOpenedAt)}</p>
          </div>
          <div>
            <p className="text-xs text-textMuted uppercase tracking-wide mb-1">Size</p>
            <p className="font-medium text-gray-700">{image.size}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
