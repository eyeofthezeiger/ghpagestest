import React, { useEffect, useRef, useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import './App.css';
import AppleLogo from './assets/applePixels.png';
import useInterval from './hooks/useInterval'; // Custom hook for interval handling

// Constants for canvas dimensions and game parameters
const canvasX = 1000;
const canvasY = 1000;
const initialSnake = [
  [4, 10],
  [4, 10],
];
const initialApple = [14, 10];
const scale = 50;
const timeDelay = 200;

const App = () => {
  // Ref for the canvas element
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // State for game elements
  const [snake, setSnake] = useState(initialSnake);
  const [apple, setApple] = useState(initialApple);
  const [direction, setDirection] = useState([0, -1]);
  const [delay, setDelay] = useState<number | null>(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSection, setActiveSection] = useState<React.ReactNode>(<Home />);


  // Custom hook to handle game loop interval
  useInterval(() => runGame(), delay);

  useEffect(() => {
    const fruit = document.getElementById('fruit') as HTMLCanvasElement;
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); // Clear canvas
        ctx.fillStyle = '#228B22';
        snake.forEach(([x, y]) => ctx.fillRect(x, y, 1, 1)); // Draw snake segments
        ctx.drawImage(fruit, apple[0], apple[1], 1, 1); // Draw apple
      }
    }
  }, [snake, apple, gameOver]);

  // Function to update high score
  function handleSetScore() {
    if (score > Number(localStorage.getItem('snakeScore'))) {
      localStorage.setItem('snakeScore', JSON.stringify(score));
    }
  }

  // Function to start a new game
  function play() {
    setIsPaused(false);
    setIsPlaying(true);
    setSnake(initialSnake);
    setApple(initialApple);
    setDirection([1, 0]);
    setDelay(timeDelay);
    setScore(0);
    setGameOver(false);
  }

  // Function to check collision with walls and itself
  function checkCollision(head: number[]) {
    for (let i = 0; i < snake.length; i++) {
      if (head[i] < 0 || head[i] * scale >= canvasX) return true;
    }
    for (const s of snake) {
      if (head[0] === s[0] && head[1] === s[1]) return true;
    }
    return false;
  }

  // Function to check if snake ate an apple
  function appleAte(newSnake: number[][]) {
    const coord = apple.map(() => Math.floor((Math.random() * canvasX) / scale));
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      const newApple = coord;
      setScore(score + 1);
      setApple(newApple);
      return true;
    }
    return false;
  }

  function setPause() {
    setIsPaused(prevIsPaused => !prevIsPaused);
  }

  // Function to update game state on each game tick
  function runGame() {
    if (isPaused) {
      return; // Do nothing if the game is paused
    }
    const newSnake = [...snake];
    const newSnakeHead = [
      newSnake[0][0] + direction[0],
      newSnake[0][1] + direction[1],
    ];
    newSnake.unshift(newSnakeHead); // Move the snake forward

    // Check if the new snake head is outside the canvas boundaries
    if (newSnakeHead[0] < 0 || newSnakeHead[0] >= canvasX / scale || newSnakeHead[1] < 0 || newSnakeHead[1] >= canvasY / scale) {
      // If the snake hits a wall, wrap it to the opposite side
      if (newSnakeHead[0] < 0) newSnakeHead[0] = canvasX / scale - 1;
      if (newSnakeHead[0] >= canvasX / scale) newSnakeHead[0] = 0;
      if (newSnakeHead[1] < 0) newSnakeHead[1] = canvasY / scale - 1;
      if (newSnakeHead[1] >= canvasY / scale) newSnakeHead[1] = 0;
      setIsPaused(true); 
    }

    
    // if (checkCollision([snake[0][0], snake[0][1]]) && direction[0] === -1) setActiveSection(<About />);
    // Snake hits bottom of board
    if (checkCollision([snake[0][0], snake[0][1] + 1]) && direction[1] === 1) setActiveSection(<Portfolio />);
    // Snake hits right side of board
    if (checkCollision([snake[0][0] + 1, snake[0][1]]) && direction[0] === 1) setActiveSection(<Experience />);
    // if (checkCollision([snake[0][0] - 1, snake[0][1]]) && direction[0] === -1) setActiveSection(<Home />);

    if (checkCollision([snake[0][0], snake[0][1] - 1]) && direction[1] === -1) setActiveSection(<Home />);
    if (checkCollision([snake[0][0] - 1, snake[0][1]]) && direction[0] === -1) setActiveSection(<About />);




    if (checkCollision(newSnakeHead)) {
      setIsPlaying(false);
      setDelay(null);
      setGameOver(true);
      handleSetScore();
    }
    if (!appleAte(newSnake)) {
      newSnake.pop();
    }
    setSnake(newSnake); // Update snake state
  }
  
  // Function to handle directional input
  function changeDirection(e: React.KeyboardEvent<HTMLDivElement>) {
    switch (e.key) {
      case 'ArrowLeft':
        setDirection([-1, 0]);
        break;
      case 'ArrowUp':
        setDirection([0, -1]);
        break;
      case 'ArrowRight':
        setDirection([1, 0]);
        break;
      case 'ArrowDown':
        setDirection([0, 1]);
        break;
    }

  }
  

  return (
    <div onKeyDown={e => changeDirection(e)}>
      <img id="fruit" src={AppleLogo} alt="fruit" width="30" />
      {/* <img src={Monitor} alt="fruit" width="4000" className="monitor" /> */}

      <div className="gameOver" style={{ color: 'blue', position: 'absolute', top: '17%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        HOME
      </div>
      <div className="gameOver" style={{ color: 'blue', position: 'absolute', top: '67%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
        PORTFOLIO
      </div>
      <div className="gameOver" style={{ color: 'blue', position: 'absolute', top: '40%', left: '31%', transform: 'translateX(-50%) rotate(-90deg)', textAlign: 'center' }}>
        ABOUT ME
      </div>
      <div className="gameOver" style={{ color: 'blue', position: 'absolute', top: '40%', left: '70%', transform: 'translateX(-50%) rotate(-90deg)', textAlign: 'center' }}>
        EXPERIENCE
      </div>
      <canvas
        className="playArea"
        ref={canvasRef}
        width={`${canvasX}px`}
        height={`${canvasY}px`}
      />

      {/* {gameOver && <div className="gameOver" style={{color: 'blue'}}>Game Over</div>} */}
      <button onClick={play} className="playButton" style={{ position: 'absolute', top: '58%', left: '85%' }}>
        {isPlaying ? 'Restart' : 'Play'}
      </button>
      <button onClick={setPause} className="playButton" style={{ position: 'absolute', top: '58%', left: '93%' }}>
        {isPaused ? "Resume" : "Pause"}
      </button>
        <div style={{ marginTop: '500px', color: 'black' }}>
          {activeSection}
        </div>

      {/* <div className="scoreBox">
        <h2>Score: {score}</h2>
        <h2>High Score: {localStorage.getItem('snakeScore')}</h2>
      </div> */}
    </div>
  );
};

export default App;
