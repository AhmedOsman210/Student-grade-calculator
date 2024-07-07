import React, { useState, useEffect } from 'react';

const GradeForm = ({ addGrade, updateGrade, editingGrade }) => {
  const [student, setStudent] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');

  useEffect(() => {
    if (editingGrade) {
      setStudent(editingGrade.student);
      setSubject(editingGrade.subject);
      setGrade(editingGrade.grade);
    }
  }, [editingGrade]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingGrade) {
      updateGrade({ student, subject, grade: parseFloat(grade), index: editingGrade.index });
    } else {
      addGrade({ student, subject, grade: parseFloat(grade) });
    }
    setStudent('');
    setSubject('');
    setGrade('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        placeholder="Student Name"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
        className="border p-2 m-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="border p-2 m-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        className="border p-2 m-2 w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 m-2 rounded w-full">
        {editingGrade ? 'Update Grade' : 'Add Grade'}
      </button>
    </form>
  );
};

export default GradeForm;
