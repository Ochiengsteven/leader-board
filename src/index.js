import './styles.css';
import renderPage from './modules/renderPg.js';

renderPage();

document.addEventListener('DOMContentLoaded', () => {
  // eslint-disable-next-line no-unused-vars
  const gameID = 'LSRlW6OdY2zWcbqajLTY';
  const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  const requestURL = `${baseURL}games/${gameID}/scores/`;

  const form = document.querySelector('form');

  // POST scores to the API
  const createScore = async (inputName, inputValue) => {
    const response = await fetch(requestURL, {
      method: 'POST',
      body: JSON.stringify({
        user: inputName,
        score: inputValue,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    // eslint-disable-next-line no-unused-vars
    const data = await response.json();
    form.reset();
  };

  const display = (scores) => {
    const scoresTable = document.getElementById('score-table');
    scoresTable.innerHTML = '';
    const table = document.createElement('table');
    table.classList.add('table');

    const tbody = document.createElement('tbody');

    scores.forEach((item, index) => {
      const row = document.createElement('tr');
      row.classList.add(index % 2 === 0 ? 'even' : 'odd');
      const cell = document.createElement('td');
      cell.textContent = `${item.user}: ${item.score}`;
      row.appendChild(cell);
      tbody.appendChild(row);
    });

    table.appendChild(tbody);
    scoresTable.appendChild(table);
  };

  // get stored scores from the API
  const getScores = async () => {
    const response = await fetch(requestURL);
    const scores = await response.json();
    display(scores.result);
  };

  getScores();

  function createScoreFromInputs() {
    const inputName = document.getElementById('name-input').value;
    const inputValue = document.getElementById('value-input').value;
    createScore(inputName, inputValue);
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      createScoreFromInputs();
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    createScoreFromInputs();
  }

  form.addEventListener('keydown', handleKeyPress);
  form.addEventListener('submit', handleSubmit);

  const refreshBtn = document.getElementById('page-refresh');
  refreshBtn.addEventListener('click', () => getScores());
});