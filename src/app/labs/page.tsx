// app/labs/page.tsx  (Next.js app router)
import Link from "next/link";

export default function LabsLanding() {
  return (
    <main style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <h1>Lab Exercises — Lab 1 (Web Development)</h1>
      <p><strong>Student:</strong> Harshil Parmar &nbsp; | &nbsp; <strong>Section:</strong> [Your Section]</p>
      <br />
      <nav aria-label="Lab links">
        <h2>Labs</h2>
        <ol>
          <li><Link href="/labs/lab1">Lab 1 — HTML Basics</Link></li>
          <li><Link href="/labs/lab2">Lab 2 — CSS Basics</Link></li>
          <li><Link href="/labs/lab3">Lab 3 — JavaScript</Link></li>
          <li></li>
        </ol>
      </nav>

      <br />

      <section>
        <h2>About this submission</h2>
        <p>This page demonstrates the HTML elements required by the assignment rubric.</p>
      </section>

      <br />

      <section>
        <h2>Lists</h2>
        <h3>Steps to run the site</h3>
        <ol>
          <li>Clone the repo</li>
          <li>Install dependencies</li>
          <li>Run `npm run dev`</li>
        </ol>

        <br />

        <h3>My favorite books</h3>
        <ul>
          <li>Clean Code</li>
          <li>The Pragmatic Programmer</li>
          <li>Design Patterns</li>
        </ul>
        
        <br />

        <h3>Recipe (ordered)</h3>
        <ol>
          <li>Preheat oven</li>
          <li>Mix ingredients</li>
          <li>Bake</li>
        </ol>
      </section>

      <br />

      <section>
        <h2>Table — sample scores</h2>
        <table border={1} cellPadding={6}>
          <thead>
            <tr><th>Date</th><th>Assignment</th><th>Score</th></tr>
          </thead>
          <tbody>
            <tr><td>2025-08-01</td><td>Q3</td><td>95</td></tr>
            <tr><td>2025-08-08</td><td>Q4</td><td>88</td></tr>
            <tr><td>2025-08-15</td><td>Q5</td><td>92</td></tr>
            <tr><td>2025-08-22</td><td>Q6</td><td>85</td></tr>
          </tbody>
        </table>
      </section>

      <br />

      <section>
        <h2>Images</h2>
        <p>Starship:</p>
        <img src="/images/starship.jpg" alt="Starship" width={320} />
        <p>Teslabot:</p>
        <img src="/images/teslabot.jpg" alt="Teslabot" width={320} />
      </section>

      <br />

      <section>
        <h2>Form examples</h2>
        <form>
          <label>Username: <input type="text" name="username" defaultValue="student123" /></label><br/>
          <label>Password: <input type="password" name="password" defaultValue="password"/></label><br/>
          <label>First name: <input type="text" name="fname" defaultValue="Harshil" /></label><br/>
          <label>Last name: <input type="text" name="lname" defaultValue="Parmar" /></label><br/>
          <label>Email: <input type="email" name="email" defaultValue="you@example.com" /></label><br/>
          <label>Salary: <input type="number" name="salary" /></label><br/>
          <label>Rate this lab: <input type="range" min="0" max="10" /></label><br/>
          <label>DOB: <input type="date" name="dob" defaultValue="2000-01-01"/></label><br/>

          <fieldset>
            <legend>Genres (radio)</legend>
            <label><input type="radio" name="genre" defaultChecked/> Comedy</label> &nbsp;
            <label><input type="radio" name="genre"/> Drama</label> &nbsp;
            <label><input type="radio" name="genre"/> SciFi</label> &nbsp;
            <label><input type="radio" name="genre"/> Fantasy</label>
          </fieldset>

          <br />

          <fieldset>
            <legend>Preferences (checkbox)</legend>
            <label><input type="checkbox" name="c1" defaultChecked/> Comedy</label> &nbsp;
            <label><input type="checkbox" name="c2"/> Drama</label> &nbsp;
            <label><input type="checkbox" name="c3"/> SciFi</label> &nbsp;
            <label><input type="checkbox" name="c4"/> Fantasy</label>
          </fieldset>

          <br />

          <label>Select one:
            <select defaultValue="option1" name="single">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </select>
          </label><br/>

          <br />
          <label>Select many:
            <select multiple name="many" size={4}>
              <option value="a">A</option>
              <option value="b">B</option>
              <option value="c">C</option>
            </select>
          </label><br/>

          <br />
          <label>Comments:<br/>
            <textarea defaultValue="Great lab!" rows={4} cols={40}></textarea>
          </label><br/>

          <button type="submit">Submit</button>
        </form>
      </section>

      <br />

      <section>
        <h2>Links / Repos</h2>
        <ul>
          <li><a href="https://github.com/your-username/kambaz" target="_blank" rel="noreferrer">Kambaz repo</a></li>
          <li><a href="https://github.com/your-username/labs" target="_blank" rel="noreferrer">Labs repo</a></li>
        </ul>

        <br />
        
        <p><Link href="/">Back to Kambaz</Link></p>
      </section>
    </main>
  );
}
