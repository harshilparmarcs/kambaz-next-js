import { Card, Form, Button } from "react-bootstrap";

function QuestionEditorCard({
  question,
  onChange,
  onSave,
  onCancel,
  onDelete,
}: {
  question: any;
  onChange: (q: any) => void;
  onSave: (q: any) => void;
  onCancel: () => void;
  onDelete: (id: string) => void;
}) {
  const q = question;

  const updateField = (field: string, value: any) => {
    onChange({ ...q, [field]: value });
  };

  const updateChoice = (index: number, field: string, value: any) => {
    const choices = [...(q.choices || [])];
    choices[index] = { ...choices[index], [field]: value };
    onChange({ ...q, choices });
  };

  const addChoice = () => {
    const choices = [...(q.choices || []), { text: "", isCorrect: false }];
    onChange({ ...q, choices });
  };

  const removeChoice = (index: number) => {
    const choices = [...(q.choices || [])];
    choices.splice(index, 1);
    onChange({ ...q, choices });
  };

  const setCorrectChoice = (index: number) => {
    const choices = (q.choices || []).map((c: any, i: number) => ({
      ...c,
      isCorrect: i === index,
    }));
    onChange({ ...q, choices });
  };

  const updateAnswerList = (value: string) => {
    const parts = value.split("\n").map((s) => s.trim()).filter(Boolean);
    updateField("correctAnswers", parts);
  };

  return (
    <Card className="mb-2">
      <Card.Body>
        <Form>
          <Form.Group className="mb-2">
            <Form.Label>Title</Form.Label>
            <Form.Control
              value={q.title || ""}
              onChange={(e) => updateField("title", e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Points</Form.Label>
            <Form.Control
              type="number"
              value={q.points ?? 1}
              onChange={(e) => updateField("points", Number(e.target.value))}
            />
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Type</Form.Label>
            <Form.Select
              value={q.type}
              onChange={(e) => updateField("type", e.target.value)}
            >
              <option value="MULTIPLE_CHOICE">Multiple Choice</option>
              <option value="TRUE_FALSE">True / False</option>
              <option value="FILL_IN_BLANK">Fill in the Blank</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Question Text</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={q.text || ""}
              onChange={(e) => updateField("text", e.target.value)}
            />
          </Form.Group>

          {q.type === "MULTIPLE_CHOICE" && (
            <div className="mb-2">
              <Form.Label>Choices (select one correct)</Form.Label>
              {(q.choices || []).map((choice: any, index: number) => (
                <div
                  key={index}
                  className="d-flex align-items-center gap-2 mb-1"
                >
                  <Form.Check
                    type="radio"
                    checked={choice.isCorrect}
                    onChange={() => setCorrectChoice(index)}
                  />
                  <Form.Control
                    value={choice.text || ""}
                    onChange={(e) =>
                      updateChoice(index, "text", e.target.value)
                    }
                  />
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={() => removeChoice(index)}
                  >
                    ✕
                  </Button>
                </div>
              ))}
              <Button size="sm" variant="outline-secondary" onClick={addChoice}>
                + Add Choice
              </Button>
            </div>
          )}

          {q.type === "TRUE_FALSE" && (
            <Form.Group className="mb-2">
              <Form.Label>Correct Answer</Form.Label>
              <Form.Select
                value={q.correctBoolean ? "true" : "false"}
                onChange={(e) =>
                  updateField("correctBoolean", e.target.value === "true")
                }
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </Form.Select>
            </Form.Group>
          )}

          {q.type === "FILL_IN_BLANK" && (
            <Form.Group className="mb-2">
              <Form.Label>Accepted Answers (one per line)</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={(q.correctAnswers || []).join("\n")}
                onChange={(e) => updateAnswerList(e.target.value)}
              />
            </Form.Group>
          )}
        </Form>

        <div className="mt-2 d-flex gap-2">
          <Button size="sm" variant="secondary" onClick={() => onSave(q)}>
            Save / Update Question
          </Button>
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            size="sm"
            variant="outline-danger"
            onClick={() => onDelete(q._id)}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default QuestionEditorCard;
