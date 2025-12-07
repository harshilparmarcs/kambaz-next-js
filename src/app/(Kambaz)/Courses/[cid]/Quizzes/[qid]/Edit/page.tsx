"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Nav, Button, Form, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import * as client from "../../../../client"; 
import DetailsForm from "./DetailsForm";
import QuestionsEditor from "./QuestionsEditor";

type TabKey = "DETAILS" | "QUESTIONS";

export default function QuizEditPage() {
  const { cid, qid } = useParams();
  const router = useRouter();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [activeTab, setActiveTab] = useState<TabKey>("DETAILS");
  const [quiz, setQuiz] = useState<any | null>(null);

  useEffect(() => {
    const load = async () => {
      if (!qid) return;
      const data = await client.findQuizById(qid as string);
      setQuiz(data);
    };
    load();
  }, [qid]);

  if (!currentUser || currentUser.role !== "FACULTY") {
    router.push(`/Courses/${cid}/Quizzes/${qid}`);
    return null;
  }

  if (!quiz) return <p>Loading quiz...</p>;

  const handleFieldChange = (field: string, value: any) => {
    setQuiz((prev: any) => ({ ...prev, [field]: value }));
  };

  const saveAndGoDetails = async (publish?: boolean) => {
    await client.updateQuiz(qid as string, {
      ...quiz,
      ...(publish !== undefined ? { published: publish } : {}),
    });
    if (publish === true) {
      router.push(`/Courses/${cid}/Quizzes`);
    } else {
      router.push(`/Courses/${cid}/Quizzes/${qid}`);
    }
  };

  const cancel = () => {
    router.push(`/Courses/${cid}/Quizzes`);
  };

  return (
    <div>
      <h3>Edit Quiz</h3>

      <Nav variant="tabs" activeKey={activeTab}>
        <Nav.Item>
          <Nav.Link eventKey="DETAILS" onClick={() => setActiveTab("DETAILS")}>
            Details
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="QUESTIONS"
            onClick={() => setActiveTab("QUESTIONS")}
          >
            Questions
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div className="border border-top-0 p-3">
        {activeTab === "DETAILS" ? (
          <DetailsForm quiz={quiz} onChange={handleFieldChange} />
        ) : (
          <QuestionsEditor quizId={qid as string} />
        )}
      </div>

      <div className="mt-3 d-flex gap-2">
        <Button variant="secondary" onClick={() => saveAndGoDetails(false)}>
          Save
        </Button>
        <Button variant="danger" onClick={() => saveAndGoDetails(true)}>
          Save &amp; Publish
        </Button>
        <Button variant="outline-secondary" onClick={cancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
