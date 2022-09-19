
var fresh_deck = [
	{ name: "One finger", count: 4, audio: "tada", bgcolour: "#00FF00", fgcolour: "#000000"},
	{ name: "Two fingers", count: 5, audio: "tada", bgcolour: "#FFC000", fgcolour: "#000000"},
	{ name: "Three fingers", count: 4, audio: "tada", bgcolour: "#FF0000", fgcolour: "#FFFF00"},
	{ name: "Nominate two fingers", count: 4, audio: "tada", bgcolour: "#7030A0", fgcolour: "#FFFF00"},
	{ name: "Nominate three fingers", count: 5, audio: "tada", bgcolour: "#76933C", fgcolour: "#DDD9C4"},
	{ name: "Shot!", count: 2, audio: "gameover", bgcolour: "#000000", fgcolour: "#FFFFFF"},
	{ name: "Nominate a shot", count: 2, audio: "life", bgcolour: "#FF0000", fgcolour: "#00FF00"},
	{ name: "Two spins!", count: 4, audio: "tada", bgcolour: "#538DD5", fgcolour: "#FFFF00"},
	{ name: "5 Spins!", count: 2, audio: "tada", bgcolour: "#FFC000", fgcolour: "#0000FF"},
	{ name: "I Claim", count: 4, audio: "tada", bgcolour: "#EEECE1", fgcolour: "#215967"},
	{ name: "Quad Mushroom", count: 8, audio: "tada", bgcolour: "#DDD9C4", fgcolour: "#262626"},
	{ name: "Name two Warwick Physics lecturers", count: 4, audio: "tada", bgcolour: "#FFFFFF", fgcolour: "#FF0000"},
	{ name: "Finish it!", count: 2, audio: "gameover", bgcolour: "#000000", fgcolour: "#FFC000"},
	{ name: "Make a rule!", count: 5, audio: "life", bgcolour: "#E4DFEC", fgcolour: "#7030A0"},
	{ name: "Professor Hase's round of passion!", count: 1, audio: "scream", bgcolour: "#FFCCFF", fgcolour: "#FF33CC"},
	{ name: "Professor Hase's discharge of questionable origin!", count: 2, audio: "scream", bgcolour: "#CCFF33", fgcolour: "#CC6600"},
	{ name: "Hasey top-up!", count: 10, audio: "", bgcolour: "#FFCCFF", fgcolour: "#0000FF", topup:true},
	{ name: "Twenty-one", count: 2, audio: "tada", bgcolour: "#FFFFFF", fgcolour: "#00B050"},
	{ name: "Red/Black", count: 4, audio: "tada", bgcolour: "#FF0000", fgcolour: "#000000"},
	{ name: "Bruce's Price is always right", count: 2, audio: "tada", bgcolour: "#FFFF00", fgcolour: "#0000FF"},
	{ name: "Deal or No Deal", count: 2, audio: "tada", bgcolour: "#632523", fgcolour: "#FFFFFF"},
	{ name: "ToM HaSe WanTS to PUNisH yoU!!", count: 2, audio: "scream", bgcolour: "#000000", fgcolour: "#FF0000"},
	{ name: "Everyone have two fingers", count: 4, audio: "tada", bgcolour: "#92D050", fgcolour: "#FFFF00"},
	{ name: "Everyone have three fingers", count: 4, audio: "tada", bgcolour: "#006666", fgcolour: "#FF99FF"},
	{ name: "Sonic Challenge", count: 3, audio: "tada", bgcolour: "#0000FF", fgcolour: "#FFFF00"},
	{ name: "Name two sonic zones", count: 4, audio: "tada", bgcolour: "#FFFF00", fgcolour: "#0000FF"},
	{ name: "Differentiate!", count: 10, audio: "tada", bgcolour: "#00FFFF", fgcolour: "#000000", page:"diff.html"},
	{ name: "Sonic 2 Bonus Challenge!", count: 3, audio: "tada", bgcolour: "#00FFFF", fgcolour: "#FFC000"},
];

