import React from 'react';
import { FaUserCircle, FaCheckCircle, FaStar } from 'react-icons/fa';

const Ratting = ({rat}) => {
  const starData = [
    { stars: 5, count: 4, label: '5 ★' },
    { stars: 4, count: 2, label: '4 ★' },
    { stars: 3, count: 0, label: '3 ★' },
    { stars: 2, count: 0, label: '2 ★' },
    { stars: 1, count: 0, label: '1 ★' },
  ];

  const reviews = [
    {
      name: 'Gita Day',
      isVerified: true,
      comment: 'Recommended tee for Men. it is going well with Jeans.',
      product: 'Space Grey | L',
      attributeRatings: {
        Colour: 4.6,
        Comfort: 4.6,
        Fit: 4.6,
      },
    },
    {
      name: 'Sam Ray',
      isVerified: true,
      comment: 'Recommended tee for Men. it is going well with Jeans.',
      product: 'Space Grey | L',
      attributeRatings: {
        Colour: 4.6,
        Comfort: 4.6,
        Fit: 4.6,
      },
    },
  ];

  const totalReviews = starData.reduce((sum, item) => sum + item.count, 0);

  return (
    <div className="flex mt-10  min-h-screen bg-white md:w-[50vw] p-4 ">
      <div className="bg-white rounded-lg shadow-lg  w-full p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">RATINGS AND REVIEWS</h2>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8 mb-6">
          {/* Overall Rating */}
          <div className="flex-shrink-0 flex items-center space-x-2">
            <span className="text-5xl font-bold text-gray-800">{rat}</span>
            <FaStar className="text-yellow-400 text-3xl" />
          </div>

          {/* Star Breakdown */}
          <div className="w-full">
            {starData.map((item) => (
              <div key={item.stars} className="flex items-center space-x-2 mb-1">
                <div className="flex-shrink-0 w-8 text-right text-sm text-gray-600">
                  {item.label}
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className={`bg-green-500 h-2.5 rounded-full`}
                    style={{ width: `${(item.count / totalReviews) * 100}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Individual Reviews */}
        {reviews.map((review, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex items-center mb-2">
              <FaUserCircle className="text-2xl text-gray-400 mr-2" />
              <span className="font-semibold text-gray-800">{review.name}</span>
              {review.isVerified && (
                <div className="flex items-center ml-2 text-green-500">
                  <FaCheckCircle className="text-sm" />
                  <span className="text-xs ml-1 text-gray-600">Verified Buyer</span>
                </div>
              )}
            </div>
            
            <div className="flex items-center mb-2">
              <FaStar className="text-base text-green-500" />
              <span className="text-base text-gray-700 font-medium ml-1">Good Buy</span>
              <span className="text-gray-500 text-sm ml-2">| {review.product}</span>
            </div>

            <p className="text-gray-600 mb-4">{review.comment}</p>

            <div className="flex flex-wrap space-x-2">
              {Object.entries(review.attributeRatings).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center space-x-1 border border-gray-300 rounded-full py-1 px-3 text-sm text-gray-700 bg-gray-50"
                >
                  <span className="text-green-500 font-bold">{value}/5</span>
                  <span className="text-gray-600 font-medium">{key}</span>
                </div>
              ))}
            </div>

            {/* Separator between reviews, not on the last one */}
            {index < reviews.length - 1 && <hr className="my-6 border-gray-200" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ratting;