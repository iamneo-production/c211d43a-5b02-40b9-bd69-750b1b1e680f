import React, { useState } from 'react';
import '../../Styles.css';
function AccountDeletion() {
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isAccountDeletionEnabled, setIsAccountDeletionEnabled] = useState(false);
  const [isConfirmationPopupVisible, setIsConfirmationPopupVisible] = useState(false);

  const validatePassword = () => {
    setIsPasswordValid(password !== '');
    setIsAccountDeletionEnabled(password !== '');
  };

  const handleDeleteAccount = () => {
    setIsConfirmationPopupVisible(true);
  };

  const handleCancelDeletion = () => {
    setIsConfirmationPopupVisible(false);
  };

  const handleConfirmDeletion = () => {
    setPassword('');
    setIsPasswordValid(false);
    setIsAccountDeletionEnabled(false);
    setIsConfirmationPopupVisible(false);
  };

  return (
    
    <div className="account-deletion">
    <h4>Delete Account</h4>
      <div className="password-validation">
        <input
          type="password"
          placeholder="Enter current password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isPasswordValid ? (
          <span className="tick-mark">&#x2713;</span>
        ) : (
          <span className="cross-mark">&#x2717;</span>
        )}
      </div>
      <div className="delete-account">
        <button
          className={`delete-button ${isAccountDeletionEnabled ? 'enabled' : 'disabled'}`}
          onClick={handleDeleteAccount}
          disabled={!isAccountDeletionEnabled}
        >
          Delete Account
        </button>
      </div>
      {isConfirmationPopupVisible && (
        <div className="confirmation-popup">
          <p>Are you sure you want to delete your account?</p>
          <div className="popup-buttons">
            <button className="cancel-button" onClick={handleCancelDeletion}>
              Cancel
            </button>
            <button className="confirm-button" onClick={handleConfirmDeletion}>
              Delete Permanently
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AccountDeletion;
