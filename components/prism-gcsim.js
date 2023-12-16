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
		pattern: /\#.*/,
		greedy: true,
	},
	keywords: {
		pattern:
			/\b(?:chain|wait_for|wait(?: )|restart|reset_limit|hurt|target|energy|active|options|add|char|stats|weapon|set|lvl|refine|cons|talent|start_hp|count|\+params|until)\b/,
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
			/\b(?:traveleranemo|travelergeo|travelerelectro|travelerdendro|travelerhydro|travelerpyro|travelercryo|aether-anemo|lumine-anemo|aether-geo|lumine-geo|aether-electro|lumine-electro|aether-dendro|lumine-dendro|aether-hydro|lumine-hydro|aether-pyro|lumine-pyro|aether-cryo|lumine-cryo|aetheranemo|lumineanemo|aethergeo|luminegeo|aetherelectro|lumineelectro|aetherdendro|luminedendro|aetherhydro|luminehydro|aetherpyro|luminepyro|aethercryo|luminecryo|albedo|aloy|amber|barbara|barb|beidou|bennett|chongyun|chong|cyno|diluc|diona|eula|fischl|fish|amy|ganyu|hutao|tao|ht|jean|kaedeharakazuha|kazuha|kaz|kaeya|kamisatoayaka|ayaka|kamisatoayato|ayato|keqing|keq|klee|kujousara|kujosara|sara|lisa|mona|ningguang|ning|noelle|qiqi|raidenshogun|raiden|herexcellencythealmightynarukamiogoshogodofthunder|razor|rosaria|rosa|sangonomiyakokomi|kokomi|koko|sayu|sucrose|tartaglia|childe|thoma|venti|xiangling|xl|xiao|xingqiu|xq|xinyan|yanfei|yoimiya|yoi|yunjin|zhongli|zhong|zl|gorou|aratakiitto|itto|aratakitheoneandoniitto|shenhe|yae|yaemiko|yelan|kukishinobu|kuki|shikanoinheizou|heizou|tighnari|collei|dori|candace|nilou|kusanali|lesserlordkusanali|nahida|layla|faruzan|faru|wanderer|scaramouche|scara|kunikuzushi|kuni|kabukimono|alhaitham|haitham|baizhu|dehya|yaoyao|mika|kaveh|kirara|lyney|lynette|neuvillette|neuv|chiefjusticeoffontaine|freminet|furina|furinadefontaine)\b/,
		alias: "constant",
	},
	other: {
		pattern:
			/\b(?:value|max|filler|interval|every|once|amount|ele(?:ctro)?(?:\%)?|resist|pyro(?:\%)?|dendro(?:\%)?|hydro(?:\%)?|geo(?:\%)?|anemo(?:\%)?|physical|cryo(?:\%)?)/,
		alias: "tag",
	},
	stats: {
		pattern:
			/\b(?:(?:hp(?:\%)?|atk(?:\%)?|def(?:\%)?|er|em|cr|cd|heal|phys\%))/,
		alias: "tag",
	},
	stringkeys: {
		pattern: /\b(?:sl|apl)\b/,
		alias: "string",
	},
	flags: {
		pattern:
			/(?:\+if|\+swap_to|\+swap_lock|\+is_onfield|\+needs|\+limit|\+timeout|\+try|\+drop|\+label)\b/,
		alias: "tag",
	},
	number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	punctuation: /[{}[\],]/,
	operator: /:/,
	boolean: /\b(?:false|true)\b/,
};

// Prism.languages.webmanifest = Prism.languages.gcsim;