"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Button, Card, Form, Alert } from "react-bootstrap";
import * as client from "../../../../client";
import * as questionsClient from "../../../../questionsClient";

export default function QuizPreviewPage() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const [quiz, setQuiz] = useState<any | null>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState<{ score: number; max: number } | null>(
    null
  );

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

  if (!quiz) return <p>Loading preview...</p>;
  if (!questions.length) return <p>No questions in this quiz yet.</p>;

  const current = questions[index];

  const setAnswer = (questionId: string, value: any) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const goto = (i: number) => {
    if (i >= 0 && i < questions.length) setIndex(i);
  };

  const gradeLocally = () => {
    let s = 0;
    let max = 0;

    for (const q of questions) {
      const val = answers[q._id];
      max += q.points || 0;
      let correct = false;

      if (q.type === "MULTIPLE_CHOICE") {
        const c = (q.choices || []).find((ch: any) => ch.isCorrect);
        correct = c && c.text === val;
      } else if (q.type === "TRUE_FALSE") {
        correct = !!q.correctBoolean === !!val;
      } else if (q.type === "FILL_IN_BLANK") {
        const accepted = (q.correctAnswers || []).map((t: string) =>
          t.trim().toLowerCase()
        );
        correct =
          accepted.length > 0 &&
          accepted.includes(String(val || "").trim().toLowerCase());
      }

      if (correct) s += q.points || 0;
    }

    setScore({ score: s, max });
  };

  return (
    <div>
      <h3>Preview: {quiz.title}</h3>

      {score && (
        <Alert variant="info">
          Preview score: {score.score} / {score.max}
        </Alert>
      )}

      {/* Jump navigation */}
      <div className="mb-3">
        {questions.map((q, i) => (
          <Button
            key={q._id}
            size="sm"
            className="me-1 mb-1"
            variant={i === index ? "primary" : "outline-secondary"}
            onClick={() => goto(i)}
          >
            {i + 1}
          </Button>
        ))}
      </div>

      {/* One question at a time */}
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>
            Question {index + 1} of {questions.length}: {current.title} (
            {current.points} pts)
          </Card.Title>
          <Card.Text>{current.text}</Card.Text>

          {current.type === "MULTIPLE_CHOICE" && (
            <Form>
              {(current.choices || []).map((c: any, idx: number) => (
                <Form.Check
                  key={idx}
                  type="radio"
                  name={current._id}
                  label={c.text}
                  checked={answers[current._id] === c.text}
                  onChange={() => setAnswer(current._id, c.text)}
                />
              ))}
            </Form>
          )}

          {current.type === "TRUE_FALSE" && (
            <Form.Select
              value={
                answers[current._id] === true
                  ? "true"
                  : answers[current._id] === false
                  ? "false"
                  : ""
              }
              onChange={(e) =>
                setAnswer(current._id, e.target.value === "true")
              }
            >
              <option value="">Select...</option>
              <option value="true">True</option>
              <option value="false">False</option>
            </Form.Select>
          )}

          {current.type === "FILL_IN_BLANK" && (
            <Form.Control
              value={answers[current._id] || ""}
              onChange={(e) => setAnswer(current._id, e.target.value)}
            />
          )}
        </Card.Body>
      </Card>

      <div className="d-flex justify-content-between mb-3">
        <Button
          variant="outline-secondary"
          disabled={index === 0}
          onClick={() => goto(index - 1)}
        >
          Previous
        </Button>
        <Button
          variant="outline-secondary"
          disabled={index === questions.length - 1}
          onClick={() => goto(index + 1)}
        >
          Next
        </Button>
      </div>

      <div className="d-flex gap-2">
        <Button variant="danger" onClick={gradeLocally}>
          Preview Submit
        </Button>
        <Button
          variant="outline-secondary"
          onClick={() => router.push(`/Courses/${cid}/Quizzes/${qid}`)}
        >
          Back to Details
        </Button>
      </div>
    </div>
  );
}
