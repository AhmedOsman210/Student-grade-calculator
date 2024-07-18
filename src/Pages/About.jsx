import React from 'react';

function About() {
    return (
        <div className="p-6 text-center">
            <h1 className="text-4xl font-bold text-gray-800">About</h1>
            <p className="mt-4 text-lg text-gray-600">This application helps students calculate their grades based on their scores and the weight of each assignment. It's designed to be easy to use and provide accurate results.</p>
       
            
            <div className="mt-8 text-left">
                <h2 className="text-2xl font-semibold text-gray-700">Contact Us</h2>
                <p className="mt-4 text-gray-600">If you have any questions or feedback, feel free to reach out to us at <a href="mailto:support@gradecalc.com" className="text-blue-500">support@gradecalc.com</a>.</p>
            </div>
        </div>
    );
}

export default About;
