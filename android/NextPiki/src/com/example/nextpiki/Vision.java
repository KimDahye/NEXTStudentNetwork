package com.example.nextpiki;

import android.app.ActionBar;
import android.os.Bundle;
import android.support.v7.app.ActionBarActivity;
import android.util.Log;
import android.widget.ImageView;
import android.widget.TextView;


public class Vision extends ActionBarActivity {
	

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_vision);

		ActionBar actionBar = getActionBar();
        actionBar.hide();
		
		ImageView backgroundImg = (ImageView) findViewById(R.id.backgroundImage);
		
		ImageView stuImage = (ImageView)findViewById(R.id.stu_image);
		TextView stuName = (TextView)findViewById(R.id.stu_name);
		TextView stuMajor = (TextView)findViewById(R.id.stu_major);
		TextView stuVision = (TextView)findViewById(R.id.stu_vision);
		
		
		
		int stuId = getIntent().getExtras().getInt("StudentId"); 
		
		Log.i("Vision","stuId : " +stuId);
		
		Dao dao = new Dao(getApplicationContext());
		Log.i("Vision","Dao"+dao);
		TileInfo content = dao.getTileInfoByStu_id(stuId);
		
		Log.i("Vision","content :" +content);
		
//		try{
//			InputStream ims = getApplicationContext().getAssets().open(content.getImg_name());
//			Drawable d = Drawable.createFromStream(ims, null);
//			stuImage.setImageDrawable(d);
//			
//		}catch(IOException e)
//		{
//			Log.e("Vision","ImageOpenERROR:" + e);
//		}
		
		stuName.setText(content.getName_kor());
		stuMajor.setText(content.getMajor());
		stuVision.setText(content.getVision());
	}

}
