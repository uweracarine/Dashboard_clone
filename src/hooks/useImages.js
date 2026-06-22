import { useApp } from '../context/AppContext'

export function useImages() {
  const { state, dispatch, filteredImages, recentlyViewed } = useApp()

  return {
    images: filteredImages,
    recentlyViewed,
    searchQuery: state.searchQuery,
    selectedImage: state.selectedImage,
    setSearch: (q) => dispatch({ type: 'SET_SEARCH', payload: q }),
    openImage: (img) => dispatch({ type: 'OPEN_IMAGE', payload: img }),
    closeImage: () => dispatch({ type: 'CLOSE_IMAGE' }),
  }
}
