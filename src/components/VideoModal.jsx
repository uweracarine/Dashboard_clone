import { useEffect } from 'react'
import { MdClose, MdVideoFile } from 'react-icons/md'
import { formatDate, timeAgo } from '../utils/time'

export default function VideoModal({ video, onClose }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!video) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-y-auto max-h-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <MdVideoFile size={18} className="text-primary" />
            <span className="text-sm font-semibold text-gray-800 truncate max-w-sm">
              {video.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <MdClose size={18} />
          </button>
        </div>

        {/* YouTube embed */}
        <div className="relative bg-black" style={{ paddingTop: '56.25%' }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Metadata */}
        <div className="px-4 sm:px-5 py-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
          <div>
            <p className="text-xs text-textMuted uppercase tracking-wide mb-1">File Name</p>
            <p className="font-medium text-gray-700 truncate">{video.name}</p>
          </div>
          <div>
            <p className="text-xs text-textMuted uppercase tracking-wide mb-1">Duration</p>
            <p className="font-medium text-gray-700">{video.duration}</p>
          </div>
          <div>
            <p className="text-xs text-textMuted uppercase tracking-wide mb-1">Created</p>
            <p className="font-medium text-gray-700">{formatDate(video.createdAt)}</p>
          </div>
          <div>
            <p className="text-xs text-textMuted uppercase tracking-wide mb-1">Last Opened</p>
            <p className="font-medium text-info">{timeAgo(video.lastOpenedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
