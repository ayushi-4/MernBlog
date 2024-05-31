import React from 'react'
import { useSelector } from 'react-redux'
export default function ThemeProvider({children}) {
    const {theme} = useSelector(state => state.theme);
  return (
    <div className={theme}>
        <div className = "bg-white text-gray-700 dark:text-gray-100 dark:bg-[rgb(1,3,8)] min-h-screen">
        {children}
        </div>
          
    </div>
  )
}
