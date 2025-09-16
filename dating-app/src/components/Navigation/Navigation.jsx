import React from 'react';
import { Heart, User, MessageCircle, Settings } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ activeTab, onTabChange, matchCount = 0 }) => {
  const navItems = [
    {
      id: 'discover',
      icon: Heart,
      label: 'Discover',
      color: '#ff6b6b'
    },
    {
      id: 'matches',
      icon: MessageCircle,
      label: 'Matches',
      color: '#4caf50',
      badge: matchCount > 0 ? matchCount : null
    },
    {
      id: 'profile',
      icon: User,
      label: 'Profile',
      color: '#2196f3'
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Settings',
      color: '#9c27b0'
    }
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              className={`nav-item ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(item.id)}
              style={{
                '--item-color': item.color
              }}
            >
              <div className="nav-icon">
                <Icon size={24} />
                {item.badge && (
                  <span className="nav-badge">{item.badge}</span>
                )}
              </div>
              <span className="nav-label">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;
