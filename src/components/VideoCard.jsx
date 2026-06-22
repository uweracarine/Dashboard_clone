import { MdPlayCircle, MdVideoFile } from 'react-icons/md'
import { timeAgo, formatDate } from '../utils/time'

export default function VideoCard({ video, onClick, compact = false }) {
  const thumb = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`

  return (
    <div
      onClick={() => onClick(video)}
      className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 ${
        compact ? 'w-44 sm:w-52 flex-shrink-0' : 'w-full'
      }`}
    >
      {/* Thumbnail with play overlay */}
      <div className={`relative overflow-hidden bg-gray-900 group ${compact ? 'h-28 sm:h-32' : 'h-40 sm:h-44'}`}>
        <img
          src={thumb}
          alt={video.name}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-75 transition-opacity"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <MdPlayCircle size={compact ? 36 : 48} className="text-white drop-shadow-lg opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
        </div>
        {/* Duration badge */}
        <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded font-medium">
          {video.duration}
        </span>
      </div>

      <div className="p-3">
        <div className="flex items-center gap-1.5 mb-1">
          <MdVideoFile size={14} className="text-primary flex-shrink-0" />
          <p className="text-xs font-semibold text-gray-800 truncate">{video.name}</p>
        </div>
        <p className="text-xs text-textMuted">{formatDate(video.createdAt)}</p>
        <p className="text-xs text-info mt-0.5">Opened {timeAgo(video.lastOpenedAt)}</p>
      </div>
    </div>
  )
}
