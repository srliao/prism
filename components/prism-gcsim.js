// https://www.json.org/json-en.html
Prism.languages.gcsim = {
	property: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: true,
		greedy: true,
	},
	string: {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: true,
		greedy: true,
	},
	comment: {
		pattern: /\#.*|\/\/.*/,
		greedy: true,
	},
	keywords: {
		pattern:
			/\b(?:let|while|if|else|fn|switch|case|default|break|continue|fallthrough|return|for|options|add|char|stats|weapon|set|lvl|refine|cons|talent|count|active|target|particle_threshold|particle_drop_count|resist|energy|hurt)\b|\+params/,
		alias: "keyword",
	},
	options: {
		pattern: /\b(?:iteration|duration|swap_delay|workers|hitlag|defhalt)\b/,
		alias: "tag",
	},
	abilities: {
		pattern:
			/\b(?:attack|charge|aim|skill|burst|low_plunge|high_plunge|dash|jump|walk|swap)\b/,
		alias: "function",
	},
	characters: {
		pattern:
			/\b(?:traveleranemo|travelergeo|travelerelectro|travelerdendro|travelerhydro|travelerpyro|travelercryo|aether-anemo|lumine-anemo|aether-geo|lumine-geo|aether-electro|lumine-electro|aether-dendro|lumine-dendro|aether-hydro|lumine-hydro|aether-pyro|lumine-pyro|aether-cryo|lumine-cryo|aetheranemo|lumineanemo|aethergeo|luminegeo|aetherelectro|lumineelectro|aetherdendro|luminedendro|aetherhydro|luminehydro|aetherpyro|luminepyro|aethercryo|luminecryo|albedo|aloy|amber|barbara|barb|beidou|bennett|chongyun|chong|cyno|diluc|diona|eula|fischl|fish|amy|ganyu|hutao|tao|ht|jean|kaedeharakazuha|kazuha|kaz|kaeya|kamisatoayaka|ayaka|kamisatoayato|ayato|keqing|keq|klee|kujousara|kujosara|sara|lisa|mona|ningguang|ning|noelle|qiqi|raidenshogun|raiden|herexcellencythealmightynarukamiogoshogodofthunder|razor|rosaria|rosa|sangonomiyakokomi|kokomi|koko|sayu|sucrose|tartaglia|childe|thoma|venti|xiangling|xl|xiao|xingqiu|xq|xinyan|yanfei|yoimiya|yoi|yunjin|zhongli|zhong|zl|gorou|aratakiitto|itto|aratakitheoneandoniitto|shenhe|yae|yaemiko|yelan|kukishinobu|kuki|shikanoinheizou|heizou|tighnari|collei|dori|candace|nilou|kusanali|lesserlordkusanali|nahida|layla|faruzan|faru|wanderer|scaramouche|scara|kunikuzushi|kuni|kabukimono|alhaitham|haitham|baizhu|dehya|yaoyao|mika|kaveh|kirara|lyney|lynette|neuvillette|neuv|chiefjusticeoffontaine|freminet|furina|furinadefontaine|navia|demoiselle)\b/,
		alias: "constant",
	},
	other: {
		pattern:
			/\b(?:interval|every|once|amount|electro(?:\%)?|element|resist|pyro(?:\%)?|dendro(?:\%)?|hydro(?:\%)?|geo(?:\%)?|anemo(?:\%)?|physical|cryo(?:\%)?|start_hp(?:\%)?|start_energy|pos|radius|freeze_resist)/,
		alias: "tag",
	},
	stats: {
		pattern:
			/\b(?:(?:hp(?:\%)?|atk(?:\%)?|def(?:\%)?|er|em|cr|cd|heal|phys\%))/,
		alias: "tag",
	},
	number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	punctuation: /[{}[\],();.]/,
	operator: /:|\+|-|\*|\/|[!=]=?|>(?:=)?|<(?:=)?|\|\||&&/,
	boolean: /\b(?:false|true)\b/,
	builtin: /\b(?:print|sleep|wait|delay|f|rand|randnorm|type|execute_action|set_particle_delay|set_default_target|set_player_pos|set_target_pos|kill_target|pick_up_crystallize|sin|cos|asin|acos|set_on_tick)\b/
};

// Prism.languages.webmanifest = Prism.languages.gcsim;