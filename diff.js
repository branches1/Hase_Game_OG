const State =
{
    NEW_GAME: 0,
    COUNTDOWN: 1,
    IN_PROGRESS: 2,
    TIME_UP: 3,
    SOLUTION: 4,
    GAME_OVER: 5
};

const Difficulty =
{
     EASY: 0,
     MEDIUM: 1,
     HARD: 2
};

const TIMEOUT = [45, 90, 180];
const DIFFICULTIES = ["Easy", "Medium", "Hard"];
const DIFFICULTY_PREFIX = ["e", "m", "h"];
const STATES = ["new_game", "countdown", "in_progress", "time_up", "solution", "game_over"];
const INIT_COUNTDOWN = 3;

const NUM_PROBLEMS = [21, 42, 20];

var problems =
[
  // Easy
  [],
  // Medium
  [],
  // Hard
  []
];

var solutions =
[
  // Easy
  [],
  // Medium
  [],
  // Hard
  []
];

let state = State.NEW_GAME;
let difficulty = Difficulty.EASY;
let problem = 0;
var countdown = 0;
var countdownTimer = null;
var timer = 0;
var timerTimer = null;
var audio = {};

init();

function init()
{
  // Audio
  audio["think"]     = new Audio("assets/audio/think.mp3");
  audio["tada"]      = new Audio("assets/audio/TADA16.WAV");
  audio["scream"]    = new Audio("assets/audio/scrm16.wav");
  audio["blip"]      = new Audio("assets/audio/S2_4D.wav");
  audio["ding"]      = new Audio("assets/audio/S2_34.wav");
  audio["gameover"]  = new Audio("assets/audio/GO.wav");
  audio["life"]      = new Audio("assets/audio/el_8bit_22050.wav");
  audio["think"].loop = true;
  
  DIFFICULTY_PREFIX.forEach((dp, d) =>
  {
    for(let i = 0; i < NUM_PROBLEMS[d]; ++i)
    {
	  problems[d][i] = new Image();
	  problems[d][i].src = "assets/img/diff/" + dp + (i + 1) + ".png";
	  solutions[d][i] = new Image();
	  solutions[d][i].src = "assets/img/diff/" + dp + (i + 1) + "s.png";
    }
  });
  
  $(document).on("keydown", e =>
  {
    var code = e.which ? e.which : e.keyCode;
    switch (code)
	{
	case 49:
	case 50:
	case 51:  // difficulty 1, 2 or 3
	  if(state == State.NEW_GAME)
		{
	    setDifficulty(code - 49);
		}
	  break;
	case 32:
	case 13:  // space or enter
	  switch(state)
	  {
	  case State.TIME_UP:
	    enterState(State.SOLUTION);
	    break;
	  case State.SOLUTION:
	    enterState(State.GAME_OVER);
	    break;
	  }
	  break;
    }
  });
}

function doCountdown()
{
  countdown -= 0.1;
  if(countdown % 1.0 < 0.1)
  {
    audio["ding"].play();
  }
  if(countdown < 0)
  {
    countdown = 0;
    state = State.IN_PROGRESS;
    enterState(state);
    clearInterval(countdownTimer);
  }
  $("#countdown_timer").html(countdown.toFixed(1));
}

function doTimer()
{
  if(timer % 1.0 < 0.1)
  {
	var rotate = Math.floor(Math.random() * 31) - 15;
	var rgb = `${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}`
    $(".hase").css("transform", `rotate(${rotate}deg)`);
    $(".hase").css("filter", `drop-shadow(0 0 12px rgba(${rgb}, 0.5))`);
  }
  timer -= 0.1;
  if(timer < 0)
  {
    timer = 0;
    state = State.TIME_UP;
    enterState(state);
    clearInterval(timerTimer);
  }
  $("#timer").html(toTimerText(timer));
}

function toTimeString(seconds)
{
    var result = "";
    if(seconds >= 60)
    {
      var minutes = Math.floor(seconds / 60);
      result += minutes + " minute" + (minutes > 1 ? "s" : "");
      seconds = seconds % 60;
      if(seconds > 0)
      {
        result += ", ";
      }
    }
    if(result == "" || seconds > 0)
    {
      result += seconds + " second" + (seconds > 1 ? "s" : "");
    }
    return result;
}

function setButtonText(difficulty)
{
  return DIFFICULTIES[difficulty] + " (" + toTimeString(TIMEOUT[difficulty]) + ")";
}

function toTimerText(seconds)
{
  var minutes = Math.floor(seconds / 60);
  seconds %= 60;
  seconds = ("00" + seconds.toFixed(1)).slice(-4);
  return `${minutes}:${seconds}`;
}

function setDifficulty(d)
{
  difficulty = d;
  state = State.COUNTDOWN;
  enterState(state);
}

function enterState(s)
{
  state = s;
  switch(state)
  {
    case State.NEW_GAME:
      let difficulty_buttons = [$("#btn_easy"),$("#btn_medium"),$("#btn_hard")];
      difficulty_buttons.forEach((button, idx) => 
        {
           button.html(setButtonText(idx));
           button.on("click", setDifficulty.bind(null, idx));
        });
      break;
    case State.COUNTDOWN:
      countdown = INIT_COUNTDOWN;
      countdownTimer = setInterval(doCountdown, 100);
      $("#countdown_timer").html(countdown.toFixed(1));
	  problem = Math.floor(Math.random() * NUM_PROBLEMS[difficulty]);
	  $("#problem-img").attr("src",problems[difficulty][problem].src);
	  $("#solution-img").attr("src",solutions[difficulty][problem].src);
      break;
    case State.IN_PROGRESS:
	  audio["think"].play();
      clearInterval(countdownTimer);
      countdownTimer = null;
      timer = TIMEOUT[difficulty];
      timerTimer = setInterval(doTimer, 100);
      $("#timer").html(toTimerText(timer));
      break;
    case State.TIME_UP:
	  audio["think"].pause();
	  audio["think"].currentTime = 0;
	  audio["blip"].play();
      clearInterval(timerTimer);
      timerTimer = null;
      $("#show_solution").on("click", enterState.bind(null, State.SOLUTION));
      break;
    case State.SOLUTION:
      $("#done").on("click", enterState.bind(null, State.GAME_OVER));
      break;
    case State.GAME_OVER:
	  window.close();
      break;
  }
  setStateVisibility(state);
}

function setStateVisibility(state)
{
  STATES.filter(s => s != STATES[state]).forEach(s =>
    {
      $("." + s).css('visibility', 'hidden');
    });
  $("." + STATES[state]).css('visibility', 'visible');
}

window.addEventListener("load", enterState.bind(null, State.NEW_GAME));
