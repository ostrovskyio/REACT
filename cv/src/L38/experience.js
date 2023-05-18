import React, { useState } from 'react';

function JobItem({ title, description, name, link }) {
  return (
    <dl>
      <dt>Period:&nbsp;</dt>
      <dd>{title}</dd>
      <dt>Position:&nbsp;</dt>
      <dd>{name}</dd>
      <dt>Description:&nbsp;</dt>
      <dd>{description}</dd>
      <dt>Link:&nbsp;</dt>
      <dd><a href={link}>{link}</a></dd>
    </dl>
  );
}

function ExperienceList() {
  const [jobs, setJobs] = useState([
    {
      title: '2018-2022',
      description: "Received a Bachelor's degree in Law. Understood, that programming is more interesting than daily paper work.",
      name: 'Student at Lviv national university Faculty of Law.',
      link: 'https://law.lnu.edu.ua/',
    },
    {
      title: '2022-present time',
      description: "Hope to become JS Developer in the nearest future. I'm sure that the previous message is actually to perform.",
      name: 'Student at Robot_dreams IT-school.',
      link: 'https://robotdreams.cc/',
    },
  ]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const job = {
      title: form.title.value,
      description: form.description.value,
      name: form.name.value,
      link: form.link.value,
    };
    addJob(job);
    form.reset();
  };

  return (
    <div>
      {jobs.map((job, index) => (
        <JobItem
          key={index}
          title={job.title}
          description={job.description}
          name={job.name}
          link={job.link}
        />
      ))}
      <form onSubmit={handleSubmit}>
        <label>
          Period:
          <br />
          <input type="text" name="title" required />
        </label>
        <br />
        <label>
          Position:
          <br />
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Description:
          <br />
          <textarea name="description" required />
        </label>
        <br />
        <label>
          Link:
          <br />
          <input type="text" name="link" required />
        </label>
        <br />
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default ExperienceList;
