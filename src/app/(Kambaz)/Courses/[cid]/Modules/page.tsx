"use client";
import { useParams } from "next/navigation";

export default function Modules() {
  const params = useParams();
  const cid = params.cid as string;

  const courseModules: Record<string, any[]> = {
    "1234":[
      {
        title: "Week 1 - React Fundamentals",
        lessons: [
          { title: "LEARNING OBJECTIVES", items: ["Introduction to React", "Understanding JSX", "Component Basics"] },
          { title: "READING", items: ["React Documentation - Getting Started", "Modern JavaScript Features"] },
          { title: "SLIDES", items: ["Introduction to React", "JSX Syntax", "Component Architecture"] }
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
      <ul id="wd-modules">
        {modules.map((module:any , moduleIndex: number) => (
          <li key={moduleIndex} className="wd-module">
            <div className="wd-title">{module.title}</div>
            <ul className="wd-lessons">
              {module.lessons.map((lesson:any, lessonIndex:number) => (
                <li key={lessonIndex} className="wd-lesson">
                  <span className="wd-title">{lesson.title}</span>
                  <ul className="wd-content">
                    {lesson.items.map((item:string, itemIndex:number) => (
                      <li key={itemIndex} className="wd-content-item">{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
);}
