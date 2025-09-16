import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Heart, X, MapPin } from 'lucide-react';
import './SwipeCard.css';

const SwipeCard = ({ user, onSwipe, onRemove }) => {
  const [exitX, setExitX] = useState(0);
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -125, 0, 125, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event, info) => {
    const threshold = 125;
    
    if (Math.abs(info.offset.x) > threshold) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      const exitDirection = info.offset.x > 0 ? 200 : -200;
      
      setExitX(exitDirection);
      onSwipe(user, direction);
      
      setTimeout(() => {
        onRemove(user.id);
      }, 200);
    }
  };

  const handleAction = (action) => {
    const direction = action === 'like' ? 'right' : 'left';
    const exitDirection = action === 'like' ? 200 : -200;
    
    setExitX(exitDirection);
    onSwipe(user, direction);
    
    setTimeout(() => {
      onRemove(user.id);
    }, 200);
  };

  const cardVariants = {
    initial: { scale: 0.95, y: 30, opacity: 0 },
    animate: { scale: 1, y: 0, opacity: 1 },
    exit: { 
      x: exitX,
      opacity: 0,
      scale: 0.5,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.div
      className="swipe-card"
      ref={cardRef}
      style={{ x, rotate, opacity }}
      variants={cardVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.05 }}
    >
      <div className="card-image">
        {user.photos && user.photos[0] ? (
          <img src={user.photos[0]} alt={user.name} />
        ) : (
          <div className="image-placeholder">
            <span>No Photo</span>
          </div>
        )}
        
        {/* Swipe indicators */}
        <motion.div 
          className="swipe-indicator like"
          style={{ opacity: useTransform(x, [0, 150], [0, 1]) }}
        >
          <Heart size={40} />
          <span>LIKE</span>
        </motion.div>
        
        <motion.div 
          className="swipe-indicator pass"
          style={{ opacity: useTransform(x, [-150, 0], [1, 0]) }}
        >
          <X size={40} />
          <span>PASS</span>
        </motion.div>
      </div>

      <div className="card-info">
        <div className="basic-info">
          <h3>{user.name}, {user.age}</h3>
          {user.location && (
            <div className="location">
              <MapPin size={16} />
              <span>{user.location}</span>
            </div>
          )}
        </div>

        {user.bio && (
          <p className="bio">{user.bio}</p>
        )}

        {user.interests && user.interests.length > 0 && (
          <div className="interests">
            {user.interests.slice(0, 3).map((interest, index) => (
              <span key={index} className="interest-tag">{interest}</span>
            ))}
            {user.interests.length > 3 && (
              <span className="interest-more">+{user.interests.length - 3} more</span>
            )}
          </div>
        )}
      </div>

      <div className="card-actions">
        <button 
          className="action-btn pass-btn"
          onClick={() => handleAction('pass')}
        >
          <X size={24} />
        </button>
        <button 
          className="action-btn like-btn"
          onClick={() => handleAction('like')}
        >
          <Heart size={24} />
        </button>
      </div>
    </motion.div>
  );
};

export default SwipeCard;
