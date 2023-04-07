class TicTacToe {
	constructor() {
		this.chance = true;
		this.clickedTiles = new Array(3);
		for(let i = 0; i < 3; i++)
			this.clickedTiles[i] = new Array(3).fill(0, 0, 8);
	}

	clickTile(x, y) {
		// Check if Clicked before 
		if(this.clickedTiles[x][y]) {
			console.log("Already Clicked");
			return;
		} 

		if(this.chance) {
			document.getElementById('tile'+x+y).innerHTML = "X";
			this.clickedTiles[x][y] = 1;
		} else {
			document.getElementById('tile'+x+y).innerText = "O";
			this.clickedTiles[x][y] = 2;
		}

		this.chance = !(this.chance);

		if(this.winCheckX()) {
			document.getElementById('GameBoard').innerHTML = '<h1>X WIN</h1>';
		}
		if(this.winCheckO()) {
			document.getElementById('GameBoard').innerHTML = '<h1>O WIN</h1>';
		}
	}

	winCheckX() {
		for(let i = 0; i < 3; i++) {
			if(((this.clickedTiles[i][0] == this.clickedTiles[i][1] && this.clickedTiles[i][1] == this.clickedTiles[i][2]) && this.clickedTiles[i][0] == 1) ||   // Horizontal Check
				((this.clickedTiles[0][i] == this.clickedTiles[1][i] && this.clickedTiles[1][i] == this.clickedTiles[2][i]) && this.clickedTiles[0][i] == 1)) {  // Vertical Check 
				console.log("Win");
				return true;
			} 
		}
		//Diagonal Check
		if(((this.clickedTiles[0][0] == this.clickedTiles[1][1] && this.clickedTiles[1][1] == this.clickedTiles[2][2]) && this.clickedTiles[0][0] == 1) || 
		((this.clickedTiles[0][2] == this.clickedTiles[1][1] && this.clickedTiles[1][1] == this.clickedTiles[2][0]) && this.clickedTiles[1][1] == 1)){
				console.log("HWin");
				return true;
		}
		return false;
	}

	winCheckO() {
		for(let i = 0; i < 3; i++) {
			if(((this.clickedTiles[i][0] == this.clickedTiles[i][1] && this.clickedTiles[i][1] == this.clickedTiles[i][2]) && this.clickedTiles[i][0] == 2) ||   // Horizontal Check
				((this.clickedTiles[0][i] == this.clickedTiles[1][i] && this.clickedTiles[1][i] == this.clickedTiles[2][i]) && this.clickedTiles[0][i] == 2)) {  // Vertical Check 
				console.log("O Win");
				return true;
			} 
		}
		//Diagonal Check
		if(((this.clickedTiles[0][0] == this.clickedTiles[1][1] && this.clickedTiles[1][1] == this.clickedTiles[2][2]) && this.clickedTiles[0][0] == 2) || 
		((this.clickedTiles[0][2] == this.clickedTiles[1][1] && this.clickedTiles[1][1] == this.clickedTiles[2][0]) && this.clickedTiles[1][1] == 2)){
				console.log(" O HWin");
				return true;
		}
		return false;
	}

};

const game = new TicTacToe();

function reset() {
	location.reload();
	return;
}
