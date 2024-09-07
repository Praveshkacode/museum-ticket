import React from 'react';
import MuseumCard from './MuseumCard';

const MuseumTicketOptionsSection = () => {
  const museumData = [
    {
      title: "Allahabad Museum",
      description: "The Allahabad Museum located in the picturesque Chandrashekhar Azad Park is among the National level museums of India.",
      imageUrl: "https://s3-ap-southeast-1.amazonaws.com/oddroad/poi_images/640/alahabad_allahabad_museum-1.jpg"
    },
    {
      title: "Anand Bhavan",
      description: "The Anand Bhavan is a historic house museum in Prayagraj, focusing on the Nehru family.",
      imageUrl: "https://www.rvcj.com/wp-content/uploads/2019/09/Anand-Bhawan.jpg"
    },
    {
      title: "Chandra Shekhar Azad Park",
      description: "In 1870, Prince Alfred of Saxe-Coburg and Gotha visited Prayagraj. A park, 133 acres in area and situated in the heart of the city’s English quarters, was built to commemorate the event.",
      imageUrl: "https://www.tourmyindia.com/socialimg/chandra-shekhar-azad-park-prayagraj.jpg"
    }
  ];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Museum Ticket Options
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {museumData.map((museum, index) => (
          <MuseumCard
            key={index}
            title={museum.title}
            description={museum.description}
            imageUrl={museum.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default MuseumTicketOptionsSection;
