// --- Auth Logic ---
let currentUser = localStorage.getItem('currentUser');

function initAuth() {
  const header = document.querySelector('.header');
  if (!header) return;

  const loginBtn = document.querySelector('.header .btn');
  const signupBtn = document.querySelector('.header .gradient-btn');

  if (currentUser) {
    if (loginBtn) loginBtn.style.display = 'none';
    if (signupBtn) signupBtn.style.display = 'none';

    // Add Profile UI
    const profileHTML = `
      <div class="user-profile" id="userProfile" style="display: flex;">
        <i class='bx bx-user-circle'></i>
        <span>${currentUser}</span>
        <button class="logout-btn" onclick="logout()">Logout</button>
      </div>
    `;
    if (!document.getElementById('userProfile')) {
      header.insertAdjacentHTML('beforeend', profileHTML);
    }
  } else {
    // Show buttons if logged out
    if (loginBtn) loginBtn.style.display = 'inline-block';
    if (signupBtn) signupBtn.style.display = 'inline-block';
  }
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'index.html';
}

// Attach Form event listeners for login/signup
document.addEventListener("DOMContentLoaded", () => {
  initAuth();

  const authForms = document.querySelectorAll('.auth-form');
  authForms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Simple mock authentication taking the first input (name or email)
      const firstInput = form.querySelector('input').value;
      const parsedName = firstInput.split('@')[0]; // Quick username extract if email
      localStorage.setItem('currentUser', parsedName);
      window.location.href = 'index.html';
    });
  });
});
// --- End Auth Logic ---

const getStartedBtn = document.getElementById("getStartedBtn");
if (getStartedBtn) getStartedBtn.addEventListener("click", () => {
  window.location.href = "quiz.html";
});

