package models;

import java.util.ArrayList;
import java.time.LocalDateTime;

public class Post {
    private final String content;
    private static ArrayList<Post> instances = new ArrayList<>();
    private boolean published;
    private LocalDateTime createdAt;
    private int id;

    public Post (String content){
        this.content = content;
        this.published = false;
        this.createdAt = LocalDateTime.now();
        instances.add(this);
        this.id = instances.size();
    }

    public String getContent() {
        return content;
    }

    public static ArrayList<Post> getAll(){
        return instances;
    }

    public static void clearAllPosts(){
        instances.clear(); //clear as a method is part of the ArrayList class.
    }

    public boolean getPublished(){
        return this.published;
    }

    public static Post findById(int id){
        return instances.get(id-1); //why minus 1? See if you can figure it out.
    }


    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public int getId() {
        return id;
    }

}