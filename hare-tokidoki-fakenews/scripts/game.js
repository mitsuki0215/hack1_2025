// ゲーム状態の管理
let gameState = {
  currentQuestion: 1,
  usedItems: [],
  currentItem: null
};

// DOM要素
const titleElement = document.getElementById('article-title');
const statementElement = document.getElementById('statement');
const questionNumberElement = document.getElementById('question-number');
const factButton = document.getElementById('fact-btn');
const rumorButton = document.getElementById('rumor-btn');
const verdictWidget = document.getElementById('verdict-widget');
const verdictText = document.getElementById('verdict-text');
const explanationElement = document.getElementById('explanation');
const rereadButton = document.getElementById('reread-btn');
const nextButton = document.getElementById('next-btn');
const progressBar = document.querySelector('.progress');

// ゲーム初期化
function initGame() {
  gameState = {
    currentQuestion: 1,
    usedItems: [],
    currentItem: null
  };

  hideVerdictWidget();
  loadQuestion();
  updateProgressBar();
}

// ランダムな記事を取得
function getRandomItem() {
  const availableItems = items.filter(item => !gameState.usedItems.includes(item.id));
  const randomIndex = Math.floor(Math.random() * availableItems.length);
  return availableItems[randomIndex];
}

// 問題を読み込む
function loadQuestion() {
  gameState.currentItem = getRandomItem();
  gameState.usedItems.push(gameState.currentItem.id);

  titleElement.textContent = gameState.currentItem.title;
  statementElement.textContent = gameState.currentItem.content;
  questionNumberElement.textContent = gameState.currentQuestion;

  hideVerdictWidget();
}

// 回答をチェック
function checkAnswer(answer) {
  const isCorrect = (answer === 'real' && gameState.currentItem.type === 'real') ||
                    (answer === 'fake' && gameState.currentItem.type === 'fake');
  showVerdict(isCorrect);
}

// 判定ウィジェットの表示
function showVerdict(isCorrect) {
  verdictWidget.classList.remove('hidden', 'correct', 'incorrect');

  if (isCorrect) {
    verdictWidget.classList.add('correct');
    verdictText.textContent = '正解！';
  } else {
    verdictWidget.classList.add('incorrect');
    verdictText.textContent = '不正解！';
  }

  explanationElement.textContent = gameState.currentItem.explanation;

  if (gameState.currentQuestion === 3) {
    nextButton.textContent = 'スタート画面に戻る';
  } else {
    nextButton.textContent = '次の記事へ';
  }
}

// ウィジェット非表示にして初期化
function hideVerdictWidget() {
  verdictWidget.classList.add('hidden');
  verdictWidget.classList.remove('correct', 'incorrect');
  verdictText.textContent = '';
  explanationElement.textContent = '';
}

// 次の問題へ
function nextQuestion() {
  if (gameState.currentQuestion < 3) {
    gameState.currentQuestion++;
    loadQuestion();
    updateProgressBar();
  } else {
    window.location.href = 'index.html';
  }
}

// プログレスバー更新
function updateProgressBar() {
  const progress = (gameState.currentQuestion / 3) * 100;
  progressBar.style.width = `${progress}%`;
}

// イベント登録
factButton.addEventListener('click', () => checkAnswer('real'));
rumorButton.addEventListener('click', () => checkAnswer('fake'));
rereadButton.addEventListener('click', () => hideVerdictWidget());
nextButton.addEventListener('click', nextQuestion);

document.addEventListener('DOMContentLoaded', initGame);
