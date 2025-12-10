
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button, Card, Form, Alert } from "react-bootstrap";
import * as client from "../../../../client";
import * as questionsClient from "../../../../questionsClient";

export default function TakeQuizPage() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const [quiz, setQuiz] = useState<any | null>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [result, setResult] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!qid) return;
      const [qz, qs] = await Promise.all([
        client.findQuizById(qid as string),
        questionsClient.findQuestionsForQuiz(qid as string),
      ]);
      setQuiz(qz);
      setQuestions(qs);
    };
    load();
  }, [qid]);

  const setAnswer = (questionId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const submit = async () => {
    setError(null);
    try {
      const payload = questions.map((q) => ({
        question: q._id,
        value: answers[q._id],
      }));
      const attempt = await questionsClient.submitQuizAttempt(
        qid as string,
        payload
      );
      setResult(attempt);
      setTimeout(() => {
        router.push(`/Courses/${cid}/Quizzes/${qid}`);
      }, 1500);
    } catch (e: any) {
      setError(e?.response?.data?.message || "Unable to submit quiz.");
    }
  };


  if (!quiz) return <p>Loading quiz...</p>;

  return (
    <div>
      <h3>{quiz.title}</h3>

      {result && (
        <Alert variant="info">
          Score: {result.score} / {result.maxScore}
        </Alert>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {questions.map((q) => (
        <Card key={q._id} className="mb-3">
          <Card.Body>
            <Card.Title>
              {q.title} ({q.points} pts)
            </Card.Title>
            <Card.Text>{q.text}</Card.Text>

            {q.type === "MULTIPLE_CHOICE" && (
              <Form>
                {(q.choices || []).map((c: any, idx: number) => (
                  <Form.Check
                    key={idx}
                    type="radio"
                    name={q._id}
                    label={c.text}
                    checked={answers[q._id] === c.text}
                    onChange={() => setAnswer(q._id, c.text)}
                  />
                ))}
              </Form>
            )}

            {q.type === "TRUE_FALSE" && (
              <Form.Select
                value={
                  answers[q._id] === true
                    ? "true"
                    : answers[q._id] === false
                    ? "false"
                    : ""
                }
                onChange={(e) =>
                  setAnswer(q._id, e.target.value === "true")
                }
              >
                <option value="">Select...</option>
                <option value="true">True</option>
                <option value="false">False</option>
              </Form.Select>
            )}

            {q.type === "FILL_IN_BLANK" && (
              <Form.Control
                value={answers[q._id] || ""}
                onChange={(e) => setAnswer(q._id, e.target.value)}
              />
            )}
          </Card.Body>
        </Card>
      ))}

      <div className="d-flex gap-2">
        <Button variant="danger" onClick={submit}>
          Submit Quiz
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}`)}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
