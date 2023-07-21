package com.example.springapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {

    @Id
    private long id;

    private String name;
    private String designation;
    private String description;
    private String src;

    public Admin(long id, String name, String designation, String description, String src) {
        super();
        this.id = id;
        this.name = name;
        this.designation = designation;
        this.description = description;
        this.src = src;
    }

    public Admin() {
        super();
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSrc() {
        return src;
    }

    public void setSrc(String src) {
        this.src = src;
    }

    @Override
    public String toString() {
        return "Admin [id=" + id + ", name=" + name + ", designation=" + designation + ", description=" + description
                + ", src=" + src + "]";
    }
}
