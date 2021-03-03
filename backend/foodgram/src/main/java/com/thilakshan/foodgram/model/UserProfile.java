package com.thilakshan.foodgram.model;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Objects;
import java.util.Optional;

@AllArgsConstructor
@NoArgsConstructor
@Entity
public class UserProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    private String username;
    private String password;
    private String email;
    private String userProfileImageLink;

    public UserProfile(String username, String password, String email, String userProfileImageLink) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.userProfileImageLink = userProfileImageLink;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserProfile userProfile = (UserProfile) o;
        return Objects.equals(userId, userProfile.userId) &&
                Objects.equals(username, userProfile.username) &&
                Objects.equals(password, userProfile.password) &&
                Objects.equals(email, userProfile.email) &&
                Objects.equals(userProfileImageLink, userProfile.userProfileImageLink);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userId, username, password, email, userProfileImageLink);
    }

    public Optional<String> getUserProfileImageLink() {
        return Optional.ofNullable(userProfileImageLink);
    }

    public void setUserProfileImageLink(String userProfileImageLink) {
        this.userProfileImageLink = userProfileImageLink;
    }
}
