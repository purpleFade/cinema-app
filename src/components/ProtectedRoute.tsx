import React from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: Props) {
  const isAuthenticated = true; // TODO: replace with real auth logic
  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
}
