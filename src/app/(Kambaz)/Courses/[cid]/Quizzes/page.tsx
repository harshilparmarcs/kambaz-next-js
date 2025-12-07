"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import * as client from "../../client";
import { Dropdown, Button, Table, Badge } from "react-bootstrap";

export default function QuizzesPage() {
  const { cid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const [quizzes, setQuizzes] = useState<any[]>([]);

  const isFaculty = currentUser?.role === "FACULTY";

  const fetchQuizzes = useCallback(async () => {
    if (!cid) return;
    const data = await client.findQuizzesForCourse(cid as string);
    data.sort((a: any, b: any) => {
      const da = a.availableDate
        ? new Date(a.availableDate).getTime()
        : Infinity;
      const db = b.availableDate
        ? new Date(b.availableDate).getTime()
        : Infinity;
      return da - db;
    });
    setQuizzes(data);
  }, [cid]);


  useEffect(() => {
    fetchQuizzes();
  }, [fetchQuizzes]);

  const handleAddQuiz = async () => {
    const quiz = await client.createQuizForCourse(cid as string);
    router.push(`/Courses/${cid}/Quizzes/${quiz._id}`); // Quiz Details
  };

  const handleDelete = async (qid: string) => {
    await client.deleteQuiz(qid);
    fetchQuizzes();
  };

  const togglePublish = async (quiz: any) => {
    if (!quiz) return;
    if (quiz.published) {
      await client.unpublishQuiz(quiz._id);
    } else {
      await client.publishQuiz(quiz._id);
    }
    await fetchQuizzes();
  };

  const goToDetails = (qid: string) => {
    router.push(`/Courses/${cid}/Quizzes/${qid}`);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Quizzes</h3>
        {isFaculty && (
          <Button variant="danger" onClick={handleAddQuiz}>
            + Quiz
          </Button>
        )}
      </div>

      {quizzes.length === 0 ? (
        <p>No quizzes yet. {isFaculty && "Click + Quiz to add one."}</p>
      ) : (
        <Table hover>
          <tbody>
            {quizzes.map((quiz) => (
              <tr key={quiz._id}>
                <td className="w-50">
                  <div
                    className="fw-bold text-primary"
                    style={{ cursor: "pointer" }}
                    onClick={() => goToDetails(quiz._id)}
                  >
                    {quiz.title}
                  </div>
                  <div className="text-muted small">
                    {/* availability / dates can be computed later */}
                    {quiz.points ?? 0} pts • {quiz?.questionsCount || 0} Questions
                  </div>
                </td>
                <td className="text-nowrap">
                  <Badge
                    bg={quiz.published ? "success" : "secondary"}
                    style={{ cursor: isFaculty ? "pointer" : "default" }}
                    onClick={isFaculty ? () => togglePublish(quiz) : undefined}
                  >
                    {quiz.published ? "Published" : "Unpublished"}
                  </Badge>
                </td>
                {isFaculty && (
                  <td className="text-end">
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="light"
                        size="sm"
                        id={`quiz-menu-${quiz._id}`}
                      >
                        ⋮
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => goToDetails(quiz._id)}>
                          Edit
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handleDelete(quiz._id)}>
                          Delete
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => togglePublish(quiz)}>
                          {quiz.published ? "Unpublish" : "Publish"}
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}
