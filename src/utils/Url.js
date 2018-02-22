export default class Url{
	static apiBaseUrl(){
		return 'http:\/\/api.gp.local/api';
	}

	static memberDetailsPath(userId){
		return '/members/' + userId;
	}

	static memberEditPath(userId){
		return '/members/' + userId + '/edit';
	}
	
	static memberDeleteUrl(userId){
		return this.apiBaseUrl() + '/members/' + userId + '/delete';
	}	

	static memberDetailsUrl(userId){
		return this.apiBaseUrl() + this.memberDetailsPath(userId);
	}
}