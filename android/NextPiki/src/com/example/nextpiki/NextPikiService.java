package com.example.nextpiki;

import retrofit.http.GET;
import retrofit.http.Query;

public interface NextPikiService {
	@GET("/students")
	  String getTileinfo(@Query("num")String num);
}
