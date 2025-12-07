"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import * as client from "../../../client"; 
import * as questionsClient from "../../../questionsClient";
import { Button, Card, Row, Col, Badge, Alert } from "react-bootstrap";

export default function QuizDetailsPage() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [quiz, setQuiz] = useState<any | null>(null);
  const [latestAttempt, setLatestAttempt] = useState<any | null>(null);
  const [takeError, setTakeError] = useState<string | null>(null);
  
  const isFaculty = currentUser?.role === "FACULTY";



  useEffect(() => {
    const load = async () => {
      if (!qid) return;
      const data = await client.findQuizById(qid as string);
      setQuiz(data);

      if (currentUser?.role === "STUDENT") {
        try {
          const attempt = await questionsClient.findLatestAttempt(qid as string);
          setLatestAttempt(attempt || null);
        } catch {
          setLatestAttempt(null);
        }
      }
    };
    load();
  }, [qid, currentUser]);


  if (!quiz) {
    return <p>Loading quiz...</p>;
  }

  const goToEdit = () => {
    router.push(`/Courses/${cid}/Quizzes/${qid}/Edit`);
  };

  const goToPreview = () => {
    router.push(`/Courses/${cid}/Quizzes/${qid}/Preview`);
  };

  const startQuiz = async () => {
    setTakeError(null);
    try {
      const res = await questionsClient.canTakeQuiz(qid as string);
      if (!res.canTake) {
        setTakeError(res.reason || "No more attempts allowed for this quiz.");
        return;
      }
      router.push(`/Courses/${cid}/Quizzes/${qid}/Take`);
    } catch (e: any) {
      setTakeError(
        e?.response?.data?.message || "Unable to check quiz availability."
      );
    }
  };

  


  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>{quiz.title}</h3>
        {quiz.published ? (
          <Badge bg="success">Published</Badge>
        ) : (
          <Badge bg="secondary">Unpublished</Badge>
        )}
      </div>

        {currentUser?.role === "STUDENT" && latestAttempt && (
          <p className="text-muted">
            Last attempt: {latestAttempt.score} / {latestAttempt.maxScore}
          </p>
        )}

      <Card className="mb-3">
        <Card.Body>
          <Row>
            <Col md={4}>
              <div><strong>Quiz Type:</strong> {quiz.quizType}</div>
              <div><strong>Points:</strong> {quiz.points ?? 0}</div>
              <div><strong>Assignment Group:</strong> {quiz.assignmentGroup}</div>
              <div><strong>Time Limit:</strong> {quiz.timeLimit} minutes</div>
            </Col>
            <Col md={4}>
              <div><strong>Multiple Attempts:</strong> {quiz.multipleAttempts ? "Yes" : "No"}</div>
              {quiz.multipleAttempts && (
                <div><strong>How Many Attempts:</strong> {quiz.maxAttempts}</div>
              )}
              <div><strong>Shuffle Answers:</strong> {quiz.shuffleAnswers ? "Yes" : "No"}</div>
              <div><strong>One Question at a Time:</strong> {quiz.oneQuestionAtATime ? "Yes" : "No"}</div>
            </Col>
            <Col md={4}>
              <div><strong>Due:</strong> {quiz.dueDate && new Date(quiz.dueDate).toLocaleString()}</div>
              <div><strong>Available From:</strong> {quiz.availableDate && new Date(quiz.availableDate).toLocaleString()}</div>
              <div><strong>Until:</strong> {quiz.untilDate && new Date(quiz.untilDate).toLocaleString()}</div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <div className="mb-3">
        {quiz.description && (
          <div
            dangerouslySetInnerHTML={{ __html: quiz.description }}
          />
        )}
      </div>
      {takeError && <Alert variant="danger">{takeError}</Alert>}
      <div className="d-flex gap-2">
        {isFaculty ? (
          <>
            <Button variant="secondary" onClick={goToEdit}>
              Edit
            </Button>
            <Button
              variant="outline-secondary"
              onClick={goToPreview}
            >
              Preview
            </Button>
          </>
        ) : (
          <Button variant="danger" onClick={startQuiz}>
            Take the Quiz
          </Button>
        )}
      </div>
    </div>
  );
}
