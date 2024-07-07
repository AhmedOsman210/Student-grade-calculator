import React from 'react';

const GradeCalculator = ({ grades }) => {
  const averageGrade = grades.length ? (grades.reduce((acc, curr) => acc + curr.grade, 0) / grades.length).toFixed(2) : 0;
  const highestGrade = grades.length ? Math.max(...grades.map(g => g.grade)).toFixed(2) : 0;
  const lowestGrade = grades.length ? Math.min(...grades.map(g => g.grade)).toFixed(2) : 0;

  return (
    <div className="p-4 mt-4">
      <h2 className="text-xl text-center mb-2">Grade Statistics</h2>
      <div className="flex justify-around">
        <div className="p-2">
          <p className="text-lg">Average Grade: {averageGrade}</p>
        </div>
        <div className="p-2">
          <p className="text-lg">Highest Grade: {highestGrade}</p>
        </div>
        <div className="p-2">
          <p className="text-lg">Lowest Grade: {lowestGrade}</p>
        </div>
      </div>
    </div>
  );
};

export default GradeCalculator;
