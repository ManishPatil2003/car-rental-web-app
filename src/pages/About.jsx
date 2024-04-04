import React from 'react'

const About = () => {
    return (
        <div className="bg-gray-100">
            <main className="max-w-7xl px-4 py-8 mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-lg text-gray-600">
                            We are a passionate team dedicated to providing a seamless and
                            enjoyable car rental experience for our customers. We offer a
                            wide variety of reliable vehicles to meet your travel needs,
                            whether it's a weekend getaway, a business trip, or a road trip
                            adventure.
                        </p>
                        <p className="text-lg text-gray-600">
                            Our commitment to exceptional customer service is our top
                            priority. We strive to make the car rental process simple and
                            stress-free, with online booking, friendly and knowledgeable
                            staff, and competitive rates.
                        </p>
                    </div>
                    <img
                        src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Car Rental About Us"
                        className="rounded-lg shadow-md"
                    />
                </div>

            </main>
        </div>

    )
}

export default About