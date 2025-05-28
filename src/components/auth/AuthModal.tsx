import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode }) => {
  const [currentMode, setCurrentMode] = useState<'login' | 'register'>(mode);

  // When modal opened, set mode to prop value for smoother UX
  useEffect(() => {
    setCurrentMode(mode);
  }, [mode, isOpen]);

  const handleSuccess = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-xl shadow-2xl p-0 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-4">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-bold gradient-text mb-2 pt-8">
            {currentMode === 'login' ? 'Welcome Back!' : 'Create Your Account'}
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col space-y-4 px-4 py-2">
          {currentMode === 'login' ? (
            <>
              <LoginForm
                onSuccess={handleSuccess}
                onSwitchToRegister={() => setCurrentMode('register')}
              />
              <p className="text-center text-xs text-gray-500 mb-0">
                Don&apos;t have an account?{" "}
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => setCurrentMode('register')}
                >
                  Register here
                </button>
              </p>
            </>
          ) : (
            <>
              <RegisterForm
                onSuccess={handleSuccess}
                onSwitchToLogin={() => setCurrentMode('login')}
              />
              <p className="text-center text-xs text-gray-500 mb-0">
                Already have an account?{" "}
                <button
                  className="text-blue-600 hover:underline"
                  onClick={() => setCurrentMode('login')}
                >
                  Sign in
                </button>
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
