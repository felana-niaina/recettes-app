import React from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  )
}

export default ThemeToggle