// Quiz Data Dictionary
const quizData = {
  FS: [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Hyper Tool Multi Language", "HighText Machine Language", "Hyperlinks and Text Markup Language"], answer: "HyperText Markup Language" },
    { question: "Which CSS property is used to change text color?", options: ["color", "text-color", "font-color", "background-color"], answer: "color" },
    { question: "Which JavaScript method selects an element by ID?", options: ["document.getElementById()", "document.querySelector()", "document.getElementByClass()", "document.selectById()"], answer: "document.getElementById()" },
    { question: "Which database is NoSQL and document-oriented?", options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"], answer: "MongoDB" },
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: "Cascading Style Sheets" },
    { question: "In React, what is used to pass data to a component?", options: ["props", "state", "setState", "propTypes"], answer: "props" },
    { question: "Which HTTP status code means 'Not Found'?", options: ["404", "200", "500", "403"], answer: "404" },
    { question: "Which of the following is a CSS framework?", options: ["Tailwind", "React", "Angular", "Vue"], answer: "Tailwind" },
    { question: "What is Node.js primarily used for?", options: ["Server-side scripting", "Styling web pages", "Creating databases", "Client-side routing"], answer: "Server-side scripting" },
    { question: "Which Git command is used to save changes locally?", options: ["git commit", "git push", "git pull", "git merge"], answer: "git commit" },
    { question: "What is the purpose of the virtual DOM in React?", options: ["To improve performance", "To store data", "To style components securely", "To manage databases"], answer: "To improve performance" },
    { question: "Which symbol is used for strict equality in JavaScript?", options: ["===", "==", "=", "=>"], answer: "===" },
    { question: "In SQL, what statement is used to retrieve data?", options: ["SELECT", "GET", "EXTRACT", "PULL"], answer: "SELECT" },
    { question: "What does REST stand for?", options: ["Representational State Transfer", "Remote State Transfer", "Responsive State Timing", "Representational Service Transmit"], answer: "Representational State Transfer" },
    { question: "Which method converts a JS object to JSON?", options: ["JSON.stringify()", "JSON.parse()", "JSON.toObject()", "JSON.string()"], answer: "JSON.stringify()" },
    { question: "What is an API?", options: ["Application Programming Interface", "Application Protocol Interface", "Apple Programming Interface", "Application Internet"], answer: "Application Programming Interface" },
    { question: "Which JS engine is used in Chrome?", options: ["V8", "SpiderMonkey", "Chakra", "Nitro"], answer: "V8" },
    { question: "Which NPM command installs a package locally?", options: ["npm install", "npm add", "npm get", "npm pull"], answer: "npm install" },
    { question: "What is the role of a Load Balancer?", options: ["Distributes traffic across servers", "Encrypts passwords", "Manages databases", "Serves HTML"], answer: "Distributes traffic across servers" },
    { question: "Which tag embeds an image in HTML?", options: ["<img>", "<picture>", "<image>", "<src>"], answer: "<img>" },
    { question: "What is 'Hoisting' in JavaScript?", options: ["Moving declarations to top of scope", "Elevating elements with CSS", "A method to throw errors", "Lifting state up in React"], answer: "Moving declarations to top of scope" },
    { question: "Which is a NoSQL database?", options: ["Cassandra", "PostgreSQL", "SQLite", "MariaDB"], answer: "Cassandra" },
    { question: "What does JWT stand for?", options: ["JSON Web Token", "Java Web Token", "JS Web Transfer", "JSON Wire Transfer"], answer: "JSON Web Token" },
    { question: "Which tag specifies a footer?", options: ["<footer>", "<bottom>", "<end>", "<div>"], answer: "<footer>" },
    { question: "In Express.js, what handles middleware?", options: ["app.use()", "app.get()", "app.set()", "app.middleware()"], answer: "app.use()" },
    { question: "Docker is used for?", options: ["Containerization", "Databases", "Frontend routing", "Image editing"], answer: "Containerization" },
    { question: "What does 'CRUD' mean?", options: ["Create, Read, Update, Delete", "Copy, Read, Upload, Delete", "Create, Route, Update, Download", "Copy, Route, Upload, Download"], answer: "Create, Read, Update, Delete" },
    { question: "State management in React?", options: ["Redux", "Bootstrap", "Express", "Mongoose"], answer: "Redux" },
    { question: "Typical port for HTTPS?", options: ["443", "80", "8080", "21"], answer: "443" }
  ],
  FE: [
    { question: "What is the CSS 'box model'?", options: ["Content, padding, border, margin", "Width, height, box-sizing", "Absolute, relative, fixed", "Flexbox and Grid"], answer: "Content, padding, border, margin" },
    { question: "Which HTML5 feature plays video?", options: ["<video>", "<media>", "<movie>", "<play>"], answer: "<video>" },
    { question: "In React, what Hook manages state?", options: ["useState", "useEffect", "useReducer", "useContext"], answer: "useState" },
    { question: "What is 'Responsive Design'?", options: ["Adapting layouts to screen sizes", "Fast server response times", "Using animation", "Clicking elements quickly"], answer: "Adapting layouts to screen sizes" },
    { question: "Which pseudo-class targets an element being hovered?", options: [":hover", ":active", ":focus", ":target"], answer: ":hover" },
    { question: "What does 'z-index' control?", options: ["Stacking order of elements", "Transparency", "Zoom level", "Font size"], answer: "Stacking order of elements" },
    { question: "Which API fetches resources asynchronously?", options: ["Fetch API", "DOM API", "Canvas API", "Geolocation API"], answer: "Fetch API" },
    { question: "What is a 'Promise' in JavaScript?", options: ["Object representing eventual completion/failure", "A strict function", "A database guarantee", "A UI component requirement"], answer: "Object representing eventual completion/failure" },
    { question: "Which unit is relative to the root element's font size?", options: ["rem", "em", "px", "vh"], answer: "rem" },
    { question: "What does a CSS preprocessor do?", options: ["Extends CSS with variables and mixins", "Compresses images", "Runs JS before CSS", "Creates HTML"], answer: "Extends CSS with variables and mixins" },
    { question: "Which JS array method creates a new array by transforming elements?", options: ["map()", "filter()", "reduce()", "forEach()"], answer: "map()" },
    { question: "What is Cross-Origin Resource Sharing (CORS)?", options: ["Security feature for web requests", "A CSS framework", "A routing method", "Database replication script"], answer: "Security feature for web requests" },
    { question: "Which attribute sets an image's fallback text?", options: ["alt", "title", "fallback", "text"], answer: "alt" },
    { question: "In Webpack, what processes non-JS files?", options: ["Loaders", "Plugins", "Bundlers", "Resolvers"], answer: "Loaders" },
    { question: "Which is a CSS methodology?", options: ["BEM", "DRY", "MVC", "REST"], answer: "BEM" },
    { question: "What does 'Lighthouse' measure?", options: ["Web performance and accessibility", "Server load", "Code complexity", "Database query speeds"], answer: "Web performance and accessibility" },
    { question: "Which React hook is used for side effects?", options: ["useEffect", "useMemo", "useRef", "useState"], answer: "useEffect" },
    { question: "How do you select elements with class 'item' in CSS?", options: [".item", "#item", "item", "*item"], answer: ".item" },
    { question: "What is an IIFE in JavaScript?", options: ["Immediately Invoked Function Expression", "Internal Instance For Elements", "Indexed Interactive Fetch Execution", "Inverted Interfaced Front End"], answer: "Immediately Invoked Function Expression" },
    { question: "Which property makes a flex container?", options: ["display: flex;", "flex: container;", "layout: flex;", "align: justify;"], answer: "display: flex;" },
    { question: "What is SVG?", options: ["Scalable Vector Graphics", "Standard Video Graphics", "Simple Visual Grid", "Server Verified Generation"], answer: "Scalable Vector Graphics" },
    { question: "Which attribute is used to link an external CSS file?", options: ["href", "src", "link", "rel"], answer: "href" },
    { question: "What does JSON.parse() do?", options: ["Parses JSON string to JS object", "Converts object to string", "Sends a request", "Validates CSS"], answer: "Parses JSON string to JS object" },
    { question: "Which meta tag ensures mobile responsiveness?", options: ["viewport", "charset", "description", "keywords"], answer: "viewport" },
    { question: "What is an SPA?", options: ["Single Page Application", "Scripted Page Animation", "Standard Prototype API", "Styled Programming Architecture"], answer: "Single Page Application" }
  ],
  BE: [
    { question: "Which protocol operates at the transport layer?", options: ["TCP/IP", "HTTP", "FTP", "SMTP"], answer: "TCP/IP" },
    { question: "What is middleware in Express.js?", options: ["Functions accessing req/res objects", "Database schemas", "CSS parsers", "React renderers"], answer: "Functions accessing req/res objects" },
    { question: "Which is a characteristic of REST?", options: ["Stateless", "Stateful", "Synchronous only", "Requires XML"], answer: "Stateless" },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Standard Query Logic", "Simple Query Language", "Sequential Query Limits"], answer: "Structured Query Language" },
    { question: "Which command starts a Node.js REPL?", options: ["node", "npm", "npm start", "js"], answer: "node" },
    { question: "What is horizontal scaling?", options: ["Adding more servers/instances", "Adding CPU/RAM to one server", "Compressing images", "Refactoring code"], answer: "Adding more servers/instances" },
    { question: "Which is NOT a Node core module?", options: ["mongoose", "fs", "http", "path"], answer: "mongoose" },
    { question: "What is a primary key in a database?", options: ["Unique identifier for a record", "A password", "A foreign relationship", "First column"], answer: "Unique identifier for a record" },
    { question: "Which hashing algorithm is considered insecure?", options: ["MD5", "bcrypt", "SHA-256", "Argon2"], answer: "MD5" },
    { question: "What is the purpose of CORS?", options: ["Control cross-origin HTTP requests", "Compress data", "Format JSON", "Hash passwords"], answer: "Control cross-origin HTTP requests" },
    { question: "Which HTTP method is idempotent?", options: ["PUT", "POST", "PATCH", "ALL"], answer: "PUT" },
    { question: "What does ORM stand for?", options: ["Object-Relational Mapping", "Online Request Management", "Object Router Middleware", "Overload Redundancy Mechanism"], answer: "Object-Relational Mapping" },
    { question: "In MongoDB, a record is called a:", options: ["Document", "Row", "Tuple", "Table"], answer: "Document" },
    { question: "Which status indicates an internal server error?", options: ["500", "400", "404", "200"], answer: "500" },
    { question: "What is the package manager for Python?", options: ["pip", "npm", "composer", "cargo"], answer: "pip" },
    { question: "Which architecture pattern involves small, independent services?", options: ["Microservices", "Monolith", "MVC", "Serverless"], answer: "Microservices" },
    { question: "What is 'Dependency Injection'?", options: ["Supplying dependencies to an object", "Hacking attack", "Database migration", "Testing technique"], answer: "Supplying dependencies to an object" },
    { question: "Which cache store is typically memory-based?", options: ["Redis", "PostgreSQL", "SQLite", "MongoDB"], answer: "Redis" },
    { question: "What does 'ACID' mean in databases?", options: ["Atomicity, Consistency, Isolation, Durability", "Asynchronous, Cached, Indexed, Distributed", "Always Check Input Data", "Active Connections Into Databases"], answer: "Atomicity, Consistency, Isolation, Durability" },
    { question: "Which framework is used in Python for backend?", options: ["Django", "Express", "Spring", "Laravel"], answer: "Django" },
    { question: "What does 'JWT' consist of?", options: ["Header, Payload, Signature", "User, Password, Hash", "CSS, HTML, JS", "Key, Value, Timestamp"], answer: "Header, Payload, Signature" },
    { question: "What handles asynchronous I/O in Node.js?", options: ["Event Loop", "V8 Engine", "Middleware", "Promises"], answer: "Event Loop" },
    { question: "What is a webhook?", options: ["A callback via HTTP POST", "A database crawler", "A CSS hook", "An encrypted socket"], answer: "A callback via HTTP POST" },
    { question: "Which tool tests APIs?", options: ["Postman", "Photoshop", "Webpack", "Lighthouse"], answer: "Postman" },
    { question: "What environment variable defines Node env?", options: ["NODE_ENV", "NPM_CONFIG", "SYS_NODE", "ENV_NODE"], answer: "NODE_ENV" }
  ],
  DA: [
    { question: "Which tool is commonly used to create interactive dashboards?", options: ["Tableau", "Notepad", "Photoshop", "Node.js"], answer: "Tableau" },
    { question: "What does SQL 'GROUP BY' do?", options: ["Groups rows with identical values", "Sorts data", "Filters columns", "Joins tables"], answer: "Groups rows with identical values" },
    { question: "Which is a common programming language for Data Analytics?", options: ["Python", "CSS", "HTML", "C++"], answer: "Python" },
    { question: "What is standard deviation?", options: ["Measure of data dispersion", "Average of a dataset", "Most frequent value", "Middle value"], answer: "Measure of data dispersion" },
    { question: "Which Excel function finds a value in a column?", options: ["VLOOKUP", "CONCATENATE", "SUM", "AVERAGE"], answer: "VLOOKUP" },
    { question: "What does ETL stand for?", options: ["Extract, Transform, Load", "Evaluate, Test, Learn", "Execute, Transfer, Load", "Estimate, Track, Log"], answer: "Extract, Transform, Load" },
    { question: "Which chart is best for showing parts of a whole?", options: ["Pie Chart", "Line Chart", "Scatter Plot", "Histogram"], answer: "Pie Chart" },
    { question: "What is a 'null' value?", options: ["Missing or undefined data", "Zero", "An error", "A negative number"], answer: "Missing or undefined data" },
    { question: "Which SQL clause filters data after aggregation?", options: ["HAVING", "WHERE", "ORDER BY", "SELECT"], answer: "HAVING" },
    { question: "What is A/B testing?", options: ["Comparing two versions to see which performs better", "Running two programs simultaneously", "Checking alpha and beta software", "Testing databases"], answer: "Comparing two versions to see which performs better" },
    { question: "Which metric describes the typical value in a dataset?", options: ["Mean", "Range", "Variance", "Correlation"], answer: "Mean" },
    { question: "What is 'data cleaning'?", options: ["Removing errors and inconsistencies", "Deleting all data", "Formatting visual charts", "Creating new schemas"], answer: "Removing errors and inconsistencies" },
    { question: "Which Python library is heavily used for data manipulation?", options: ["Pandas", "Flask", "Django", "Requests"], answer: "Pandas" },
    { question: "What is an outlier?", options: ["A data point differing significantly from others", "A missing value", "A duplicate record", "A column header"], answer: "A data point differing significantly from others" },
    { question: "What does 'KPI' mean?", options: ["Key Performance Indicator", "Known Programming Issue", "Key Product Insight", "Known Python Interface"], answer: "Key Performance Indicator" },
    { question: "In SQL, what joins tables only if there's a match?", options: ["INNER JOIN", "OUTER JOIN", "CROSS JOIN", "LEFT JOIN"], answer: "INNER JOIN" },
    { question: "What is correlation?", options: ["A statistical relationship between two variables", "A type of database", "A sorting method", "A data error"], answer: "A statistical relationship between two variables" },
    { question: "Which plot shows the distribution of a continuous variable?", options: ["Histogram", "Bar Chart", "Pie Chart", "Scatter plot"], answer: "Histogram" },
    { question: "What does 'regression' determine?", options: ["Relationship between a dependent and independent variable", "Database size", "Data uniqueness", "Application speed"], answer: "Relationship between a dependent and independent variable" },
    { question: "What is quantitative data?", options: ["Numerical data", "Descriptive data", "Text strings", "Boolean states"], answer: "Numerical data" },
    { question: "Which is a cloud data warehouse?", options: ["Snowflake", "MongoDB", "Express", "SQLite"], answer: "Snowflake" },
    { question: "What does a moving average do?", options: ["Smooths out short-term fluctuations", "Predicts exact future values", "Removes outliers entirely", "Counts nulls"], answer: "Smooths out short-term fluctuations" },
    { question: "What is descriptive analytics?", options: ["Describing what happened in the past", "Predicting the future", "Testing hypotheses", "Writing reports"], answer: "Describing what happened in the past" },
    { question: "Which function gets the largest number in SQL?", options: ["MAX()", "TOP()", "HIGH()", "LARGEST()"], answer: "MAX()" },
    { question: "What is a 'foreign key'?", options: ["Column linking to the primary key of another table", "A password", "An index", "A data type"], answer: "Column linking to the primary key of another table" }
  ],
  DS: [
    { question: "What is Supervised Learning?", options: ["Training on labeled data", "Training on unlabeled data", "A database technique", "Web server clustering"], answer: "Training on labeled data" },
    { question: "Which algorithm is used for Classification?", options: ["Logistic Regression", "Linear Regression", "K-Means", "PCA"], answer: "Logistic Regression" },
    { question: "What is 'Overfitting'?", options: ["Model learning noise in training data instead of signal", "Model being too simple", "Data crashing the system", "Variables being too large"], answer: "Model learning noise in training data instead of signal" },
    { question: "Which metric evaluates a classification model?", options: ["Accuracy", "Mean Absolute Error", "R-squared", "P-value"], answer: "Accuracy" },
    { question: "What is 'K' in K-Means clustering?", options: ["Number of clusters", "Number of features", "Constant factor", "Key size"], answer: "Number of clusters" },
    { question: "Which library is used for deep learning?", options: ["TensorFlow", "Matplotlib", "Seaborn", "Requests"], answer: "TensorFlow" },
    { question: "What does 'NLP' stand for?", options: ["Natural Language Processing", "Neural Logic Programmer", "New Linear Protocol", "None Linear Prediction"], answer: "Natural Language Processing" },
    { question: "What is an epoch in neural networks?", options: ["One complete pass through the training dataset", "A single neuron", "The output layer", "A testing metric"], answer: "One complete pass through the training dataset" },
    { question: "Which technique reduces dimensionality?", options: ["PCA (Principal Component Analysis)", "OHE (One Hot Encoding)", "Linear Regression", "Random Forest"], answer: "PCA (Principal Component Analysis)" },
    { question: "What is a Random Forest?", options: ["An ensemble of decision trees", "A clustering algorithm", "A single deep neural layer", "An NLP model"], answer: "An ensemble of decision trees" },
    { question: "What represents the rate at which a model updates weights?", options: ["Learning rate", "Accuracy", "Epoch", "Batch size"], answer: "Learning rate" },
    { question: "What does 'Gradient Descent' aim to do?", options: ["Minimize a loss/cost function", "Maximize errors", "Decrease data size", "Increase overfitting"], answer: "Minimize a loss/cost function" },
    { question: "Which of the following is Unsupervised Learning?", options: ["Clustering", "Regression", "Classification", "Decision Trees"], answer: "Clustering" },
    { question: "What is a Confusion Matrix?", options: ["Table describing classification model performance", "A deep learning algorithm", "A messy database schema", "An error display"], answer: "Table describing classification model performance" },
    { question: "What is Cross-Validation used for?", options: ["Assessing model generalizability", "Cleaning data", "Scaling features", "Creating new databases"], answer: "Assessing model generalizability" },
    { question: "Which activation function outputs between 0 and 1?", options: ["Sigmoid", "ReLU", "Tanh", "Linear"], answer: "Sigmoid" },
    { question: "What is feature scaling?", options: ["Standardizing the range of independent variables", "Creating new features from text", "Removing features", "Combining datasets"], answer: "Standardizing the range of independent variables" },
    { question: "Which algorithm handles both classification and regression?", options: ["Support Vector Machines (SVM)", "K-Means", "PCA", "Linear Regression exclusively"], answer: "Support Vector Machines (SVM)" },
    { question: "What is One-Hot Encoding?", options: ["Converting categorical variables into binary vectors", "Compressing files", "Speeding up training", "Removing outliers"], answer: "Converting categorical variables into binary vectors" },
    { question: "What is 'Bias' in machine learning?", options: ["Simplifying assumptions made by a model", "Variance of data", "Number of parameters", "Size of dataset"], answer: "Simplifying assumptions made by a model" },
    { question: "What does 'CNN' stand for in Deep Learning?", options: ["Convolutional Neural Network", "Central Node Network", "Complex Neural Node", "Computer Native Network"], answer: "Convolutional Neural Network" },
    { question: "In a neural network, what are 'hidden layers'?", options: ["Layers between input and output", "Invisible data", "Encrypted databases", "Security firewalls"], answer: "Layers between input and output" },
    { question: "Which Python package is specialized for mathematical computation?", options: ["NumPy", "Flask", "Jinja", "BeautifulSoup"], answer: "NumPy" },
    { question: "What represents precision?", options: ["True Positives / (True Positives + False Positives)", "Total correct / Total", "True Positives / (True Positives + False Negatives)", "False Positives / Total"], answer: "True Positives / (True Positives + False Positives)" },
    { question: "What is an anomaly detection system?", options: ["A system identifying rare items/events", "A compiler", "An SQL query planner", "A UI tester"], answer: "A system identifying rare items/events" }
  ]
};

