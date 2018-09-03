//serwis obslugujacy uzytkownikow
class UsersService {  
	constructor() {    
		this.users = [];  
	} 
	//zwrocenie tablicy uzytkownikow 
	getAllUsers() {    
		return this.users;  
	}  
	//odszukanie uztkownika po wskazanym przez nas ID
	getUserById(userId) {    
		return this.users.find(user => user.id === userId);
	}  
	addUser(user) {    
		this.users = [user, ...this.users];  
	}  
	removeUser(userId) {    
		this.users = this.users.filter(user => user.id !== userId);  
	}
}

module.exports = UsersService; 