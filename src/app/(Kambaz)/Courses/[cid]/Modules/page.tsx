"use client";

import { useParams } from "next/navigation";
import ModulesControls from "./ModulesControls";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";

interface ModuleLesson {
  title: string;
  items: string[];
}

interface CourseModule {
  title: string;
  lessons: ModuleLesson[];
}

export default function Modules() {
  const params = useParams();
  const cid = params.cid as string;

  const courseModules: Record<string, CourseModule[]> = {
    "1234":[
      {
        title: "Week 1 - React Fundamentals",
        lessons: [
          { title: "LEARNING OBJECTIVES", items: ["Introduction to React", "Understanding JSX", "Component Basics"] },
          { title: "READING", items: ["React Documentation - Getting Started", "Modern JavaScript Features"] },
          { title: "SLIDES", items: ["Introduction to React", "JSX Syntax", "Component Architecture"] }
        ]
      },
      {
        title: "Week 2 - State and Props",
        lessons: [
          { title: "LEARNING OBJECTIVES", items: ["State Management", "Props Handling", "Event Handling in React"] }
        ]
      }
    ],
    "5678":[
      {
        title: "Week 1 - Web Development Basics",
        lessons: [
          { title: "LEARNING OBJECTIVES", items: ["HTML5 Structure", "CSS3 Styling", "Responsive Design"] },
          { title: "READING", items: ["MDN HTML Guide", "CSS Grid Tutorial"] },
          { title: "SLIDES", items: ["HTML5 Semantic Elements", "CSS Flexbox and Grid"] }
        ]
      },
      {
        title: "Week 2 - JavaScript Fundamentals",
        lessons: [
          { title: "LEARNING OBJECTIVES", items: ["ES6 Features", "DOM Manipulation", "Async Programming"] }
        ]
      }
    ],
    "5011":[
      {
        title: "Week 1 - Software Development Principles",
        lessons: [
          { title: "LEARNING OBJECTIVES", items: ["Software Development Life Cycle", "Version Control with Git", "Agile Methodologies"] }
        ]
      },
      { title: "Week 2 - Object-Oriented Programming",
        lessons: [
          { title: "LEARNING OBJECTIVES", items: ["Classes and Objects", "Inheritance and Polymorphism", "Design Patterns"] }
        ]
      } 
    ],
    "5012":[
      {
        title: "Week 1 - Cloud Computing Basics",
        lessons: [
          { title: "LEARNING OBJECTIVES", items: ["Cloud Service Models", "Introduction to AWS", "Setting up a Cloud Environment"] }
        ]
      },
    ],
    "5013":[
      {
        title: "Week 1 - UI/UX Design Fundamentals",
        lessons: [
          { title: "LEARNING OBJECTIVES", items: ["Design Principles", "User Research Methods", "Wireframing and Prototyping"] }
        ]
      },
    ]
  };

  const modules = courseModules[cid] || [
    {
      title: "Week 1 - Course Introduction",
      lessons: [
        { title: "LEARNING OBJECTIVES", items: ["Introduction to the course", "Course overview"] }
      ]
    }
  ];
  
  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />

      <ListGroup className="rounded-0" id="wd-modules">
        {modules.map((module:CourseModule , moduleIndex: number) => (
          <ListGroupItem key={moduleIndex} className="wd-module p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
               <BsGripVertical className="me-2 fs-3" />
               {module.title}
               <ModuleControlButtons/>
            </div>
          
          <ListGroup className="wd-lesson rounded-0">
              {module.lessons.map((lesson:ModuleLesson, lessonIndex:number) => (
                <ListGroupItem key={lessonIndex} className="wd-lesson p-2 ps-2">
                  <div className="wd-lesson-title">
                    <BsGripVertical className="me-2 fs-3" />
                    {lesson.title}
                    <LessonControlButtons />
                  </div>
        
            <ListGroup className="wd-content rounded-0">
                    {lesson.items.map((item:string, itemIndex:number) => (
                      <ListGroupItem key={itemIndex} className="wd-content-item p-3 ps-1">
                        <BsGripVertical className="me-2 fs-3" />
                        {item}
                        <LessonControlButtons />
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                </ListGroupItem>
              ))}
            </ListGroup>
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
);}