// Quiz State Variables
let currentSessionQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let timerInterval = null;
let timeRemaining = 0;
let selectedQuizId = "FS";

// Helper to shuffle the array randomly
function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Shows Difficulty Selection
function startQuiz() {
  const container = document.getElementById("quiz-container");

  // Only run if we are actually on a quiz page with the container
  if (!container || !document.getElementById("question-text")) return;

  if (!currentUser) {
    alert("Please log in to take a quiz!");
    window.location.href = "login.html";
    return;
  }

  selectedQuizId = container.getAttribute("data-quiz") || "FS";

  clearInterval(timerInterval);

  // Hide normal quiz UI
  document.getElementById("options-container").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";
  document.getElementById("tryAgainBtn").style.display = "none";

  // Remove any previously created dynamic elements for a clean state
  const prevTimer = document.getElementById("timer");
  if (prevTimer) prevTimer.remove();
  const prevReview = document.getElementById("review-container");
  if (prevReview) prevReview.remove();
  const prevDiff = document.getElementById("difficulty-container");
  if (prevDiff) prevDiff.remove();

  document.getElementById("progress-text").textContent = "Setup";
  document.getElementById("question-text").textContent = "Select your difficulty level";
  document.getElementById("result").innerHTML = "";

  const diffContainer = document.createElement("div");
  diffContainer.id = "difficulty-container";

  const easyBtn = document.createElement("button");
  easyBtn.className = "Btn";
  easyBtn.textContent = "Easy (30s)";
  easyBtn.onclick = () => initQuizLogic(30);

  const medBtn = document.createElement("button");
  medBtn.className = "Btn";
  medBtn.textContent = "Medium (60s)";
  medBtn.onclick = () => initQuizLogic(60);

  const hardBtn = document.createElement("button");
  hardBtn.className = "Btn";
  hardBtn.textContent = "Hard (90s)";
  hardBtn.onclick = () => initQuizLogic(90);

  diffContainer.append(easyBtn, medBtn, hardBtn);
  document.getElementById("question-text").after(diffContainer);
}

