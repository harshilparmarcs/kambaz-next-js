import { Form, Row, Col } from "react-bootstrap";

const formatDateForInput = (dateString: string | null | undefined): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

function DetailsForm({
  quiz,
  onChange,
}: {
  quiz: any;
  onChange: (field: string, value: any) => void;
}) {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control
          value={quiz.title || ""}
          onChange={(e) => onChange("title", e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={quiz.description || ""}
          onChange={(e) => onChange("description", e.target.value)}
        />
      </Form.Group>

      <Row>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Quiz Type</Form.Label>
            <Form.Select
              value={quiz.quizType}
              onChange={(e) => onChange("quizType", e.target.value)}
            >
              <option value="GRADED_QUIZ">Graded Quiz</option>
              <option value="PRACTICE_QUIZ">Practice Quiz</option>
              <option value="GRADED_SURVEY">Graded Survey</option>
              <option value="UNGRADED_SURVEY">Ungraded Survey</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Points</Form.Label>
            <Form.Control
              type="number"
              value={quiz.points ?? 0}
              onChange={(e) => onChange("points", Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Assignment Group</Form.Label>
            <Form.Select
              value={quiz.assignmentGroup}
              onChange={(e) => onChange("assignmentGroup", e.target.value)}
            >
              <option value="QUIZZES">Quizzes</option>
              <option value="EXAMS">Exams</option>
              <option value="ASSIGNMENTS">Assignments</option>
              <option value="PROJECT">Project</option>
            </Form.Select>
          </Form.Group>
        </Col>

        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Time Limit (minutes)</Form.Label>
            <Form.Control
              type="number"
              value={quiz.timeLimit ?? 20}
              onChange={(e) => onChange("timeLimit", Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              label="Shuffle Answers"
              checked={quiz.shuffleAnswers ?? true}
              onChange={(e) => onChange("shuffleAnswers", e.target.checked)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="switch"
              label="Multiple Attempts"
              checked={quiz.multipleAttempts ?? false}
              onChange={(e) => onChange("multipleAttempts", e.target.checked)}
            />
          </Form.Group>

          {quiz.multipleAttempts && (
            <Form.Group className="mb-3">
              <Form.Label>How Many Attempts</Form.Label>
              <Form.Control
                type="number"
                value={quiz.maxAttempts ?? 1}
                onChange={(e) => onChange("maxAttempts", Number(e.target.value))}
              />
            </Form.Group>
          )}
        </Col>

        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Access Code</Form.Label>
            <Form.Control
              value={quiz.accessCode || ""}
              onChange={(e) => onChange("accessCode", e.target.value)}
            />
          </Form.Group>

          <Form.Check
            className="mb-2"
            type="switch"
            label="One Question at a Time"
            checked={quiz.oneQuestionAtATime ?? true}
            onChange={(e) =>
              onChange("oneQuestionAtATime", e.target.checked)
            }
          />
          <Form.Check
            className="mb-2"
            type="switch"
            label="Webcam Required"
            checked={quiz.webcamRequired ?? false}
            onChange={(e) => onChange("webcamRequired", e.target.checked)}
          />
          <Form.Check
            className="mb-2"
            type="switch"
            label="Lock Questions After Answering"
            checked={quiz.lockQuestionsAfterAnswering ?? false}
            onChange={(e) =>
              onChange("lockQuestionsAfterAnswering", e.target.checked)
            }
          />
        </Col>
      </Row>

      <Row>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="datetime-local"
              value={formatDateForInput(quiz.dueDate)}
              onChange={(e) =>
                onChange(
                  "dueDate",
                  e.target.value ? new Date(e.target.value).toISOString() : null
                )
              }
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Available From</Form.Label>
            <Form.Control
              type="datetime-local"
              value={formatDateForInput(quiz.availableDate)}
              onChange={(e) =>
                onChange(
                  "availableDate",
                  e.target.value ? new Date(e.target.value).toISOString() : null
                )
              }
            />
          </Form.Group>
        </Col>
        <Col md={4}>
          <Form.Group className="mb-3">
            <Form.Label>Until</Form.Label>
            <Form.Control
              type="datetime-local"
              value={formatDateForInput(quiz.untilDate)}
              onChange={(e) =>
                onChange(
                  "untilDate",
                  e.target.value ? new Date(e.target.value).toISOString() : null
                )
              }
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}
export default DetailsForm;