export default function renderPage() {
  const appBody = document.querySelector('.app-container');
  const appTitle = document.createElement('h1');
  appTitle.innerHTML = 'Leaderboard';
  appBody.appendChild(appTitle);
  const scoreBoard = document.createElement('div');
  scoreBoard.classList.add('score-board');
  const scoresList = document.createElement('div');
  scoresList.classList.add('scores-list');
  scoresList.innerHTML = `<div class="title">
                            <h3>Recent scores</h3>
                            <button class="action" id="page-refresh">Refresh</button>
                          </div>
                          <div class="scores" id="score-table">
                          </div>`;
  scoreBoard.appendChild(scoresList);

  const addScore = document.createElement('div');
  addScore.classList.add('add-score');
  addScore.innerHTML = `<div class="title"><h3>Add your score</h3></div>
                        <form class="form">
                          <input type="text" placeholder="Your name" class="name" id="name-input" required>
                          <input type="number" placeholder="Your score" class="score" id="value-input" required>
                          <div class="submit-btn"><button type="submit" class="action">Submit</button></div>
                        </form>`;
  scoreBoard.appendChild(addScore);
  appBody.appendChild(scoreBoard);
}