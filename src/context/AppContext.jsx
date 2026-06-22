import { createContext, useContext, useReducer, useMemo } from 'react'
import mockImages from '../data/images'

const AppContext = createContext(null)

const initialState = {
  images: mockImages,
  searchQuery: '',
  selectedImage: null,
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.payload }
    case 'OPEN_IMAGE':
      return { ...state, selectedImage: action.payload }
    case 'CLOSE_IMAGE':
      return { ...state, selectedImage: null }
    default:
      return state
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const filteredImages = useMemo(() => {
    if (!state.searchQuery.trim()) return state.images
    const q = state.searchQuery.toLowerCase()
    return state.images.filter((img) => img.name.toLowerCase().includes(q))
  }, [state.images, state.searchQuery])

  const recentlyViewed = useMemo(
    () => [...state.images].sort((a, b) => b.lastOpenedAt - a.lastOpenedAt).slice(0, 6),
    [state.images]
  )

  return (
    <AppContext.Provider value={{ state, dispatch, filteredImages, recentlyViewed }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
