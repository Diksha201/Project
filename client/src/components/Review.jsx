import React from 'react';
import { FaStar } from 'react-icons/fa';
import test1Img from '../assets/images/test1.jpg';
import test2Img from '../assets/images/test2.jpg';
import test3Img from '../assets/images/test3.jpg';

const reviews = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    review: "Great experience with makeup and mehndi services. Everything was on time and well managed.",
    image: test1Img,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Mumbai",
    rating: 4,
    review: "VivaahVows made my wedding stress-free! The decorators and photographers were amazing!",
    image:  test3Img,

  },
  {
    id: 3,
    name: "Anjali Verma",
    location: "Jaipur",
    rating: 5,
    review: "Highly recommend VivaahVows! It connected us with top-class vendors in Jaipur effortlessly.",
    image: test2Img,

  },
];

const Review = () => {
  return (
    <section className="bg-pink-50 py-12 px-4 md:px-12" id="reviews">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-pink-900 mb-2">Happy Customers</h2>
        <p className="text-gray-600">See what our clients are saying about VivaahVows</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map(({ id, name, location, rating, review, image }) => (
          <div key={id} className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
            <img
              src={image}
              alt={name}
              className="w-20 h-20 rounded-full object-cover border-4 border-pink-200 mb-4"
            />
            <h3 className="text-xl font-semibold text-pink-900">{name}</h3>
            <p className="text-sm text-gray-500 mb-2">{location}</p>
            <div className="flex justify-center mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={`text-yellow-400 ${i < rating ? '' : 'opacity-30'}`} />
              ))}
            </div>
            <p className="text-gray-700 italic">“{review}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;