import { MdAdd, MdSearch, MdImage } from 'react-icons/md'
import { useImages } from '../hooks/useImages'
import ImageCard from '../components/ImageCard'
import ImageModal from '../components/ImageModal'

export default function ImagesPage() {
  const { images, recentlyViewed, searchQuery, selectedImage, setSearch, openImage, closeImage } =
    useImages()

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-800">Images</h1>
          <p className="text-sm text-textMuted mt-0.5">File Manager</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
          <MdAdd size={18} />
          Add Image
        </button>
      </div>

      {/* Recently Viewed */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <h2 className="text-base font-semibold text-gray-800 mb-4">Recently Viewed</h2>
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
          {recentlyViewed.map((img) => (
            <ImageCard key={img.id} image={img} onClick={openImage} compact />
          ))}
        </div>
      </div>

      {/* All Images */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
          <h2 className="text-base font-semibold text-gray-800">All Images</h2>
          {/* Search */}
          <div className="relative w-full sm:w-64">
            <MdSearch
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-textMuted"
            />
            <input
              type="text"
              placeholder="Search by file name..."
              value={searchQuery}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        {images.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {images.map((img) => (
              <ImageCard key={img.id} image={img} onClick={openImage} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <MdImage size={28} className="text-textMuted" />
            </div>
            <p className="text-gray-500 font-medium">No images found</p>
            <p className="text-sm text-textMuted mt-1">
              {searchQuery ? `No results for "${searchQuery}"` : 'No images in this folder yet.'}
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedImage && <ImageModal image={selectedImage} onClose={closeImage} />}
    </div>
  )
}
