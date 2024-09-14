import { useState } from 'react';
import Image from 'next/image';

const newsData = [
  {
    id: 1,
    title: 'Innovative AI-Driven Surveillance System Enhances Smart City Security',
    date: '22 December 2023',
    category: 'News',
    imageUrl: '/image/news1.png'
  },
  {
    id: 2,
    title: 'Citywide IoT Integration Boosts Efficiency of Smart Security Solutions',
    date: '22 December 2023',
    category: 'News',
    imageUrl: '/image/news2.png'
  },
  {
    id: 3,
    title: 'Next-Gen Facial Recognition Technology Implemented for Enhanced City Safety',
    date: '22 December 2023',
    category: 'News',
    imageUrl: '/image/news3.png'
  },
  {
    id: 4,
    title: 'Innovative Slider Enhances Smart City Security',
    date: '22 December 2023',
    category: 'News',
    imageUrl: '/image/news1.png'
  },
  {
    id: 5,
    title: 'Citywide Slider ',
    date: '22 December 2023',
    category: 'News',
    imageUrl: '/image/news2.png'
  },
  {
    id: 6,
    title: 'Next-Gen Slide',
    date: '22 December 2023',
    category: 'News',
    imageUrl: '/image/news3.png'
  },
  // Tambah lebih banyak berita jika perlu
];

const NewsEvent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(190_/_1440)),_190px))_48px_max(20px,_min(calc(100vw_*_(190_/_1440)),_190px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
      <div className="flex flex-col gap-[48px]">
    <div className="relative w-full py-12 px-4">
      {/* Bagian heading untuk judul */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-2">News & Event</h2>
          <p className="text-gray-500">Update</p>
        </div>

        {/* Tombol panah */}
        <div className="flex space-x-4">
          <button
            onClick={handlePrev}
            className="bg-white p-2 rounded-full shadow-md"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="bg-white p-2 rounded-full shadow-md"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Berita yang sedang ditampilkan */}
          {newsData.slice(currentIndex, currentIndex + 3).map((news) => (
            <div key={news.id} className="bg-white rounded-lg shadow-lg p-4">
              <div className="mb-4 w-full h-48 overflow-hidden rounded-lg">
                <Image
                  src={news.imageUrl}
                  alt={news.title}
                  layout="responsive"
                  width={320}
                  height={180}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="text-sm mb-2 text-gray-500">{news.category}</div>
              <h3 className="font-semibold text-lg mb-4">{news.title}</h3>
              <p className="text-gray-500 text-sm">{news.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tombol View More */}
      <div className="flex justify-center mt-8">
        <button className="bg-black text-white px-6 py-2 rounded-full">
          View More
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default NewsEvent;
