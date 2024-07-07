import React, { useState, useEffect } from 'react';
import GradeForm from './GradeForm';
import GradeTable from './GradeTable';
import GradeCalculator from './GradeCalculator';

const Grade = () => {
  // Initialize grades state, defaulting to an empty array
  const [grades, setGrades] = useState(() => {
    const storedGrades = JSON.parse(localStorage.getItem('grades'));
    return storedGrades || [];
  });

  const [editingGrade, setEditingGrade] = useState(null);

  // Save grades to localStorage whenever grades change
  useEffect(() => {
    localStorage.setItem('grades', JSON.stringify(grades));
  }, [grades]);

  const addGrade = (grade) => {
    setGrades([...grades, grade]);
  };

  const deleteGrade = (index) => {
    const updatedGrades = grades.filter((_, i) => i !== index);
    setGrades(updatedGrades);
  };

  const startEditing = (index) => {
    setEditingGrade({ ...grades[index], index });
  };

  const updateGrade = (updatedGrade) => {
    const updatedGrades = grades.map((grade, i) =>
      i === updatedGrade.index ? updatedGrade : grade
    );
    setGrades(updatedGrades);
    setEditingGrade(null);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-2xl p-4">
        <h1 className="text-2xl mb-4 text-center">Student Grade Calculator</h1>
        <GradeForm addGrade={addGrade} updateGrade={updateGrade} editingGrade={editingGrade} />
        <GradeTable grades={grades} deleteGrade={deleteGrade} startEditing={startEditing} />
        <GradeCalculator grades={grades} />
      </div>
    </div>
  );
};

export default Grade;
