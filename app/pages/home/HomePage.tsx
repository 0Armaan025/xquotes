"use client";
import HeroSection from '@/app/components/hero/HeroSection';
import ImageGeneratorPart from '@/app/components/image-gen/ImageGeneratorPart';
import React from 'react'

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
    <div className="spacer h-20"></div>
      <HeroSection/>  
      <ImageGeneratorPart/>
    </>
  );
}

export default HomePage