package com.example.nextpiki;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import android.app.Activity;
import android.content.Context;
import android.graphics.drawable.Drawable;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.ImageView;
import android.widget.TextView;

public class GridViewAdapter extends ArrayAdapter<TileInfo>{
	 LayoutInflater inflater;
	 private Context context;
	 private int layoutResourceId;
	 private ArrayList<TileInfo> Info;
	
	 
	 public GridViewAdapter(Context context, int layoutResourceId, ArrayList<TileInfo> Info) {
		super(context, layoutResourceId, Info);
		this.context = context;
		this.layoutResourceId = layoutResourceId;
		this.Info = Info;
	
	}
	 
	 public View getView(int position, View convertView, ViewGroup parent)
		{
			View row = convertView;
				
			if(row == null)
			{
				LayoutInflater inflater = ((Activity)context).getLayoutInflater();
				row = inflater.inflate(layoutResourceId, parent,false);
			}
			
//			ImageView userImg = (ImageView)row.findViewById(R.id.userImg);
//			
//			try{
//				InputStream is = context.getAssets().open(Info.get(position).getImg_name());
//				Drawable d= Drawable.createFromStream(is,null);
//				userImg.setImageDrawable(d);
//			}catch(IOException e){
//				Log.e("ERROR","ERROR:"+e);
//			}
			
			TextView userMajor = (TextView)row.findViewById(R.id.userMajor);
			TextView userName = (TextView)row.findViewById(R.id.userName);
			
			userMajor.setText(Info.get(position).getMajor());
			userName.setText(Info.get(position).getName_kor());
			
			return row;
		}


}