var blank_card = 	{ name: "Passion!", count: 0, audio: "", bgcolour: "#002060", fgcolour: "#FFFF00"};
var spin_count = 0;
var spin_power = 0;
var spin_decay = 0;
var spin_delay = 0;
var total_beeps = 0;
var timer = null;
var scare_count = 0;
var scare_timer = null;
var page_timer = null;
var selected_game = -1;
var selected_game_name = "";

var audio = {};
var last_audio = null;
var images = {};

init();

var deck=[];
var last={};
var completed=[];
var total_topup=0;

function init()
{
  // Audio
  audio["pycr"]      = new Audio("assets/audio/pycr.mp3");
  audio["tada"]      = new Audio("assets/audio/TADA16.WAV");
  audio["scream"]    = new Audio("assets/audio/scrm16.wav");
  audio["blip"]      = new Audio("assets/audio/S2_4D.wav");
  audio["ding"]      = new Audio("assets/audio/S2_34.wav");
  audio["gameover"]  = new Audio("assets/audio/GO.wav");
  audio["life"]      = new Audio("assets/audio/el_8bit_22050.wav");
  audio["pycr"].loop = true;
  
  images["bg"]      = new Image();
  images["bg"].src  = "assets/img/game_board.png";
  images["bg1"]      = new Image();
  images["bg1"].src  = "assets/img/game_board_1.png";
  images["bg2"]      = new Image();
  images["bg2"].src  = "assets/img/game_board_2.png";
  images["p1"]      = new Image();
  images["p1"].src  = "assets/img/passion_neon_red.png";
  images["p2"]      = new Image();
  images["p2"].src  = "assets/img/passion_neon_yellow.png";
  images["p3"]      = new Image();
  images["p3"].src  = "assets/img/passion_neon_blue.png";
  images["p4"]      = new Image();
  images["p4"].src  = "assets/img/passion_neon_green.png";
}

function init_game()
{
	games.forEach((x,i) =>
	{
		$("#difficulties").append(`<input type="radio" name="difficulty" id="diff${i}" value="${i}" ${(x.checked === "true") ? "checked" : ""}/>`);
		$("#difficulties").append(`<label for="diff${i}" id="ldiff${i}">${x.description}</label>`);
		$("#difficulties").append(`<br />`);
		completed.push(false);
	});
	
	
	
	$(document).on("keydown", e =>
	{
		var code = e.which ? e.which : e.keyCode;
		if(code === 13)
		{
			e.preventDefault();
		}
		if((code === 32) || (code === 13))
		{
			if($("#popup-dlg").css("visibility") != "hidden")
			{
				hide_dialog();
			}
			else if($("#newgame-dlg").css("visibility") != "hidden")
			{
				start_new_game();
			}
			else if($("#btn_spin").prop('disabled') === false)
			{
				spin();
			}
		}
		if(code === 82)
		{
			if($("#btn_reset").prop('disabled') === false)
			{
				reset_game();
			}
		}
	});
	$("#btn_spin").on("click",spin);
	$("#btn_reset").on("click", function()
	{
		if(count_remaining(deck) === 0 || confirm("Are you sure you want to reset the game?"))
		{
			reset_game();
		}
	});
	$("#btn_dlg_ok").on("click",hide_dialog);
	$("#btn_dlg_start").on("click",start_new_game);
	timer = null;
	scare_timer = null;
	if(check_prev_game() === true)
	{
		load_game();
	}
	else
	{
		reset_game();
	}
}

function check_prev_game()
{
	var temp = window.localStorage.getItem('selected_game');
	return (temp !== null);
}

function load_game()
{
	if(check_prev_game())
	{
		fresh_deck = JSON.parse(window.localStorage.getItem('fresh_deck'));
		deck = JSON.parse(window.localStorage.getItem('deck'));
		total_topup = JSON.parse(window.localStorage.getItem('total_topup'));
		last = JSON.parse(window.localStorage.getItem('last'));
		completed = JSON.parse(window.localStorage.getItem('completed'));
		selected_game = JSON.parse(window.localStorage.getItem('selected_game'));
		selected_game_name = JSON.parse(window.localStorage.getItem('selected_game_name'));
	}
	refresh();
}