function initQuizLogic(timeLimits) {
  const container = document.getElementById("quiz-container");
  document.getElementById("difficulty-container").style.display = "none";

  // Setup timer UI
  let timerDiv = document.createElement("div");
  timerDiv.id = "timer";
  timerDiv.textContent = `⏱️ ${timeLimits}s`;
  container.appendChild(timerDiv);

  // Reset state
  score = 0;
  currentQuestionIndex = 0;
  userAnswers = [];
  timeRemaining = timeLimits;

  const questionBank = quizData[selectedQuizId] || quizData["FS"];

  // Pick 10 random questions for this session
  const shuffledArr = shuffle([...questionBank]);
  currentSessionQuestions = shuffledArr.slice(0, 10);

  document.getElementById("nextBtn").style.display = "block";
  document.getElementById("options-container").style.display = "block";

  // Start timer interval
  timerInterval = setInterval(() => {
    timeRemaining--;
    timerDiv.textContent = `⏱️ ${timeRemaining}s`;

    if (timeRemaining <= 0) {
      clearInterval(timerInterval);
      showResults(true); // pass true indicating time out
    }
  }, 1000);

  renderQuestion();
}

function renderQuestion() {
  const currentQ = currentSessionQuestions[currentQuestionIndex];

  // Update progress text
  document.getElementById("progress-text").textContent = `Question ${currentQuestionIndex + 1} of 10`;

  // Update Question text
  document.getElementById("question-text").textContent = `${currentQuestionIndex + 1}. ${currentQ.question}`;

  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  // Dynamically create options with radio buttons
  currentQ.options.forEach((opt) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quizOption";
    radio.value = opt;

    label.appendChild(radio);
    label.appendChild(document.createTextNode(" " + opt));

    optionsContainer.appendChild(label);
    optionsContainer.appendChild(document.createElement("br"));
  });
}

