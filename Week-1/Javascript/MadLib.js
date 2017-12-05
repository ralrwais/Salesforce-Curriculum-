let madLib = (verb, adj, noun) => {
	let upperVerb = verb.toUpperCase();
	let upperAdj = adj.toUpperCase();
	let upperNoun = noun.toUpperCase();
	const lib = `We shall ${upperVerb} the ${upperAdj} ${upperNoun}`;

	return lib;
}