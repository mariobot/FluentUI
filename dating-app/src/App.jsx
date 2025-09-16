import { useState } from 'react'
import SwipeInterface from './components/SwipeInterface/SwipeInterface'
import Profile from './components/Profile/Profile'
import Navigation from './components/Navigation/Navigation'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('discover')
  const [matches, setMatches] = useState([])
  const [userProfile, setUserProfile] = useState({
    name: 'Alex',
    age: 26,
    bio: 'Software developer who loves hiking and good coffee ☕',
    interests: ['Coding', 'Hiking', 'Coffee', 'Photography'],
    photos: []
  })

  const handleMatch = (match) => {
    setMatches(prev => [...prev, match])
    // You could show a match notification here
  }

  const handleProfileSave = (updatedProfile) => {
    setUserProfile(updatedProfile)
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'discover':
        return <SwipeInterface onMatch={handleMatch} />
      case 'matches':
        return (
          <div className="matches-view">
            <div className="matches-header">
              <h2>Your Matches</h2>
              <p>{matches.length} matches found</p>
            </div>
            {matches.length === 0 ? (
              <div className="no-matches">
                <h3>No matches yet!</h3>
                <p>Start swiping to find your perfect match</p>
              </div>
            ) : (
              <div className="matches-grid">
                {matches.map((match) => (
                  <div key={match.id} className="match-card">
                    <img src={match.user.photos[0]} alt={match.user.name} />
                    <h4>{match.user.name}</h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        )
      case 'profile':
        return (
          <Profile
            user={userProfile}
            onSave={handleProfileSave}
          />
        )
      case 'settings':
        return (
          <div className="settings-view">
            <div className="settings-header">
              <h2>Settings</h2>
            </div>
            <div className="settings-options">
              <div className="setting-item">
                <h4>Discovery Settings</h4>
                <p>Age range, distance, and other preferences</p>
              </div>
              <div className="setting-item">
                <h4>Notifications</h4>
                <p>Manage your notification preferences</p>
              </div>
              <div className="setting-item">
                <h4>Privacy</h4>
                <p>Control who can see your profile</p>
              </div>
            </div>
          </div>
        )
      default:
        return <SwipeInterface onMatch={handleMatch} />
    }
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>💕 LoveSwipe</h1>
      </header>
      
      <main className="app-content">
        {renderContent()}
      </main>
      
      <Navigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        matchCount={matches.length}
      />
    </div>
  )
}

export default App
