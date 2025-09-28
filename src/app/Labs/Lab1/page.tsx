"use client";

import Link from "next/link";
import Image from "next/image";

export default function Lab1() {
  return (
    <div id="wd-lab1">
      <h1>Harshil Parmar - MSCS</h1>

      <h2>Lab Assignments</h2>
      <ul>
        <li><Link href="/Labs/Lab1" id="wd-lab1-link">Lab 1: HTML Examples</Link></li>
        <li><Link href="/Labs/Lab2" id="wd-lab2-link">Lab 2: CSS Basics</Link></li>
        <li><Link href="/Labs/Lab3" id="wd-lab3-link">Lab 3: JavaScript Fundamentals</Link></li>
      </ul>

      <hr />
      <h2>Kambaz Application</h2>
      <ul>
        <li><Link href="/" id="wd-kambaz-link">Kambaz Application</Link></li>
      </ul>
      <hr />

      <h2>Source Code</h2>
      <ul>
        <li><a href="https://github.com/harshilparmarcs/kambaz-next-js" id="wd-github" target="_blank">GitHub Repository</a></li>
      </ul>

      <hr />
      <h2>Lab 1</h2>
      <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
              Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>
      {/* do the next exercise here */}
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1">
          This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
        </p>
        <p  id="wd-p-2">
          This is the second paragraph. Even though there is a deliberate white gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right.
        </p>
        <p  id="wd-p-3">
          This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
        </p>

        <div id="wd-lists">
          <h4>List Tags</h4>
            <h5>Ordered List Tag — How to make pancakes:</h5>
            <ol id="wd-pancakes">
          <li>Mix dry ingredients</li>
          <li>Add wet ingredients</li>
          <li>Stir to combine</li>
          <li>Heat a skillet or griddle</li>
          <li>Pour batter onto the skillet</li>
          <li>Cook until bubbly on top</li>
          <li>Flip and cook the other side</li>
          <li>Serve and enjoy!</li>
        </ol>

        <h5>My favorite recipe (ordered list)</h5>
        <ol id="wd-your-favorite-recipe">
          <li>Boil noodles</li>
          <li>Sauté vegetables</li>
          <li>Mix noodles with sauce and serve</li>
        </ol>

        <h5>Unordered List Tag</h5>
        <p>My favorite books (in no particular order):</p>
        <ul id="wd-my-books">
          <li>Dune</li>
          <li>Lord of the Rings</li>
          <li>Ender&apos;s Game</li>
          <li>Red Mars</li>
          <li>The Forever War</li>
        </ul>

        <p>Your favorite books (replace as needed):</p>
        <ul id="wd-your-books">
          <li>Book A</li>
          <li>Book B</li>
          <li>Book C</li>
        </ul>
      </div>

      <div id="wd-tables" style={{ marginTop: 16 }}>
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Q1</td><td>HTML</td><td>02/03/21</td><td>85</td></tr>
            <tr><td>Q2</td><td>CSS</td><td>02/10/21</td><td>90</td></tr>
            <tr><td>Q3</td><td>JavaScript</td><td>02/17/21</td><td>95</td></tr>
            <tr><td>Q4</td><td>DOM</td><td>02/24/21</td><td>88</td></tr>
            <tr><td>Q5</td><td>React</td><td>03/03/21</td><td>92</td></tr>
            <tr><td>Q6</td><td>Next.js</td><td>03/10/21</td><td>91</td></tr>
            <tr><td>Q7</td><td>Node.js</td><td>03/17/21</td><td>89</td></tr>
            <tr><td>Q8</td><td>Express</td><td>03/24/21</td><td>87</td></tr>
            <tr><td>Q9</td><td>MongoDB</td><td>03/31/21</td><td>93</td></tr>
            <tr><td>Q10</td><td>Deployment</td><td>04/07/21</td><td>94</td></tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images" style={{ marginTop: 16 }}>
        <h4>Image Tag</h4>
        <p>Starship image (remote):</p>
        <img id="wd-starship" width="400" height="300" src="https://media.wired.com/photos/5d2d09439a6762000863bf47/3:2/w_1600%2Cc_limit/Science_Starship_43895099655_64490f5eed_k.jpg"
          alt="Starship"
        />
        <p>Wall E:</p>
        <Image id="wd-teslabot" src="/images/walle.jpg" height="300" width="300" alt="WallE" />
      </div>

      <div id="wd-forms" style={{ marginTop: 16 }}>
        <h4>Form Elements</h4>
        <form id="wd-text-fields">
          <h5>Text Fields</h5>
          <label htmlFor="wd-text-fields-username">Username:</label><br />
          <input id="wd-text-fields-username" type="text" defaultValue="harshilparmar" /><br />

          <label htmlFor="wd-text-fields-password">Password:</label><br />
          <input id="wd-text-fields-password" type="password" defaultValue="123@#$asd" /><br />

          <label htmlFor="wd-text-fields-first-name">First name:</label><br />
          <input id="wd-text-fields-first-name" type="text" defaultValue="Harshil" /><br />

          <label htmlFor="wd-text-fields-last-name">Last name:</label><br />
          <input id="wd-text-fields-last-name" type="text" defaultValue="Parmar" /><br />

          <h5>Text boxes</h5>
          <label>Biography:</label><br />
          <textarea id="wd-textarea" cols={40} rows={6} defaultValue="I am a MSCS student learning Next.js and web development." />

          <h5 id="wd-buttons">Buttons</h5>
          <button type="button" onClick={() => alert("Life is Good!")} id="wd-all-good">Hello World!</button>

          <h5 id="wd-radio-buttons">Radio buttons</h5>
          <label>Favorite movie genre:</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-comedy" />
          <label htmlFor="wd-radio-comedy">Comedy</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-drama" />
          <label htmlFor="wd-radio-drama">Drama</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-scifi" defaultChecked />
          <label htmlFor="wd-radio-scifi">Science Fiction</label><br />
          <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
          <label htmlFor="wd-radio-fantasy">Fantasy</label><br />

          <h5 id="wd-checkboxes">Checkboxes</h5>
          <label>Favorite movie genre (choose one or more):</label><br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
          <label htmlFor="wd-chkbox-comedy">Comedy</label><br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-drama" defaultChecked />
          <label htmlFor="wd-chkbox-drama">Drama</label><br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" defaultChecked />
          <label htmlFor="wd-chkbox-scifi">Science Fiction</label><br />
          <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
          <label htmlFor="wd-chkbox-fantasy">Fantasy</label><br />

          <h5 id="wd-dropdowns">Dropdowns</h5>
          <label htmlFor="wd-select-one-genre">Select one</label><br />
          <select id="wd-select-one-genre" defaultValue="SCIFI">
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI">Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select><br />

          <label htmlFor="wd-select-many-genre">Select many</label><br />
          <select multiple id="wd-select-many-genre" defaultValue={["COMEDY", "SCIFI"]}>
            <option value="COMEDY">Comedy</option>
            <option value="DRAMA">Drama</option>
            <option value="SCIFI">Science Fiction</option>
            <option value="FANTASY">Fantasy</option>
          </select><br />

          <h5>Other HTML field types</h5>
          <label htmlFor="wd-text-fields-email">Email: </label>
          <input type="email" id="wd-text-fields-email" placeholder="jdoe@somewhere.com" defaultValue="harshilparmar428@gmail.com" /><br />

          <label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
          <input type="number" id="wd-text-fields-salary-start" defaultValue={100000} /><br />

          <label htmlFor="wd-text-fields-rating">Rating: </label>
          <input type="range" id="wd-text-fields-rating" defaultValue={4} max={5} /><br />

          <label htmlFor="wd-text-fields-dob">Date of birth: </label>
          <input type="date" id="wd-text-fields-dob" defaultValue="2000-01-21" /><br />
        </form>
      </div>

      <div id="wd-links" style={{ marginTop: 16 }}>
        <h4>Anchor Tag</h4>
        Please <a href="https://www.lipsum.com" id="wd-lipsum" target="_blank" rel="noreferrer">click here</a> to get dummy text. <br />
        <a id="wd-github" href="https://github.com/harshilparmarcs/kambaz-next-js#" target="_blank" rel="noreferrer">Link to GitHub repo</a>
      </div>
    </div>
    </div>
  )
}

