import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import SwipeCard from '../SwipeCard/SwipeCard';
import './SwipeInterface.css';

const SwipeInterface = ({ onMatch }) => {
  const [users, setUsers] = useState([]);
  const [matches, setMatches] = useState([]);

  // Sample data - in a real app this would come from an API
  const sampleUsers = [
    {
      id: 1,
      name: 'Emma',
      age: 25,
      photos: ['https://images.unsplash.com/photo-1494790108755-2616b612b637?w=400&h=400&fit=crop&crop=face'],
      bio: 'Love hiking, reading, and trying new coffee shops!',
      interests: ['Hiking', 'Coffee', 'Books', 'Travel'],
      location: 'New York, NY'
    },
    {
      id: 2,
      name: 'Sophie',
      age: 28,
      photos: ['https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'],
      bio: 'Photographer and adventure seeker. Always up for exploring new places!',
      interests: ['Photography', 'Travel', 'Art', 'Music'],
      location: 'Los Angeles, CA'
    },
    {
      id: 3,
      name: 'Maya',
      age: 26,
      photos: ['https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face'],
      bio: 'Yoga instructor who loves cooking and trying new cuisines.',
      interests: ['Yoga', 'Cooking', 'Health', 'Meditation'],
      location: 'San Francisco, CA'
    },
    {
      id: 4,
      name: 'Zoe',
      age: 24,
      photos: ['https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face'],
      bio: 'Tech enthusiast and rock climbing fanatic. Let\'s grab some bubble tea!',
      interests: ['Tech', 'Rock Climbing', 'Gaming', 'Bubble Tea'],
      location: 'Seattle, WA'
    },
    {
      id: 5,
      name: 'Luna',
      age: 27,
      photos: ['https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop&crop=face'],
      bio: 'Artist and musician looking for someone to share adventures with.',
      interests: ['Art', 'Music', 'Concerts', 'Museums'],
      location: 'Austin, TX'
    }
  ];

  useEffect(() => {
    setUsers(sampleUsers);
  }, []);

  const handleSwipe = (user, direction) => {
    if (direction === 'right') {
      // Simulate match logic - in a real app, you'd check if the other user also liked you
      const isMatch = Math.random() > 0.5; // 50% chance of match for demo
      
      if (isMatch) {
        const newMatch = {
          id: Date.now(),
          user,
          matchedAt: new Date()
        };
        setMatches(prev => [...prev, newMatch]);
        
        if (onMatch) {
          onMatch(newMatch);
        }
      }
    }
  };

  const handleRemoveCard = (userId) => {
    setUsers(prev => prev.filter(user => user.id !== userId));
  };

  const loadMoreUsers = () => {
    // In a real app, this would fetch more users from an API
    console.log('Loading more users...');
  };

  useEffect(() => {
    if (users.length < 2) {
      loadMoreUsers();
    }
  }, [users]);

  if (users.length === 0) {
    return (
      <div className="swipe-interface">
        <div className="no-users">
          <h3>No more potential matches!</h3>
          <p>Check back later for new people in your area.</p>
          <button className="reload-btn" onClick={loadMoreUsers}>
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="swipe-interface">
      <div className="cards-container">
        <AnimatePresence>
          {users.slice(0, 3).reverse().map((user, index) => (
            <div
              key={user.id}
              className="card-wrapper"
              style={{
                zIndex: users.length - index,
                transform: `scale(${1 - index * 0.05}) translateY(${index * -8}px)`,
                opacity: index < 2 ? 1 : 0.5
              }}
            >
              {index === 0 && (
                <SwipeCard
                  user={user}
                  onSwipe={handleSwipe}
                  onRemove={handleRemoveCard}
                />
              )}
              {index > 0 && (
                <div className="background-card">
                  <div className="card-preview">
                    {user.photos && user.photos[0] ? (
                      <img src={user.photos[0]} alt={user.name} />
                    ) : (
                      <div className="image-placeholder">No Photo</div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </AnimatePresence>
      </div>

      {matches.length > 0 && (
        <div className="recent-matches">
          <h4>Recent Matches ({matches.length})</h4>
        </div>
      )}
    </div>
  );
};

export default SwipeInterface;
