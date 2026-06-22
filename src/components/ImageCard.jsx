import { MdImage } from 'react-icons/md'
import { timeAgo, formatDate } from '../utils/time'

export default function ImageCard({ image, onClick, compact = false }) {
  return (
    <div
      onClick={() => onClick(image)}
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
        compact ? 'w-44 sm:w-48 flex-shrink-0' : 'w-full'
      }`}
    >
      <div className={`relative overflow-hidden bg-gray-100 ${compact ? 'h-28 sm:h-32' : 'h-40 sm:h-44'}`}>
        <img
          src={image.url}
          alt={image.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors" />
      </div>

      <div className="p-3">
        <div className="flex items-center gap-1.5 mb-1">
          <MdImage size={14} className="text-primary flex-shrink-0" />
          <p className="text-xs font-semibold text-gray-800 truncate">{image.name}</p>
        </div>
        <p className="text-xs text-textMuted">{formatDate(image.createdAt)}</p>
        <p className="text-xs text-info mt-0.5">Opened {timeAgo(image.lastOpenedAt)}</p>
      </div>
    </div>
  )
}
