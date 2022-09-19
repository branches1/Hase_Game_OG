const games =
[
	{
		name: "ces",
		description: "CES Mode",
		checked: "false",
		locked: 1,
		deck:
		[
			{ name: "Have a nice cup of tea", count: 20, audio: "tada", bgcolour: "#CCCCCC", fgcolour: "#000000"},
			{ name: "Drink some water", count: 20, audio: "tada", bgcolour: "#CCCCCC", fgcolour: "#000000"},
			{ name: "Have a rest", count: 20, audio: "tada", bgcolour: "#CCCCCC", fgcolour: "#000000"},
			{ name: "Have a green tea", count: 8, audio: "tada", bgcolour: "#CCCCCC", fgcolour: "#000000"},
			{ name: "Brush your teeth", count: 8, audio: "tada", bgcolour: "#CCCCCC", fgcolour: "#000000"},
			{ name: "Urinate", count: 20, audio: "tada", bgcolour: "#CCCCCC", fgcolour: "#000000"},
			{ name: "Think about going to bed early", count: 14, audio: "tada", bgcolour: "#CCCCCC", fgcolour: "#000000"},
			{ name: "Think pleasant thoughts about Excel", count: 8, audio: "tada", bgcolour: "#CCCCCC", fgcolour: "#000000"},
			{ name: "Tidy up something", count: 8, audio: "tada", bgcolour: "#CCCCCC", fgcolour: "#000000"},
			{ name: "Eat some fruit", count: 7, audio: "tada", bgcolour: "#CCCCCC", fgcolour: "#000000"},
			{ name: "Drink some milk", count: 6, audio: "tada", bgcolour: "#CCCCCC", fgcolour: "#000000"},
			{ name: "ToM HaSe WanTS to PUNisH yoU!!", count: 1, audio: "scream", bgcolour: "#000000", fgcolour: "#FF0000"}
		]
	},
	{
		name: "easy",
		description: "Easy Mode",
		checked: "false",
		deck:
		[
			{ name: "One finger", count: 8, audio: "tada", bgcolour: "#00FF00", fgcolour: "#000000"},
			{ name: "Two fingers", count: 12, audio: "tada", bgcolour: "#FFC000", fgcolour: "#000000"},
			{ name: "Three fingers", count: 6, audio: "tada", bgcolour: "#FF0000", fgcolour: "#FFFF00"},
			{ name: "Nominate one finger", count: 8, audio: "tada", bgcolour: "#7030A0", fgcolour: "#FFFF00"},
			{ name: "Nominate two fingers", count: 7, audio: "tada", bgcolour: "#76933C", fgcolour: "#DDD9C4"},
			{ name: "I Claim", count: 8, audio: "tada", bgcolour: "#EEECE1", fgcolour: "#215967"},
			{ name: "Quad Mushroom", count: 8, audio: "tada", bgcolour: "#DDD9C4", fgcolour: "#262626"},
			{ name: "Name two Warwick Physics lecturers", count: 4, audio: "tada", bgcolour: "#FFFFFF", fgcolour: "#FF0000"},
			{ name: "Finish it!", count: 4, audio: "gameover", bgcolour: "#000000", fgcolour: "#FFC000"},
			{ name: "Make a rule!", count: 5, audio: "life", bgcolour: "#E4DFEC", fgcolour: "#7030A0"},
			{ name: "Twenty-one", count: 4, audio: "tada", bgcolour: "#FFFFFF", fgcolour: "#00B050"},
			{ name: "Red/Black", count: 4, audio: "tada", bgcolour: "#FF0000", fgcolour: "#000000"},
			{ name: "Bruce's Price is always right", count: 4, audio: "tada", bgcolour: "#FFFF00", fgcolour: "#0000FF"},
			{ name: "Deal or No Deal", count: 4, audio: "tada", bgcolour: "#632523", fgcolour: "#FFFFFF"},
			{ name: "ToM HaSe WanTS to PUNisH yoU!!", count: 1, audio: "scream", bgcolour: "#000000", fgcolour: "#FF0000"},
			{ name: "Everyone have one finger", count: 8, audio: "tada", bgcolour: "#92D050", fgcolour: "#FFFF00"},
			{ name: "Everyone have two fingers", count: 8, audio: "tada", bgcolour: "#006666", fgcolour: "#FF99FF"},
			{ name: "Shot!", count: 1, audio: "gameover", bgcolour: "#000000", fgcolour: "#FFFFFF"},
			{ name: "Nominate a shot", count: 1, audio: "life", bgcolour: "#FF0000", fgcolour: "#00FF00"},
			{ name: "Differentiate!", count: 3, audio: "tada", bgcolour: "#00FFFF", fgcolour: "#000000", page:"diff.html"}
		]
	},
	{
		name: "mild",
		description: "Mild",
		checked: "false",
		deck:
		[
			{ name: "One finger", count: 6, audio: "tada", bgcolour: "#00FF00", fgcolour: "#000000"},
			{ name: "Two fingers", count: 7, audio: "tada", bgcolour: "#FFC000", fgcolour: "#000000"},
			{ name: "Three fingers", count: 2, audio: "tada", bgcolour: "#FF0000", fgcolour: "#FFFF00"},
			{ name: "Nominate two fingers", count: 4, audio: "tada", bgcolour: "#7030A0", fgcolour: "#FFFF00"},
			{ name: "Nominate three fingers", count: 2, audio: "tada", bgcolour: "#76933C", fgcolour: "#DDD9C4"},
			{ name: "Shot!", count: 1, audio: "gameover", bgcolour: "#000000", fgcolour: "#FFFFFF"},
			{ name: "Nominate a shot", count: 1, audio: "life", bgcolour: "#FF0000", fgcolour: "#00FF00"},
			{ name: "Two spins!", count: 4, audio: "tada", bgcolour: "#538DD5", fgcolour: "#FFFF00"},
			{ name: "5 Spins!", count: 2, audio: "tada", bgcolour: "#FFC000", fgcolour: "#0000FF"},
			{ name: "I Claim", count: 6, audio: "tada", bgcolour: "#EEECE1", fgcolour: "#215967"},
			{ name: "Quad Mushroom", count: 10, audio: "tada", bgcolour: "#DDD9C4", fgcolour: "#262626"},
			{ name: "Name two Warwick Physics lecturers", count: 6, audio: "tada", bgcolour: "#FFFFFF", fgcolour: "#FF0000"},
			{ name: "Finish it!", count: 2, audio: "gameover", bgcolour: "#000000", fgcolour: "#FFC000"},
			{ name: "Make a rule!", count: 10, audio: "life", bgcolour: "#E4DFEC", fgcolour: "#7030A0"},
			{ name: "Professor Hase's round of passion!", count: 1, audio: "scream", bgcolour: "#FFCCFF", fgcolour: "#FF33CC"},
			{ name: "Hasey top-up!", count: 5, audio: "", bgcolour: "#FFCCFF", fgcolour: "#0000FF", topup:true},
			{ name: "Twenty-one", count: 4, audio: "tada", bgcolour: "#FFFFFF", fgcolour: "#00B050"},
			{ name: "Red/Black", count: 4, audio: "tada", bgcolour: "#FF0000", fgcolour: "#000000"},
			{ name: "Bruce's Price is always right", count: 2, audio: "tada", bgcolour: "#FFFF00", fgcolour: "#0000FF"},
			{ name: "Deal or No Deal", count: 2, audio: "tada", bgcolour: "#632523", fgcolour: "#FFFFFF"},
			{ name: "ToM HaSe WanTS to PUNisH yoU!!", count: 1, audio: "scream", bgcolour: "#000000", fgcolour: "#FF0000"},
			{ name: "Everyone have two fingers", count: 4, audio: "tada", bgcolour: "#92D050", fgcolour: "#FFFF00"},
			{ name: "Everyone have three fingers", count: 4, audio: "tada", bgcolour: "#006666", fgcolour: "#FF99FF"},
			{ name: "Sonic Challenge", count: 4, audio: "tada", bgcolour: "#0000FF", fgcolour: "#FFFF00"},
			{ name: "Name two sonic zones", count: 6, audio: "tada", bgcolour: "#FFFF00", fgcolour: "#0000FF"},
			{ name: "Differentiate!", count: 5, audio: "tada", bgcolour: "#00FFFF", fgcolour: "#000000", page:"diff.html"},
			{ name: "Sonic 2 Bonus Challenge!", count: 3, audio: "tada", bgcolour: "#00FFFF", fgcolour: "#FFC000"},
		]
	},
	{
		name: "classic",
		description: "Classic",
		checked: "true",
		deck:
		[
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
		]
	},
	{
		name: "hard",
		description: "Hard Mode",
		checked: "false",
		locked: 3,
		deck:
		[
			{ name: "Three fingers", count: 6, audio: "tada", bgcolour: "#FF0000", fgcolour: "#FFFF00"},
			{ name: "Nominate three fingers", count: 6, audio: "tada", bgcolour: "#76933C", fgcolour: "#DDD9C4"},
			{ name: "Shot!", count: 4, audio: "gameover", bgcolour: "#000000", fgcolour: "#FFFFFF"},
			{ name: "Nominate a shot", count: 4, audio: "life", bgcolour: "#FF0000", fgcolour: "#00FF00"},
			{ name: "Two spins!", count: 8, audio: "tada", bgcolour: "#538DD5", fgcolour: "#FFFF00"},
			{ name: "5 Spins!", count: 4, audio: "tada", bgcolour: "#FFC000", fgcolour: "#0000FF"},
			{ name: "10 Spins!", count: 2, audio: "tada", bgcolour: "#FFC0C0", fgcolour: "#FF00FF"},
			{ name: "Quad Mushroom", count: 8, audio: "tada", bgcolour: "#DDD9C4", fgcolour: "#262626"},
			{ name: "Finish it!", count: 8, audio: "gameover", bgcolour: "#000000", fgcolour: "#FFC000"},
			{ name: "Make a rule!", count: 10, audio: "life", bgcolour: "#E4DFEC", fgcolour: "#7030A0"},
			{ name: "Professor Hase's round of passion!", count: 2, audio: "scream", bgcolour: "#FFCCFF", fgcolour: "#FF33CC"},
			{ name: "Professor Hase's discharge of questionable origin!", count: 3, audio: "scream", bgcolour: "#CCFF33", fgcolour: "#CC6600"},
			{ name: "Hasey top-up!", count: 15, audio: "", bgcolour: "#FFCCFF", fgcolour: "#0000FF", topup:true},
			{ name: "Bruce's Price is always right", count: 4, audio: "tada", bgcolour: "#FFFF00", fgcolour: "#0000FF"},
			{ name: "Deal or No Deal", count: 4, audio: "tada", bgcolour: "#632523", fgcolour: "#FFFFFF"},
			{ name: "ToM HaSe WanTS to PUNisH yoU!!", count: 3, audio: "scream", bgcolour: "#000000", fgcolour: "#FF0000"},
			{ name: "Everyone have a shot", count: 4, audio: "gameover", bgcolour: "#92D050", fgcolour: "#FFFF00"},
			{ name: "Everyone have three fingers", count: 4, audio: "tada", bgcolour: "#006666", fgcolour: "#FF99FF"},
			{ name: "Sonic Challenge", count: 3, audio: "tada", bgcolour: "#0000FF", fgcolour: "#FFFF00"},
			{ name: "Differentiate!", count: 5, audio: "tada", bgcolour: "#00FFFF", fgcolour: "#000000", page:"diff.html"},
			{ name: "Sonic 2 Bonus Challenge!", count: 1, audio: "tada", bgcolour: "#00FFFF", fgcolour: "#FFC000"},
		]
	},
	{
		name: "death",
		description: "Do you want to die?!",
		checked: "false",
		locked: 4,
		deck:
		[
			{ name: "Five fingers", count: 15, audio: "tada", bgcolour: "#FF0000", fgcolour: "#FFFF00"},
			{ name: "Nominate five fingers", count: 15, audio: "tada", bgcolour: "#76933C", fgcolour: "#DDD9C4"},
			{ name: "Shot!", count: 8, audio: "gameover", bgcolour: "#000000", fgcolour: "#FFFFFF"},
			{ name: "Nominate a shot", count: 8, audio: "life", bgcolour: "#FF0000", fgcolour: "#00FF00"},
			{ name: "5 Spins!", count: 18, audio: "tada", bgcolour: "#FFC000", fgcolour: "#0000FF"},
			{ name: "10 Spins!", count: 8, audio: "tada", bgcolour: "#FFC0C0", fgcolour: "#FF00FF"},
			{ name: "Finish it!", count: 12, audio: "gameover", bgcolour: "#000000", fgcolour: "#FFC000"},
			{ name: "Make a rule!", count: 33, audio: "life", bgcolour: "#E4DFEC", fgcolour: "#7030A0"},
			{ name: "Professor Hase's round of passion!", count: 4, audio: "scream", bgcolour: "#FFCCFF", fgcolour: "#FF33CC"},
			{ name: "Professor Hase's discharge of questionable origin!", count: 8, audio: "scream", bgcolour: "#CCFF33", fgcolour: "#CC6600"},
			{ name: "Hasey top-up!", count: 25, audio: "", bgcolour: "#FFCCFF", fgcolour: "#0000FF", topup:true},
			{ name: "Bruce's Price is always right", count: 8, audio: "tada", bgcolour: "#FFFF00", fgcolour: "#0000FF"},
			{ name: "Deal or No Deal", count: 8, audio: "tada", bgcolour: "#632523", fgcolour: "#FFFFFF"},
			{ name: "ToM HaSe WanTS to PUNisH yoU!!", count: 8, audio: "scream", bgcolour: "#000000", fgcolour: "#FF0000"},
			{ name: "Everyone have a shot", count: 8, audio: "gameover", bgcolour: "#92D050", fgcolour: "#FFFF00"},
			{ name: "Everyone have ten fingers", count: 12, audio: "tada", bgcolour: "#006666", fgcolour: "#FF99FF"},
			{ name: "Differentiate!", count: 18, audio: "tada", bgcolour: "#00FFFF", fgcolour: "#000000", page:"diff.html"}
		]
	},
	{
		name: "passion",
		description: "Passion Mode",
		checked: "false",
		locked: 5,
		deck:
		[
			{ name: "Professor Hase's round of passion!", count: 20, audio: "scream", bgcolour: "#FFCCFF", fgcolour: "#FF33CC"},
			{ name: "Professor Hase's discharge of questionable origin!", count: 30, audio: "scream", bgcolour: "#CCFF33", fgcolour: "#CC6600"},
			{ name: "Hasey top-up!", count: 30, audio: "", bgcolour: "#FFCCFF", fgcolour: "#0000FF", topup:true},
			{ name: "ToM HaSe WanTS to PUNisH yoU!!", count: 20, audio: "scream", bgcolour: "#000000", fgcolour: "#FF0000"},
			{ name: "Everyone have a shot", count: 8, audio: "gameover", bgcolour: "#92D050", fgcolour: "#FFFF00"}
		]
	},
	{
		name: "pain",
		description: "Pain",
		checked: "false",
		deck:
		[
			{ name: "Shot!", count: 54, audio: "gameover", bgcolour: "#000000", fgcolour: "#FFFFFF"},
			{ name: "Nominate a shot", count: 54, audio: "life", bgcolour: "#FF0000", fgcolour: "#00FF00"},
		]
	}
	
];
