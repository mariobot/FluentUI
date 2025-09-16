import React, { useState } from 'react';
import { User, Edit, Camera } from 'lucide-react';
import './Profile.css';

const Profile = ({ user, isEditing = false, onSave }) => {
  const [editUser, setEditUser] = useState(user || {
    name: '',
    age: '',
    bio: '',
    interests: [],
    photos: []
  });

  const [isEditMode, setIsEditMode] = useState(isEditing);

  const handleSave = () => {
    if (onSave) {
      onSave(editUser);
    }
    setIsEditMode(false);
  };

  const addInterest = (interest) => {
    if (interest && !editUser.interests.includes(interest)) {
      setEditUser({
        ...editUser,
        interests: [...editUser.interests, interest]
      });
    }
  };

  const removeInterest = (interest) => {
    setEditUser({
      ...editUser,
      interests: editUser.interests.filter(i => i !== interest)
    });
  };

  if (isEditMode) {
    return (
      <div className="profile-container">
        <div className="profile-header">
          <h2>Edit Profile</h2>
        </div>
        
        <div className="profile-photo-section">
          <div className="profile-photo">
            {editUser.photos?.[0] ? (
              <img src={editUser.photos[0]} alt="Profile" />
            ) : (
              <div className="photo-placeholder">
                <Camera size={48} />
                <span>Add Photo</span>
              </div>
            )}
          </div>
        </div>

        <div className="profile-form">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              value={editUser.name}
              onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              value={editUser.age}
              onChange={(e) => setEditUser({ ...editUser, age: e.target.value })}
              placeholder="Your age"
            />
          </div>

          <div className="form-group">
            <label>Bio</label>
            <textarea
              value={editUser.bio}
              onChange={(e) => setEditUser({ ...editUser, bio: e.target.value })}
              placeholder="Tell us about yourself..."
              rows="4"
            />
          </div>

          <div className="form-group">
            <label>Interests</label>
            <div className="interests-container">
              {editUser.interests.map((interest, index) => (
                <span key={index} className="interest-tag" onClick={() => removeInterest(interest)}>
                  {interest} ×
                </span>
              ))}
            </div>
            <input
              type="text"
              placeholder="Add interest and press Enter"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  addInterest(e.target.value);
                  e.target.value = '';
                }
              }}
            />
          </div>

          <div className="form-actions">
            <button onClick={handleSave} className="save-btn">Save Profile</button>
            <button onClick={() => setIsEditMode(false)} className="cancel-btn">Cancel</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>My Profile</h2>
        <button onClick={() => setIsEditMode(true)} className="edit-btn">
          <Edit size={20} />
        </button>
      </div>

      <div className="profile-content">
        <div className="profile-photo">
          {user?.photos?.[0] ? (
            <img src={user.photos[0]} alt={user.name} />
          ) : (
            <div className="photo-placeholder">
              <User size={64} />
            </div>
          )}
        </div>

        <div className="profile-info">
          <h3>{user?.name || 'Your Name'}, {user?.age || '--'}</h3>
          <p className="bio">{user?.bio || 'Add a bio to tell others about yourself!'}</p>
          
          {user?.interests?.length > 0 && (
            <div className="interests">
              <h4>Interests</h4>
              <div className="interests-list">
                {user.interests.map((interest, index) => (
                  <span key={index} className="interest-tag">{interest}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
