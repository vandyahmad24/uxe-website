import { getEvents } from 'lib/api'; 
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; 

const MediaList = () => {
  const [events, setEvents] = useState([]);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [hasPreviousPage, setHasPreviousPage] = useState(false);
  const [endCursor, setEndCursor] = useState('');
  const [startCursor, setStartCursor] = useState('');
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchInput, setSearchInput] = useState('');

  const fetchMoreEvents = async (direction = 'next', term = '') => {
    setLoading(true); 

    const cursor = direction === 'next' ? endCursor : startCursor;
    const data = await getEvents(10, cursor, term);

    setEvents(data.edges.map(edge => edge.node));
    setHasNextPage(data.pageInfo.hasNextPage);
    setHasPreviousPage(data.pageInfo.hasPreviousPage);
    setEndCursor(data.pageInfo.endCursor);
    setStartCursor(data.pageInfo.startCursor);

    setLoading(false); 
  };

  useEffect(() => {
    fetchMoreEvents();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput); 
    fetchMoreEvents('next', searchInput);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Event</h2>
        <div className="relative">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search by title"
              className="border px-4 py-2 rounded-full text-sm"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)} // Simpan input pengguna
            />
            <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full">
              Search
            </button>
          </form>
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="flex items-center bg-white rounded-lg shadow-md">
              <Image
                src={event.featuredImage?.node?.sourceUrl 
                  ? `https://api.uxe.ai${event.featuredImage.node.sourceUrl}` 
                  : '/images/placeholder.jpg'}
                alt={event.title}
                width={192} // Set sesuai ukuran yang kamu inginkan
                height={128} // Set sesuai ukuran yang kamu inginkan
                objectFit="cover"
                className="w-48 h-32 object-cover rounded-l-lg"
              />
              <div className="p-4 flex-1">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
                <p className="text-sm text-gray-500">Location information here</p>
                <div
                  className="text-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: event.excerpt }}
                />
              </div>
              <div className="px-4">
                <Link href={`/post/${event.slug}`}>
                  <p className="text-blue-500 text-sm font-semibold">
                    Read post &rarr;
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-6">
        <nav className="inline-flex">
          {hasPreviousPage && (
            <button
              onClick={() => fetchMoreEvents('previous', searchTerm)}
              className="px-3 py-2 text-sm text-gray-500 border rounded-l-lg"
            >
              &larr; Previous
            </button>
          )}
          {hasNextPage && (
            <button
              onClick={() => fetchMoreEvents('next', searchTerm)}
              className="px-3 py-2 text-sm text-gray-500 border rounded-r-lg"
            >
              Next &rarr;
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MediaList;
