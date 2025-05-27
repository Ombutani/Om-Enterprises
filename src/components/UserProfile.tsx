
import React from 'react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { User, LogOut, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToast } from '@/hooks/use-toast';

const UserProfile: React.FC = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Signed out",
        description: "You have successfully logged out.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Sign out failed.",
        variant: "destructive",
      });
    }
  };

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center space-x-2 focus:ring-2 focus:ring-blue-500 px-2">
          <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-glow">
            <User className="w-5 h-5 text-white" />
          </div>
          <span className="hidden md:block font-medium text-blue-900 dark:text-blue-200">{user.email}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-60 bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-700 z-50">
        <div className="px-4 py-3">
          <p className="text-sm font-semibold text-blue-900 dark:text-blue-200">{user.email}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">Signed in</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Settings className="w-4 h-4 mr-2" />
          Account Settings
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut} className="text-red-500 focus:bg-red-50 dark:focus:bg-red-900/30">
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserProfile;
