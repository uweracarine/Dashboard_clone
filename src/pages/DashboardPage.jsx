import { Link } from 'react-router-dom'
import { MdImage, MdVideoLibrary, MdInsertDriveFile, MdFolderOpen, MdDelete, MdArrowForward } from 'react-icons/md'
import mockImages from '../data/images'
import mockVideos from '../data/videos'

const folders = [
  {
    label: 'Images',
    to: '/file-manager/images',
    icon: MdImage,
    color: 'bg-primary/10 text-primary',
    count: mockImages.length,
    previews: mockImages.slice(0, 4).map((i) => i.url),
  },
  {
    label: 'Videos',
    to: '/file-manager/videos',
    icon: MdVideoLibrary,
    color: 'bg-info/10 text-info',
    count: mockVideos.length,
    previews: mockVideos.slice(0, 4).map((v) => `https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`),
  },
  {
    label: 'Documents',
    to: '/file-manager/documents',
    icon: MdInsertDriveFile,
    color: 'bg-yellow-100 text-yellow-600',
    count: 0,
    previews: [],
  },
  {
    label: 'All Files',
    to: '/file-manager/all-files',
    icon: MdFolderOpen,
    color: 'bg-green-100 text-green-600',
    count: mockImages.length + mockVideos.length,
    previews: [...mockImages.slice(0, 2).map((i) => i.url), ...mockVideos.slice(0, 2).map((v) => `https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`)],
  },
  {
    label: 'Trash',
    to: '/file-manager/trash',
    icon: MdDelete,
    color: 'bg-red-100 text-red-500',
    count: 0,
    previews: [],
  },
]

function FolderCard({ folder }) {
  const Icon = folder.icon
  return (
    <Link
      to={folder.to}
      className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
    >
      {/* Preview grid */}
      <div className="h-36 bg-gray-50 grid grid-cols-2 grid-rows-2 gap-0.5 overflow-hidden">
        {folder.previews.length > 0 ? (
          folder.previews.map((src, i) => (
            <img key={i} src={src} alt="" className="w-full h-full object-cover" loading="lazy" />
          ))
        ) : (
          <div className="col-span-2 row-span-2 flex items-center justify-center">
            <Icon size={48} className="text-gray-200" />
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${folder.color}`}>
            <Icon size={16} />
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">{folder.label}</p>
            <p className="text-xs text-textMuted">{folder.count} file{folder.count !== 1 ? 's' : ''}</p>
          </div>
        </div>
        <MdArrowForward size={18} className="text-gray-300 group-hover:text-primary transition-colors" />
      </div>
    </Link>
  )
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold text-gray-800">File Manager</h1>
        <p className="text-sm text-textMuted mt-0.5">Dashboard</p>
      </div>

      {/* Storage summary */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-semibold text-gray-800">Storage Used</h2>
          <span className="text-sm font-semibold text-primary">68%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div className="bg-primary h-2 rounded-full" style={{ width: '68%' }} />
        </div>
        <p className="text-xs text-textMuted mt-2">13.6 GB of 20 GB used</p>
      </div>

      {/* Folder cards */}
      <div>
        <h2 className="text-base font-semibold text-gray-800 mb-4">Folders</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {folders.map((f) => (
            <FolderCard key={f.label} folder={f} />
          ))}
        </div>
      </div>

      {/* Recent images strip */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-800">Recent Images</h2>
          <Link to="/file-manager/images" className="text-xs text-primary hover:underline flex items-center gap-1">
            View all <MdArrowForward size={14} />
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin">
          {mockImages.slice(0, 8).map((img) => (
            <Link key={img.id} to="/file-manager/images" className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-gray-100 hover:opacity-80 transition-opacity">
              <img src={img.url} alt={img.name} className="w-full h-full object-cover" loading="lazy" />
            </Link>
          ))}
        </div>
      </div>

      {/* Recent videos strip */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-800">Recent Videos</h2>
          <Link to="/file-manager/videos" className="text-xs text-primary hover:underline flex items-center gap-1">
            View all <MdArrowForward size={14} />
          </Link>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-1 scrollbar-thin">
          {mockVideos.slice(0, 8).map((v) => (
            <Link key={v.id} to="/file-manager/videos" className="relative flex-shrink-0 w-28 h-18 sm:w-32 sm:h-20 rounded-lg overflow-hidden bg-gray-900 hover:opacity-80 transition-opacity">
              <img
                src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
                alt={v.name}
                className="w-full h-full object-cover opacity-80"
                loading="lazy"
              />
              <span className="absolute inset-0 flex items-center justify-center">
                <MdVideoLibrary size={22} className="text-white drop-shadow" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
