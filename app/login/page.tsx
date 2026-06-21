"use client";

import { useForm } from 'react-hook-form';
import { loginAction } from './actions';
import NavBar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { useState } from 'react';

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');

  const onSubmit = async (data: any) => {
    try {
      const formData = new FormData();
      formData.append('username', data.username);
      formData.append('password', data.password);
      await loginAction(formData);
    } catch (e: any) {
      setError(e.message || 'Login failed');
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col">
      <NavBar />
      <div className="flex-1 mx-auto max-w-md px-5 py-20 w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#181818]">Seller Login</h1>
        
        {error && (
          <div className="bg-red-50 text-red-500 p-3 rounded-md mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Username (admin)</label>
            <input 
              {...register('username', { required: true })}
              className="w-full h-12 rounded-md bg-[#f4f4f4] px-4 text-sm text-[#222] outline-none border border-transparent focus:border-[#9A35D4]"
              placeholder="Username"
            />
            {errors.username && <span className="text-xs text-red-500 mt-1">Username is required</span>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password (admin)</label>
            <input 
              type="password"
              {...register('password', { required: true })}
              className="w-full h-12 rounded-md bg-[#f4f4f4] px-4 text-sm text-[#222] outline-none border border-transparent focus:border-[#9A35D4]"
              placeholder="Password"
            />
            {errors.password && <span className="text-xs text-red-500 mt-1">Password is required</span>}
          </div>

          <button 
            type="submit"
            className="w-full h-12 rounded-md bg-[#9A35D4] text-white font-semibold shadow-md hover:bg-[#8E26C7] transition"
          >
            Sign In
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
