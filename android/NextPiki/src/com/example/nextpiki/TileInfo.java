package com.example.nextpiki;

public class TileInfo {

	private int    id;
	private String name_kor;
	private String name_eng;
	private String img_name;
	private String major;
	private String title;
	private String vision;
	private String movie;
	
	
	public TileInfo(int id, String name_kor, String name_eng, String img_name,
			String major, String title, String vision, String movie) {
		super();
		this.id = id;
		this.name_kor = name_kor;
		this.name_eng = name_eng;
		this.img_name = img_name;
		this.major = major;
		this.title = title;
		this.vision = vision;
		this.movie = movie;
	}

	public int getId() {
		return id;
	}

	public String getName_kor() {
		return name_kor;
	}


	public String getName_eng() {
		return name_eng;
	}


	public String getImg_name() {
		return img_name;
	}


	public String getMajor() {
		return major;
	}


	public String getTitle() {
		return title;
	}


	public String getVision() {
		return vision;
	}


	public String getMovie() {
		return movie;
	}
	
	

	
	
	
}