function save_game()
{
	window.localStorage.setItem('fresh_deck', JSON.stringify(fresh_deck));
	window.localStorage.setItem('deck', JSON.stringify(deck));
	window.localStorage.setItem('total_topup', JSON.stringify(total_topup));
	window.localStorage.setItem('last', JSON.stringify(last));
	window.localStorage.setItem('completed', JSON.stringify(completed));
	window.localStorage.setItem('selected_game', JSON.stringify(selected_game));
	window.localStorage.setItem('selected_game_name', JSON.stringify(selected_game_name));
}

function reset_game()
{
	last = {...blank_card};
	fresh_deck = [];
	deck = [];
	show_new_game_dialog();
	$("#btn_spin").prop('disabled', true);
	total_topup = 0;
	spin_count = 0;
	scare_count = 0;
	refresh();
}

function start_new_game()
{
	selected_game = $('input[name=difficulty]:checked').val();
	selected_game_name = games[selected_game].description;
	hide_new_game_dialog();
	fresh_deck = games[selected_game].deck.map(x => {return {...x}});
	deck = games[selected_game].deck.map(x => {return {...x}});
	refresh();
	save_game();
	if(count_remaining(deck) > 0)
	{
		$("#btn_spin").prop('disabled', false);
	}
}

function refresh()
{
	var total = count_remaining(fresh_deck);
	var cur = count_remaining(deck);
	if(spin_count > 0)
	{
		cur--;
	}
	$("#progress").html(`${cur}/${total}`);
	$("#game").html(selected_game_name);
	if(cur <= 0)
	{
		$("#btn_spin").prop('disabled', true);
	}
	$("#selection").html(last.name);
	$("#selection").css({"color": last.fgcolour, "background-color": last.bgcolour});
	games.forEach((x, i) =>
	{
		if(x.locked !== undefined)
		{
			if(completed[x.locked] === false)
			{
				$(`#diff${i}`).attr("disabled", true);
				$(`#diff${i}`).addClass("disabled");
				$(`#ldiff${i}`).addClass("disabled");
			}
			else
			{
				$(`#diff${i}`).attr("disabled", false);
				$(`#diff${i}`).removeClass("disabled");
				$(`#ldiff${i}`).removeClass("disabled");
			}
		}
	});
}

function show_dialog(title, message)
{
	$("#btn_spin").prop('disabled', true);
	$("#btn_reset").prop('disabled', true);
	$("#dlg-header").html(title);
	$("#dlg-text").html(message);
	$("#mask").css("visibility", "visible");
	$("#popup-dlg").css("visibility", "visible");
}

function hide_dialog()
{
	if(count_remaining(deck) > 0)
	{
		$("#btn_spin").prop('disabled', false);
	}
	$("#btn_reset").prop('disabled', false);
	$("#mask").css("visibility", "hidden");
	$("#popup-dlg").css("visibility", "hidden");
}

function show_new_game_dialog()
{
	$(`input[name=difficulty][value=${selected_game}]`).attr("checked", "checked");
	play_sound("pycr");
	$("#mask").css("visibility", "visible");
	$("#newgame-dlg").css("visibility", "visible");
}

function hide_new_game_dialog()
{
	if(last_audio !== null)
	{
		last_audio.pause();
		last_audio.currentTime = 0;
	}
	$("#mask").css("visibility", "hidden");
	$("#newgame-dlg").css("visibility", "hidden");
}

function play_sound(sound)
{
	if(last_audio !== null)
	{
		last_audio.pause();
		last_audio.currentTime = 0;
	}
	audio[sound].play();
	last_audio = audio[sound];
}