function handleNext() {
  const selected = document.querySelector('input[name="quizOption"]:checked');

  if (!selected) {
    alert("Please select an answer before continuing!");
    return;
  }

  // Save the answer to review it later
  const currentQ = currentSessionQuestions[currentQuestionIndex];
  userAnswers.push({
    question: currentQ.question,
    selected: selected.value,
    correct: currentQ.answer,
    isCorrect: selected.value === currentQ.answer
  });

  // Check if option selected matches correct answer
  if (selected.value === currentQ.answer) {
    score++;
  }

  currentQuestionIndex++;

  // Advance to next or finish
  if (currentQuestionIndex < currentSessionQuestions.length) {
    renderQuestion();
  } else {
    clearInterval(timerInterval);
    showResults(false);
  }
}

function showResults(timedOut) {
  clearInterval(timerInterval);

  const timerDiv = document.getElementById("timer");
  if (timerDiv) timerDiv.style.display = "none";

  // Hide quiz UI
  document.getElementById("options-container").style.display = "none";
  document.getElementById("nextBtn").style.display = "none";

  document.getElementById("question-text").textContent = timedOut ? "Time's Up!" : "Quiz Complete!";
  document.getElementById("progress-text").textContent = "";

  const resultDisplay = document.getElementById("result");

  // Give dynamic feedback based on score
  if (score > 7) {
    resultDisplay.innerHTML = `Awesome! You scored ${score} out of 10.`;
    resultDisplay.style.color = "#4ade80"; // Bright Green
  } else if (score > 4) {
    resultDisplay.innerHTML = `Good effort! You scored ${score} out of 10.`;
    resultDisplay.style.color = "#fcd34d"; // Yellow
  } else {
    resultDisplay.innerHTML = `Keep practicing! You scored ${score} out of 10.`;
    resultDisplay.style.color = "#f87171"; // Red
  }

  // Render Answer Review
  const reviewContainer = document.createElement("div");
  reviewContainer.id = "review-container";

  userAnswers.forEach((ans, index) => {
    const item = document.createElement("div");
    item.className = `review-item ${ans.isCorrect ? "correct" : "wrong"}`;

    item.innerHTML = `
      <p><strong>${index + 1}. ${ans.question}</strong></p>
      <p>Your Answer: <span style="color: ${ans.isCorrect ? '#4ade80' : '#f87171'}">${ans.selected}</span></p>
      ${!ans.isCorrect ? `<p>Correct Answer: <span style="color: #4ade80">${ans.correct}</span></p>` : ''}
    `;
    reviewContainer.appendChild(item);
  });

  // If timed out before answering all, append info
  if (userAnswers.length < currentSessionQuestions.length) {
    const missed = document.createElement("p");
    missed.style.marginTop = "15px";
    missed.style.color = "var(--clr-blue)";
    missed.style.fontWeight = "600";
    missed.textContent = `You missed ${currentSessionQuestions.length - userAnswers.length} questions due to time out.`;
    reviewContainer.appendChild(missed);
  }

  document.getElementById("result").after(reviewContainer);

  // Save to leaderboard
  if (currentUser) {
    let leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];
    leaderboard.push({ name: currentUser, score: score * 10 }); // *10 to match existing score format
    localStorage.setItem('quizLeaderboard', JSON.stringify(leaderboard));
  }

  // Show "Try Again"
  document.getElementById("tryAgainBtn").style.display = "block";
}

