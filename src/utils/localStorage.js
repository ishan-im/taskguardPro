// save token to lcal storage
const saveTokenToLocalStorage = (token) => {
	try {
		localStorage.setItem('token', token);
	} catch (error) {
		console.error('Error saving token to local storage:', error);
	}
};

// load token from local storage
const loadTokenFromLocalStorage = () => {
	try {
		const token = localStorage.getItem('token');
		if (token) {
			return token;
		}
	} catch (error) {
		console.error('Error loading token from local storage:', error);
	}
	return null;
};

// remove token from local storage
const removeTokenFromLocalStorage = () => {
	try {
		localStorage.removeItem('token');
	} catch (error) {
		console.error('Error removing token from local storage:', error);
	}
};

const loadStateFromLocalStorage = () => {
	try {
		const token = loadTokenFromLocalStorage();
		const storedState = localStorage.getItem(token);
		
		if (storedState) {
			
			return JSON.parse(storedState);
		}
		return { todos: [] };
	} catch (error) {
		console.error('Error loading state from local storage:', error);
	}
};



const saveStateToLocalStorage = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem(loadTokenFromLocalStorage(), serializedState);
	} catch (error) {
		console.error('Error saving state to local storage:', error);
	}
};


const saveJWTTokenToLocalStorage = (token) => { 
	try {
		localStorage.setItem('jwtToken', token);
	} catch (error) {
		console.error('Error saving token to local storage:', error);
	}
}

const loadJWTTokenFromLocalStorage = () => {
	try {
		const token = localStorage.getItem('jwtToken');
		if (token) {
			return token;
		}
	} catch (error) {
		console.error('Error loading token from local storage:', error);
	}
	return null;
};

const removeJWTTokenFromLocalStorage = () => {
	try {
		localStorage.removeItem('jwtToken');
	} catch (error) {
		console.error('Error removing token from local storage:', error);
	}
}

export {
	loadStateFromLocalStorage,
	saveStateToLocalStorage,
	saveTokenToLocalStorage,
	loadTokenFromLocalStorage,
	removeTokenFromLocalStorage,
	saveJWTTokenToLocalStorage,
	loadJWTTokenFromLocalStorage,
	removeJWTTokenFromLocalStorage
};
