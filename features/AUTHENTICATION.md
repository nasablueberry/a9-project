# Feature: Authentication System

## Summary
Complete email/password and Google OAuth authentication system with password validation and session persistence.

## Implemented
- Email/Password Registration
  - Name input
  - Email validation
  - Password with multiple validators:
    - Must contain uppercase letter
    - Must contain lowercase letter
    - Minimum 6 characters
  - Optional photo URL for profile picture
  - Real-time validation feedback
  - Submit button disabled during request

- Email/Password Login
  - Email and password input fields
  - Password visibility toggle (eye icon)
  - "Remember me" ready (can be added later)
  - "Forgot password?" link
  - Forgot Password page with email reset
  - Password reset with Firebase email verification

- Google OAuth
  - Google Sign-In button on login/register pages
  - Automatic profile data population
  - Demo mode handling

- Session Management
  - Firebase onAuthStateChanged for persistence
  - Auto-refresh on page load
  - Logout functionality
  - Demo mode fallback with helpful warnings

## Files Modified
- src/pages/Login.jsx - Email/password + OAuth login
- src/pages/Register.jsx - User registration form
- src/pages/ForgotPassword.jsx - Password reset
- src/contexts/AuthContext.jsx - Central auth logic
- src/firebase/config.js - Firebase initialization
- src/firebase/config.default.js - Demo config

## Dependencies Used
- firebase/auth - Authentication library
- react-hot-toast - User notifications
- lucide-react - Eye icon for password toggle

## Testing
- Form validation works (password requirements enforced)
- Demo mode shows helpful warnings instead of errors
- Loading states display correctly
- Toast notifications appear for all outcomes
- Protected routes redirect to login when needed
