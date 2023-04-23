export function rps(move) {
	const legal_move = ["rock", "paper", "scissors"];
	const opponent = legal_move[Math.floor(Math.random() * 3)];

	if (move === undefined) {
		return {"player": opponent};
	} else if (!legal_move.includes(move.toLowerCase())) {
		throw new RangeError("Invalid move.");
	}

	move = move.toLowerCase();
	var result;
	if (move === opponent) {
		result = "tie";
	} else {
		if ((move === "rock" && opponent === "scissors") ||
            (move === "paper" && opponent === "rock") ||
			(move === "scissors" && opponent === "paper"))
			 {
			result = "win";
		} else {
			result = "lose";
		}
	}
	return {"player": move, "opponent": opponent, "result": result};
}

export function rpsls(move) {
	const legal_move = ["rock", "paper", "scissors", "lizard", "spock"];
	const opponent = legal_move[Math.floor(Math.random() * 5)];

	if (move === undefined) {
		return {"player": opponent};
	} else if (!legal_move.includes(move.toLowerCase())) {
		throw new RangeError("Invalid move.");
	}

	move = move.toLowerCase();
	var result;
	if (move === opponent) {
		result = "tie";
	} else {
		if ((move === "spock" && opponent === "scissors") ||
            (move === "spock" && opponent === "rock") ||
			(move === "scissors" && opponent === "paper") ||
            (move === "scissors" && opponent === "lizard") ||
			(move === "paper" && opponent === "rock") ||
            (move === "paper" && opponent === "spock") ||
			(move === "lizard" && opponent === "spock") ||
			(move === "lizard" && opponent === "paper") ||
            (move === "rock" && opponent === "lizard") ||
			(move === "rock" && opponent === "scissors"))
             {
			result = "win";
		} else {
			result = "lose";
		}
	}
	return {"player": move, "opponent": opponent, "result": result};
}