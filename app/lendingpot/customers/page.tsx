"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Customers() {   
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to the Customers Page</h1>
    </div>
  );
}