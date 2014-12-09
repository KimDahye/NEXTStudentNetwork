package com.example.nextpiki;

import java.io.InputStream;
import java.util.ArrayList;

import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.json.JSONArray;
import org.json.JSONObject;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.net.Uri;
import android.net.Uri.Builder;
import android.os.AsyncTask;
import android.util.Log;

public class Dao {
	
	private Context context;
	private SQLiteDatabase database;
	
	public Dao(Context context){
		
		this.context = context;
		database = context.openOrCreateDatabase("LocalDATA.db", SQLiteDatabase.CREATE_IF_NECESSARY, null);
		
		try {
			String sql = "CREATE TABLE IF NOT EXISTS Students(stu_id integer primary key autoincrement,"
					+ "										 stu_name_kor text not null,"
					+ "										 stu_name_eng text not null,"
					+ "										 stu_img_name text UNIQUE not null,"
					+ "										 stu_major text not null,"
					+ "										 stu_title text,"
					+ "										 stu_vision text,"
					+ "										 stu_movie text not null);";
			
			Log.i("test",sql);
			
			database.execSQL(sql);
		} catch (Exception e) {
			Log.e("test", "CREATE TABLE FAILED! - " + e);
			e.printStackTrace();
		}
	}
	
	public void insertJsonData(String jsonData) {
			
		
			String name_kor;
			String name_eng;
			String img_name;
			String major;
			String title;
			String vision;
			String movie;
			
			try {
				JSONObject jDataObj = new JSONObject(jsonData);
				JSONArray jArr = jDataObj.getJSONArray("data");
				
				Log.e("abc","jArr.length: " + jArr.length());
				
				for (int i = 0; i < jArr.length(); ++i) {
					JSONObject jObj = jArr.getJSONObject(i);
					
					name_kor = jObj.getString("nameKor");
					name_eng = jObj.getString("nameEng");
					img_name = jObj.getString("imgName");
					major = jObj.getString("majorKor");
					title = jObj.getString("title");
					vision = jObj.getString("vision");
					movie = jObj.getString("movieUrl");
					
					Log.i("test", "name_kor: " + name_kor + " Title" + title);
					
					
					String sql = "INSERT INTO Students(stu_name_kor,stu_name_eng,stu_img_name,stu_major,stu_title,stu_vision,stu_movie )"
									+ " VALUES("+"'" + name_kor + "', '" + name_eng + "', '" + img_name + "','" + major
									+ "', '" + title + "', '" + vision + "', '" + movie + "');";
					
					database.execSQL(sql);
				}
			
			} catch (Exception e) {
				Log.e("test", "JSON ERROR! - " + e);
				e.printStackTrace();
			}
			
			
		}
	
	public TileInfo getTileInfoByStu_id(int stu_id){
		TileInfo tile = null;
		
		String name_kor;
		String name_eng;
		String img_name;
		String major;
		String title;
		String vision;
		String movie;
		
		
		String sql = "SELECT * FROM Students WHERE stu_id =" + stu_id+";";
		
		Cursor cursor = database.rawQuery(sql, null);
		
		cursor.moveToNext();
		
		stu_id = cursor.getInt(0);
		name_kor = cursor.getString(1);
		name_eng = cursor.getString(2);
		img_name = cursor.getString(3);
		major = cursor.getString(4);
		title = cursor.getString(5);
		vision = cursor.getString(6);
		movie = cursor.getString(7);
		
		tile = new TileInfo(stu_id, name_kor, name_eng, img_name, major, title, vision, movie);
		
		cursor.close();
		
		return tile;
	}
	
	public ArrayList<TileInfo> getTileList(){
			
			ArrayList<TileInfo> TileList = new ArrayList<TileInfo>();
		
			int    stu_id;
			String name_kor;
			String name_eng;
			String img_name;
			String   major;
			String title;
			String vision;
			String movie;
			
			String sql = "SELECT * FROM Students;";
			Cursor cursor = database.rawQuery(sql, null);
			
			while(cursor.moveToNext()){
				stu_id = cursor.getInt(0);
				name_kor = cursor.getString(1);
				name_eng = cursor.getString(2);
				img_name = cursor.getString(3);
				major = cursor.getString(4);
				title = cursor.getString(5);
				vision = cursor.getString(6);
				movie = cursor.getString(7);
				
				TileList.add(new TileInfo(stu_id,name_kor,name_eng,img_name,major,title,vision,movie));
			}
			Log.e("abc","TileListCount :" +TileList.size());
			cursor.close();
			
			return TileList;
		}
	
	public void getJsonData() {
		new getDataTask().execute();
	}
	
	private class getDataTask extends AsyncTask<String, Void, String> {

		public String getJsonData(int num){
			String SERVER_ADDRESS = "http://125.209.198.141";
			String REQUSET_URL = SERVER_ADDRESS + "/students";

			String result = "";
			HttpClient httpClient = new DefaultHttpClient();
			HttpGet hGet;
			HttpResponse hRes;
			InputStream inStream;
			Builder builder;
			String getUrl;
			
			builder = Uri.parse(REQUSET_URL).buildUpon();
			builder.appendQueryParameter("num", Integer.toString(num));
			
			getUrl = builder.build().toString();
			Log.d("getJsonData()", "getUrl: " + getUrl);

			hGet = new HttpGet(getUrl);

			try {
				hRes = httpClient.execute(hGet);
				result = EntityUtils.toString(hRes.getEntity(),"UTF-8");


			} catch (Exception e) {
				// fuck you naver
				e.printStackTrace();
				Log.e("abc","catch");
			}
			
			Log.e("abc",result);
			return result;
		}

		@Override
		protected String doInBackground(String... params) {
			String jsonData = getJsonData(6);
			insertJsonData(jsonData);
			return jsonData;
		}
		
		
	}



}
