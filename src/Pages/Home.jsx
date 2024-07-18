import React from 'react';

function Home() {
    return (
        <div className="p-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to the Student Grade Calculator</h1>
            <p className="mt-4 text-lg text-gray-600">Use this tool to calculate your grades easily.</p>
            <div className="mt-8 text-left">
                <h2 className="text-2xl font-semibold text-gray-700">Features</h2>
                <ul className="mt-4 list-disc list-inside text-gray-600">
                    <li>Easy to use interface</li>
                    <li>Quick calculations</li>
                    <li>Accurate results</li>
                    <li>Save and manage multiple assignments</li>
                </ul>
            </div>
            <div className="mt-8 text-left">
                <h2 className="text-2xl font-semibold text-gray-700">Get Started</h2>
                <p className="mt-4 text-gray-600">To start calculating your grades, navigate to the Grade Calculator page and enter your assignment scores and their respective weights.</p>
            </div>
        </div>
    );
}

export default Home;
