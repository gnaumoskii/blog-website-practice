import React from 'react'

const About = () => {
  return (
    <main className='aboutPage container mt-5 bg-light'>
      <hr/>
        <h5 className="about"> This is a blog website made with the purpose of learning React. </h5>
        <p className="about">It uses local database and it's accessed with json-server (fake API only used during development).<br/> 
           So if you want to access the db.json file you must install json-server with npm. The project uses CRUD operations and <br/>
           any changes you make on the blog list will be saved in db.json. </p>
    </main>
  )
}

export default About