import React from 'react'
/*Things to do:
- Add a min and max width horizontall
- Make the bullet points in a horizontal layout
- Add a password kinda thing to access it
- Host it on github*/

const Home = () => {
  return (
    <div className='home'>
      (
      <div className='content' style={{ textAlign: 'center' }}>
        <div className='content'>
          <h1 style={{ marginBottom: '10px', marginTop: '100px' }}>About Me!!</h1>
          <p style={{ marginBottom: '10px' }}>
            I am studying Computer Science with a specialization in Machine Learning and Artificial Intelligence
            @ the University of Maryland, College Park
          </p>
          <p style={{ marginBottom: '10px' }}>
            I am interested in the intersection between computer science and the real-world. More specifically,
            I hope to work in the intersection of technology and finance. I am also interested in software engineering to build cool stuff
          </p>
          <h3 style={{ marginBottom: '10px', marginTop: '30px' }}>Some Competitions I attended:</h3>
          <ul style={{ padding: '0', listStyleType: 'none' }}>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226;
              <strong>Winner @ Hoya Hacks (Georgetown University)</strong>: Created a Platform which allows UMD students to find courses based on what the
              student is looking for using keywords as the input. Used Jaccard similarity index algorithm. Won the best use of
              Verbwire</li>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226;
              <strong>Winner @ HackNYU (New York University)</strong>: Created a Platform which allows digital educators to upload
              videos in a streamlined manner for e-courses. Incentivized students by encouraging in-platform virtual currency.
              Won the Best Financial hack</li>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226;
              <strong>AIME Qualifer</strong>: Qualified for American Invitational Mathematics Examination</li>
          </ul>

          {/* Courses*/}
          <h2 style={{ marginBottom: '10px', marginTop: '30px' }}>My Courses:</h2>
          <h3 style={{ marginBottom: '10px' }}>Computer Science:</h3>

          <ul style={{ padding: '0', listStyleType: 'none' }}>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226; Object-Oriented Programming I</li>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226; Object-Oriented Programming II</li>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226; Algorithms</li>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226; Organization of Programming Languages</li>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226; Computer Vision</li>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226; Introduction to Deep Learning</li>
          </ul>
          <h3 style={{ marginBottom: '10px', marginTop: '30px' }}>Mathematics:</h3>
          <ul style={{ padding: '0', listStyleType: 'none' }}>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226; Discrete Mathematics</li>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226; Linear Algebra</li>
          </ul>
          <h1 style={{ marginBottom: '10px', marginTop: '30px' }}>Skills</h1>
          <ul style={{ padding: '0', listStyleType: 'none' }}>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226; <strong>Langauges:</strong>: Java, Python, HTML/CSS, Javascript,
              C/C++, Ocaml, Ruby, Rust, Typescript</li>
            <li style={{ color: 'beige', fontWeight: '200', marginBottom: '10px' }}>&#8226; <strong>Frameworks:</strong>: NextJS, ReactJS
              NumPy, Pandas, SciPy, Matplotlib, Sk-Learn, Git, GitHub</li>
          </ul>

        </div>
      </div>
      );
    </div>
  )
}

export default Home
