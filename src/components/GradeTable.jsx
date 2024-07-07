import React from 'react';

const GradeTable = ({ grades, deleteGrade, startEditing }) => {
  return (
    <table className="min-w-full table-auto">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2">Student</th>
          <th className="px-4 py-2">Subject</th>
          <th className="px-4 py-2">Grade</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {grades.map((grade, index) => (
          <tr key={index} className="bg-gray-100">
            <td className="border px-4 py-2">{grade.student}</td>
            <td className="border px-4 py-2">{grade.subject}</td>
            <td className="border px-4 py-2">{grade.grade}</td>
            <td className="border px-4 py-2">
              <button onClick={() => startEditing(index)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
              <button onClick={() => deleteGrade(index)} className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default GradeTable;
