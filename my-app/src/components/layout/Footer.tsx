import { Linkedin, Github, Mail, MapPin } from 'lucide-react'

import navData from '../../data/navData.json';
import { smoothScroll } from '../../utils/smoothScroll';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">Sam K. H. Tam</h2>
            <p className="text-sm">Final-Year Undergraduate, Entry-Level <br></br>AI Engineer & Backend Developer</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:samkht3327.work@gmail.com" className="hover:text-gray-300">samkht3327.work@gmail.com</a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Wong Tai Sin, Hong Kong</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {
                navData.navigation.main.map((item) => (
                  <li><a href={item.url} onClick={(e) => { e.preventDefault(); smoothScroll(`${item.url}`); }} className="hover:text-gray-300">{item.label}</a></li>
                ))
              }
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="justify-start flex space-x-4">
              <a href="https://github.com/ash3327" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/khtam-51a008256" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p className="text-center">Copyright © 2024 Sam K. H. Tam. All rights reserved.</p>
          <p className="mt-2 text-center">
            This website was created in collaboration with <a href="https://v0.dev" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">v0.dev</a>, an AI-powered design tool, as a part of learning React and NodeJS. <br></br>
            The React app was deployed to GitHub Pages following the tutorial at <a href="https://github.com/gitname/react-gh-pages" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">react-gh-pages</a>.</p>
        </div>
      </div>
    </footer>
  )
}