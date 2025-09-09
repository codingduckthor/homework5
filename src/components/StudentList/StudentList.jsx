import StudentCard from "../StudentCard/StudentCard.jsx";

function StudentList() {
  const students = [
    { id: 1, name: "Иванов Иван Иванович" },
    { id: 2, name: "Петров Петр Петрович" },
    { id: 3, name: "Сидорова Анна Сергеевна" },
    { id: 1, name: "Иванов Иван Иванович" },
    { id: 2, name: "Петров Петр Петрович" },
    { id: 3, name: "Сидорова Анна Сергеевна" },
  ];

  return (
    <div>
      {students.map((student) => (
        <StudentCard key={student.id} name={student.name} />
      ))}
    </div>
  );
}

export default StudentList;
