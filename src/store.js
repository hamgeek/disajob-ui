'use client'
import { create } from 'zustand'

const useDisability = create((set) => ({
  grayscale: (typeof window !== 'undefined' && localStorage.getItem('disability-grayscale')? 'on': 'off'),
  setGrayScale: (state) => set(() => ({ grayscale: state }))
}));

export {
    useDisability
}