import { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import * as questionsClient from "../../../../questionsClient";
import QuestionEditorCard from "./QuestionEditorCard";

function QuestionsEditor({ quizId }: { quizId: string }) {
  const [questions, setQuestions] = useState<any[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);

  const load = async () => {
    const data = await questionsClient.findQuestionsForQuiz(quizId);
    setQuestions(data);
  };

  useEffect(() => {
    load();
  }, [quizId]);

  const addQuestion = async () => {
    const q = await questionsClient.createQuestionForQuiz(quizId, {
      title: "New Question",
      type: "MULTIPLE_CHOICE",
      points: 1,
      text: "",
      choices: [{ text: "Choice 1", isCorrect: true }],
      correctBoolean: true,
      correctAnswers: [],
    });
    setQuestions((prev) => [...prev, q]);
    setEditingId(q._id);
  };

  const saveQuestion = async (q: any) => {
    await questionsClient.updateQuestion(q._id, q);
    setEditingId(null);
    load();
  };

  const deleteQuestion = async (id: string) => {
    await questionsClient.deleteQuestion(id);
    setQuestions((prev) => prev.filter((q) => q._id !== id));
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5>Questions</h5>
        <Button size="sm" variant="danger" onClick={addQuestion}>
          + New Question
        </Button>
      </div>

      {questions.map((q) =>
        editingId === q._id ? (
          <QuestionEditorCard
            key={q._id}
            question={q}
            onChange={(updated : any) =>
              setQuestions((prev) =>
                prev.map((qq) => (qq._id === updated._id ? updated : qq))
              )
            }
            onSave={saveQuestion}
            onCancel={() => setEditingId(null)}
            onDelete={deleteQuestion}
          />
        ) : (
          <Card key={q._id} className="mb-2">
            <Card.Body>
              <div className="d-flex justify-content-between">
                <div>
                  <strong>{q.title}</strong> ({q.points} pts) – {q.type}
                </div>
                <div className="d-flex gap-2">
                  <Button
                    size="sm"
                    variant="outline-secondary"
                    onClick={() => setEditingId(q._id)}
                  >
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => deleteQuestion(q._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
        )
      )}
    </div>
  );
}
export default QuestionsEditor;