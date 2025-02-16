import { Github, Linkedin } from 'lucide-react'
import { Button } from "@mui/material"

import navData from '../../data/navData.json';
import { smoothScroll } from '../../utils/smoothScroll';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  return (
    <nav className="App-header">
      <div className="flex h-16 w-full mx-20">
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="text-xl green">
            Sam Tam, Ka Ho
          </Link>
        </div>
        <div className="flex justify-end flex-1">
          <div className="App-nav hidden sm:ml-6 sm:flex sm:space-x-8 mx-16">
            {
              navData.navigation.main.map((item) => (
                <Link to={item.url}>
                  {item.label}
                </Link>
              ))
            }
          </div>
          <div className="App-nav flex items-center space-x-4">
            <a href="https://github.com/ash3327" target="_blank" rel="noopener noreferrer" className="btn">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/khtam-51a008256" target="_blank" rel="noopener noreferrer" className="btn">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </nav >
  )
}