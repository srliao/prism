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
			/chain|wait_for|wait|restart|reset_limit|hurt|target|energy|active|options|add|char|stats|weapon|set|lvl|refine|cons|talent|start_hp|count|params|label|until/,
		alias: "keyword",
	},
	options: {
		pattern: /debug|iteration|duration|workers|mode/,
		alias: "tag",
	},
	abilities: {
		pattern:
			/skill|burst|attack|charge|aim|high_plunge|low_plunge|jump|dash/,
		alias: "function",
	},
	characters: {
		pattern:
			/travelerelectro|traveleranemo|travelergeo|travelerhydro|travelercryo|travelerpyro|travelerdendro|albedo|aloy|amber|barbara|beidou|bennett|chongyun|diluc|diona|eula|fischl|ganyu|hutao|jean|kaedeharakazuha|kazuha|kaeya|kamisatoayaka|ayaka|keqing|klee|kujousara|kujosara|sara|lisa|mona|ningguang|noelle|qiqi|raidenshogun|raiden|razor|rosaria|sangonomiyakokomi|kokomi|sayu|sucrose|tartaglia|thoma|venti|xiangling|xiao|xingqiu|xinyan|yanfei|yoimiya|yunjin|zhongli|gorou|aratakiitto|itto|shenhe|yae(miko)?/,
		alias: "constant",
	},
	other: {
		pattern:
			/value|max|filler|interval|every|once|amount|ele(ctro)?(\%)?|resist|pyro(\%)?|dendro(\%)?|hydro(\%)?|geo(\%)?|anemo(\%)?|physical|cryo(\%)?/,
		alias: "tag",
	},
	stats: {
		pattern: /(?:\s)(hp(\%)?|atk(\%)?|def(\%)?|er|em|cr|cd|heal|phys\%)/,
		alias: "tag",
	},
	mode: {
		pattern: /(sl|apl)/,
		alias: "string",
	},
	flags: {
		pattern:
			/\+if|\+swap_to|\+swap_lock|\+is_onfield|\+needs|\+limit|\+timeout|\+try|\+drop/,
		alias: "tag",
	},
	number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	punctuation: /[{}[\],]/,
	operator: /:/,
	boolean: /\b(?:false|true)\b/,
};

// Prism.languages.webmanifest = Prism.languages.gcsim;
