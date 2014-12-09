package com.example.nextpiki;

import java.util.ArrayList;

import android.app.ActionBar;
import android.content.Intent;
import android.os.Bundle;
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
		
		ActionBar actionBar = getActionBar();
        actionBar.hide();
	
		
		nextBi = (ImageView) findViewById(R.id.topImg);
		
		//DataBase¿¡¼­ Á¤º¸¸¦ ÀÐ¾î¿È 
        Dao dao = new Dao(getApplicationContext());
        
        dao.getJsonData();
        
        TileList = dao.getTileList();
		
        //gridView¿¡ ¾î´ðÅÍ ºÎÂø
        gridView = (GridView) findViewById(R.id.gridView);
		gridView.setAdapter(new GridViewAdapter(this,R.layout.activity_img_tile_left,TileList));
		
		gridView.setOnItemClickListener(this);
	}

	@Override
	public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
		
		Intent intent = new Intent(this,Vision.class);
		intent.putExtra("StudentId", TileList.get(position).getId());
		Log.i("onItemClick","TileList.get(position).getId():"+TileList.get(position).getId());
		startActivity(intent);
		
	}
	
	
}


