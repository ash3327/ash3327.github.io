import { Github, Linkedin } from 'lucide-react'
import { Button } from "@mui/material"

import navData from '../../data/navData.json';
import { smoothScroll } from '../../utils/smoothScroll';

export default function MenuBar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-800">
              <span style={{ color: 'var(--theme-color)' }}>Sam</span> Tam, Ka Ho
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {
              navData.navigation.main.map((item) => (
                <a href={item.url} onClick={(e) => { e.preventDefault(); smoothScroll(`${item.url}`); }} className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 text-sm font-medium">
                  {item.label}
                </a>
              ))
            }
          </div>
          <div className="flex items-center space-x-4">
            <Button size="medium" color="inherit">
              <a href="https://github.com/ash3327" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button size="medium" color="inherit">
              <a href="https://linkedin.com/in/khtam-51a008256" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav >
  )
}