// Bind event listeners exclusively to quiz buttons if they exist
const nextBtn = document.getElementById("nextBtn");
if (nextBtn) nextBtn.addEventListener("click", handleNext);

const tryAgainBtn = document.getElementById("tryAgainBtn");
if (tryAgainBtn) tryAgainBtn.addEventListener("click", startQuiz);

// Start the quiz automatically on load
window.addEventListener("DOMContentLoaded", () => {
  startQuiz();
  renderLeaderboard();
});

function renderLeaderboard() {
  const dynamicLeaderboard = document.getElementById("dynamic-leaderboard");
  if (!dynamicLeaderboard) return;

  let leaderboard = JSON.parse(localStorage.getItem('quizLeaderboard')) || [];

  // Sort descending
  leaderboard.sort((a, b) => b.score - a.score);

  // Take top 10
  leaderboard = leaderboard.slice(0, 10);

  if (leaderboard.length === 0) {
    dynamicLeaderboard.innerHTML = "<p style='text-align:center; padding: 20px; font-size: 1.2rem; color: var(--text-main);'>No scores yet! Play a quiz!</p>";
    return;
  }

  dynamicLeaderboard.innerHTML = "";

  leaderboard.forEach((entry, index) => {
    const rank = index + 1;
    let rankClass = rank <= 3 ? `top-3 rank-${rank}` : "";

    const item = document.createElement("div");
    item.className = `entry ${rankClass}`;

    item.innerHTML = `
      <span class="rank">${rank}</span>
      <span class="name">${entry.name}</span>
      <span class="score">${entry.score}</span>
    `;
    dynamicLeaderboard.appendChild(item);
  });
}