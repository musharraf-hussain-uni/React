import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import myImage from './mypic.png';

function Hi() {
  return (
    <div className="cv-container">
    {/* Left Panel */}
    <div className="left-panel">
      <div className="left-panel-inner">
        <div className="profile-picture">
<img src={myImage} alt="" />        
</div>
        <h2>Contact</h2>
        <hr />
        <p>Phone <br /> <a className='left-a' href="03322620690">03322620690</a></p>
        <p>Email <br /> <a className='left-a' href="musharrafhussain0123@gmail.com">musharrafhussain0123@gmail.com</a></p>
        <p>Address <br /> Your Address</p>
        <br />
        <h2>Education</h2>
        <hr />
        <p className='quali'>2020 - Present</p>
        <p className='study'>BS in Information Technology </p>
        <p className='quali'> Sir Syed University of Engineering and Technology</p>
<br />
        <p className='quali'>2018 - 2020</p>
        <p className='study'>Intermediate (Pre-Engineering) </p>
        <p className='quali'>Govt. Jinnah College</p>


        <br />
        <h2>Expertise</h2>
        <hr />  
        <ul>
          <li>Web Development</li>
          <li>HTML, CSS, JavaScript</li>
          <li>Firebase and ExpressJs</li>
          <li>GIT and GITHUB</li>
          <li>React.js, Node.js</li>
          <li>Database (Oracle), SQL Server</li>
          <li>C# and Windows Form</li>
        </ul><br />
        <h2>Languages</h2>
        <hr />
       <p>English</p>
       <p>Urdu</p>
      </div>
    </div>
    
    {/* Right Panel */}
    <div className="right-panel">
      <div className="right-panel-inner">
        <h1 className='name'>Syed Musharraf Hussain</h1>
        <h3 className='slogan'>SSUET | 7th Semester | Computer Science</h3>
        <h5>As a dedicated and motivated student pursuing a BS in Information Technology, my career
objective is to leverage my technical knowledge and skills to contribute to the development and
implementation of innovative IT solutions. With a strong passion for technology and a commitment
to continuous learning, I seek opportunities to grow professionally and make a positive impact in
the field of IT. <br /><br />
GIT HUB: <a href="https://github.com/musharraf-hussain-uni">https://github.com/musharraf-hussain-uni</a>  <br />
Linked In: <a href="https://www.linkedin.com/in/musharraf-hussain-0987a9245">https://www.linkedin.com/in/musharraf-hussain-0987a9245</a></h5>
<h2 className='right-h2'>Technical Courses</h2><hr />
<div className="vertical-line"></div>
<div className="circle circle1"></div>
<div className="circle circle2"></div>
<div className="circle circle3"></div>
<div className="vertical-line"></div>
<h3 className='refername'>2022 (6 month Course) </h3>
<h3 className='rihgt-h3'>APTECH</h3>
<h3 className='rihgt-h3'><strong>Web Designing - HTML, CSS, and PHP</strong></h3>
<h5>This course provides a comprehensive introduction to web development, covering the
fundamental concepts and techniques of HTML, CSS and PHP.</h5>

<h3 className='refername'>2023 - Present</h3>
<h3 className='rihgt-h3'>SMIT</h3>
<h3 className='rihgt-h3'><strong>Web and Mobile App Development</strong></h3>
<h5>This course offers a comprehensive introduction to web development, encompassing the
essential principles and practices of HTML, CSS, JavaScript, Firebase, Express server, MongoDB, NodeJs, ReactJs
GitHub integration. <br /><br />
In this duration, created a project related to real estate and cover all the basic features
like login and signup. buying and purchasing section with agent detail and store all the
information in firebase. <br /><br />
Note: Mobile App development course will start once we are done with web development
course.
</h5>

<h3 className='rihgt-h3'>Field of intrust</h3>
<ul>
    <li className='right-li'>Web Development</li>
    <li className='right-li'>Database </li>
    <li className='right-li'>SDLC and Artifacts</li>
</ul>




<h2 className='right-h2'>Reference</h2><hr />
<h3 className='refername'>Shahbaz Qaiser</h3>
<p className='right-p'>Test Manager | 10Pearls</p>
<p className='right-p'>Phone: <a href="0345-2528143">0345-2528143</a></p>
<p className='right-p'>Email: <a href="shahbaz.qaiser.cs@gmail.com">shahbaz.qaiser.cs@gmail.com</a></p>
      </div>
    </div>
  </div>
);
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));