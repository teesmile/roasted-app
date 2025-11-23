import React, { useState } from 'react';
import { Button } from './Button';
import { Input } from './Input';

interface UserSearchProps {
  onSearch: (username: string) => void;
  isLoading: boolean;
}

export const UserSearch: React.FC<UserSearchProps> = ({ onSearch, isLoading }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username) {
      onSearch(username);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 animate-fade-in relative z-20">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-white">Who are you, really?</h2>
        <p className="text-gray-400">
          Enter your Farcaster handle to get{' '}
          <span className="font-chewy text-[1.2em]">
            Roasted
          </span>.
        </p>
      </div>

      <div className="space-y-4 bg-gray-800/50 p-6 rounded-xl border border-gray-700 backdrop-blur-sm relative">
        <Input 
          label="Farcaster Username" 
          placeholder="dwr" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          autoComplete="off"
        />
        
        <Button type="submit" className="w-full" isLoading={isLoading}>
         Roast Me
        </Button>
      </div>
    </form>
  );
};