function spin()
{
	$("#btn_spin").prop('disabled', true);
	$("#btn_reset").prop('disabled', true);
	spin_power = Math.random() * 3.5 + 2.0;
	spin_count = 10 + Math.floor(5.0 / (spin_power - 1.9));
	spin_delay = 0;
	spin_decay = Math.random() * 4 + 4;
	subspin();
}

function complete_spin()
{
	if(last.audio != "")
	{
		play_sound(last.audio);
		if(last.audio === "scream")
		{
			scare();
		}
	}
	else if(last.topup === true)
	{
		total_topup++;
		if(total_topup % 5 === 0)
		{
			play_sound("gameover");
			show_dialog("Message from Professor Hase", "CONSUME THE PASSION!!!");
		}
		else
		{
			play_sound("life");
		}
	}
	if(last.page !== undefined && last.page !== "")
	{
		page_timer = setTimeout(function()
		{
			window.open(last.page, "_blank");
			$("#btn_reset").prop('disabled', false);
			if(count_remaining(deck) > 0)
			{
				$("#btn_spin").prop('disabled', false);
			}
		}, 3000);
	}
	else if(scare_count <= 0)
	{
		$("#btn_reset").prop('disabled', false);
		if(count_remaining(deck) > 0)
		{
			$("#btn_spin").prop('disabled', false);
		}
		completed[selected_game] = true;
	}
	save_game();
}

function subspin()
{
	if(spin_count <= 0)
	{
		last.count--;
		refresh();
		complete_spin();
		$("#game_board").attr("src", images["bg"].src);
	}
	else
	{
		last = select_random_card(false);
		refresh();
		play_sound("blip");
		spin_count--;
		spin_delay++;
		let rgb = `${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}`
		$(".hase_face").css("filter", `drop-shadow(0 0 10px rgba(${rgb}, 0.8))`);
		total_beeps++;
		let b = total_beeps % 4;
		switch(b)
		{
			case 0:
				$("#game_board").attr("src", images["bg1"].src);
				$("#passion").attr("src", images["p1"].src);
				break;
			case 1:
				$("#game_board").attr("src", images["bg2"].src);
				$("#passion").attr("src", images["p2"].src);
				break;
			case 2:
				$("#game_board").attr("src", images["bg1"].src);
				$("#passion").attr("src", images["p3"].src);
				break;
			case 3:
				$("#game_board").attr("src", images["bg2"].src);
				$("#passion").attr("src", images["p4"].src);
				break;
		}
        var timeout = 10 * Math.floor(spin_delay * Math.log10(spin_delay * spin_delay * spin_decay + 1) * spin_power);
		clearInterval(timer);
		timer = setTimeout(subspin, timeout);
	}
}

function count_remaining(d)
{
	var ret = 0;
	d.forEach(function(item, idx)
	{
		ret += item.count;
	});
	return ret;
}

function select_random_card(decrement)
{
	var result = blank_card;
	var cur = count_remaining(deck);
	if(cur > 0)
	{
		var c = 0;
		var sel = Math.floor(Math.random() * cur);
		deck.some(function(item, idx)
		{
			c += item.count;
			if(c > sel)
			{
				result = item;
				return true;
			}
			return false;
		});
	}
	if(decrement && result.count > 0)
	{
		result.count--;
	}
	return result;
}

function scare()
{
	$("#btn_spin").prop('disabled', true);
	$("#btn_reset").prop('disabled', true);
	$("#scare").css("visibility", "visible");
	scare_count = 100;
	scare_timer = setInterval(do_scare_timer, 50);
}

function do_scare_timer()
{
	scare_count--;
	$("#scare-img").css("visibility", (scare_count % 2 === 0) ? "hidden" : "visible");
	if(scare_count <= 0)
	{
		clearInterval(scare_timer);
		$("#scare").css("visibility", "hidden");
		$("#scare-img").css("visibility", "hidden");
		if(count_remaining(deck) > 0)
		{
			$("#btn_spin").prop('disabled', false);
		}
		$("#btn_reset").prop('disabled', false);
	}
}


window.addEventListener("load", init_game);