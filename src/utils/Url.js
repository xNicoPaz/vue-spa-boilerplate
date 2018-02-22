export default class Url{
	static apiBaseUrl(){
		return 'http:\/\/my.api.domain/api/';
	}

	/*
	Example use of this class for retrieving paths
	and URLs to request to the API

	static exampleResourceDetailsUrl(resourceId){
		return this.apiBaseUrl + 'example-resource/' + resourceId;
	}

	static exampleResourceDeleteUrl(resourceId){
		return this.apiBaseUrl + 'example-resource/' + resourceId + '/delete';
	}	
	*/
}