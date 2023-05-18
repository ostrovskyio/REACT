import React, { useState, useEffect } from 'react';

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/ostrovskyio/repos'
        );
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <div class='title'>GitHub Repositories</div>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GitHubRepos;
