import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  // const [questions, setQuestions] = useState([]);

return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm 
      /> : 
      <QuestionList 
        // setQuestions={setQuestions}
        // questions={questions}
        // handleChange={handleChange}
      />}
    </main>
  );
}

export default App;