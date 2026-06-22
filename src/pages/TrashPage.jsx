import { MdDelete } from 'react-icons/md'
export default function TrashPage() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <MdDelete size={28} className="text-textMuted" />
      </div>
      <h2 className="text-lg font-semibold text-gray-700">Trash</h2>
      <p className="text-sm text-textMuted mt-1">No deleted files.</p>
    </div>
  )
}
