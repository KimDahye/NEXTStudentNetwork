package com.example.nextpiki;

import retrofit.RestAdapter;

public class Proxy {
	private String SERVER_ADDRESS = "http://125.209.198.141";

	public String getJsonData() {

		// retrofit을 이용해 주소에 연결
		RestAdapter restAdapter = new RestAdapter.Builder()
		.setEndpoint(SERVER_ADDRESS)
		.build();

		NextPikiService service = restAdapter.create(NextPikiService.class);
		
		return service.getTileinfo("4");
	}

}
