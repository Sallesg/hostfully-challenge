import React from 'react';
import {
  Figures,
  ImagesSlot,
  InfoSection,
  MainFigure,
  WrapperProperty,
} from './styles';

interface PropertyTemplateProps {
  images: string[]; // Array of image URLs
  title: string;
  location: string;
  guests: number;
  bedroom: number;
  beds: number;
  bath: number;
  extraInfo: string;
}

// TODO: Create a file to this MOCK
export const propertyData: PropertyTemplateProps = {
  images: [
    'https://a0.muscache.com/im/pictures/miso/Hosting-777608750459748865/original/45ab063c-2a7d-4a92-9484-361ef9202e33.jpeg?im_w=1200',
    'https://a0.muscache.com/im/pictures/miso/Hosting-777608750459748865/original/d994ffe2-1fc6-4e6d-a2f8-b0737398c333.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-777608750459748865/original/9a420736-2d5c-4d8c-9cb3-2bc1f5348fec.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-777608750459748865/original/860118e9-799a-4f46-a9a6-0d63df468a97.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-777608750459748865/original/1634b5c2-f3e4-4f1f-a697-f6a53dce62dd.jpeg?im_w=720',
  ],
  title: 'Bungalow Sol',
  location: 'Entire cabin in Imbituba, Brazil',
  guests: 4,
  bedroom: 1,
  beds: 2,
  bath: 1,
  extraInfo:
    'Bungalow Sol, is located on Ribanceira beach, high on the hill with a privileged view of the sea. Stunning! A quiet and cozy setting amidst nature with total privacy and safety. Ideal for a couple and family with up to two children. Discover our new space that offers a deck with SPA and all the necessary appliances and utensils, air-conditioned environment, water with gas heating, portable American barbecue and 500 mb wifi.',
};

export const Property: React.FC = () => {
  return (
    <WrapperProperty>
      <h2>{propertyData.title}</h2>
      <ImagesSlot>
        <MainFigure>
          <figure>
            <img src={propertyData.images[0]} alt="Main" />
          </figure>
        </MainFigure>
        <Figures>
          {propertyData.images.slice(1, 6).map((image, index) => (
            <figure key={index}>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                style={{ borderTopRightRadius: index === 1 ? '12px' : '' }}
              />
            </figure>
          ))}
        </Figures>
      </ImagesSlot>
      <InfoSection>
        <h3>Location: {propertyData.location}</h3>
        <div>
          <span>{propertyData.guests} guests - </span>
          <span>{propertyData.bedroom} bedroom - </span>
          <span>{propertyData.beds} beds - </span>
          <span>{propertyData.bath} bath</span>
        </div>
        <p>{propertyData.extraInfo}</p>
      </InfoSection>
    </WrapperProperty>
  );
};
