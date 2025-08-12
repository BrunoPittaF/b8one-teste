import React from 'react';

interface IBannerProps {
    imageDesktop: string;
    imageMobile: string;
}


const Banner: React.FC<IBannerProps> = ({imageDesktop, imageMobile}: IBannerProps ) => {
  return (
      <section className="w-full mb-8 overflow-hidden bg-gradient-to-r">
        <div className="mx-auto flex items-center justify-center">
          <picture>
            <source media="(max-width: 768px)" srcSet={imageMobile} />
            <img src={imageDesktop} alt="banner" />
          </picture>
        </div>
      </section>
  );
}

export default Banner;