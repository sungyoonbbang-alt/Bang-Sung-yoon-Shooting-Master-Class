import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Trophy } from 'lucide-react';
import { NavItem } from '../types';
import Button from './Button';

const NAV_ITEMS: NavItem[] = [
  { label: '홈', path: '/' },
  { label: '슈팅 클리닉', path: '/clinic' },
  { label: '슈터스 포럼', path: '/forum' },
  { label: '마이 슈팅 로그', path: '/mylog' },
  { label: '코치 소개', path: '/coach' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky-header border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 flex items-center gap-2">
              <Trophy className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl tracking-tight text-gray-900">BANG'S SHOOTING</span>
            </NavLink>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-medium transition-colors ${
                    isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Button variant="primary" size="sm">로그인</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-primary bg-red-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-4 px-3">
              <Button variant="primary" className="w-full">로그인</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;