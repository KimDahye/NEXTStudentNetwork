package com.example.nextpiki;

import java.util.ArrayList;

import android.app.ActionBar;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.view.View;
import android.widget.AdapterView;
import android.widget.AdapterView.OnItemClickListener;
import android.widget.GridView;
import android.widget.ImageView;

public class MainActivity extends ActionBarActivity implements OnItemClickListener{
	
	private GridView gridView;
	private ImageView nextBi;
	private ArrayList<TileInfo> TileList;
	
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
		nextBi = (ImageView) findViewById(R.id.topImg);
		refreshData();
		
        
        
	}
	
	private void makeGridView()
	{	
		Dao dao = new Dao(getApplicationContext());
		
		//DB에서 글 내용을 받아옴
        TileList = dao.getTileList();
		
        //gridView에 어댑터 부착
        gridView = (GridView) findViewById(R.id.gridView);
		gridView.setAdapter(new GridViewAdapter(this,R.layout.activity_img_tile_left,TileList));
		
		gridView.setOnItemClickListener(this);
	}
	
	private Handler handler = new Handler();
	
	private void refreshData()
	{
		new Thread(){
			public void run(){
				//서버에서 JsonData가져옴
				Proxy proxy = new Proxy();
				String jsonData = proxy.getJsonData();
						
				//DataBase에 JsonData를 저장 
				Dao dao = new Dao(getApplicationContext());
				dao.insertJsonData(jsonData);
				
			
				handler.post(new Runnable(){
					public void run(){
						makeGridView();
					}
				});
			}
		}.start();
		
	}

	@Override
	public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
		
		Intent intent = new Intent(this,Vision.class);
		intent.putExtra("StudentId", TileList.get(position).getId());
		Log.i("onItemClick","TileList.get(position).getId():"+TileList.get(position).getId());
		startActivity(intent);
		
	}
	
	
}


