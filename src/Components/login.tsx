"use server";
import { SignInButton } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

export default function Login() {
    
    const user = currentUser();
  return (
    <>
    
     {!user && (
          <SignInButton>
            <button>
              Login
            </button>
          </SignInButton>
         )}
    </>
  )
}
