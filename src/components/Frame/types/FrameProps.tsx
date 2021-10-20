import React from 'react';

export interface FrameProps {
  children: React.ReactNode;
  height?: number;
  theme?: 'light' | 'dark';
  width?: number;
}

export interface FrameStyleCreatorProps {
  height: number;
  width: number;
}
