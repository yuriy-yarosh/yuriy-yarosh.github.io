import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

// Define the context type
interface MouseContextType {
  mousePosition: { x: number; y: number }
  normalizedPosition: { x: number; y: number } // -1 to 1 range
}

// Create context with default values
const MouseContext = createContext<MouseContextType>({
  mousePosition: { x: 0, y: 0 },
  normalizedPosition: { x: 0, y: 0 }
})

// Hook to use the mouse context
export const useMousePosition = () => useContext(MouseContext)

// Provider component
export const MouseProvider = ({ children }: { children: ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [normalizedPosition, setNormalizedPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Handler to update mouse position
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY })

      // Calculate normalized position (-1 to 1) with better accuracy
      // Use getBoundingClientRect to account for any offsets in the container
      const canvas = document.querySelector('canvas')

      if (canvas) {
        const rect = canvas.getBoundingClientRect()
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
        setNormalizedPosition({ x, y })
      } else {
        // Fallback if canvas not found
        const normalizedX = (event.clientX / window.innerWidth) * 2 - 1
        const normalizedY = -(event.clientY / window.innerHeight) * 2 + 1
        setNormalizedPosition({ x: normalizedX, y: normalizedY })
      }
    }

    // Add event listener
    window.addEventListener('mousemove', handleMouseMove)

    // Clean up
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return <MouseContext.Provider value={{ mousePosition, normalizedPosition }}>{children}</MouseContext.Provider>
}
