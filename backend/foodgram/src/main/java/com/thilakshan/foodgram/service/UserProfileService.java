package com.thilakshan.foodgram.service;

import com.thilakshan.foodgram.model.UserProfile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Service
public class UserProfileService {

    private final UserProfileDataAccessService userProfileDataAccessService;

    @Autowired
    public UserProfileService(UserProfileDataAccessService userProfileDataAccessService) {
        this.userProfileDataAccessService = userProfileDataAccessService;
    }

    public List<UserProfile> getUserProfiles(){
        return userProfileDataAccessService.getUserProfiles();
    }

    //1. Check if image is not empty
    //2. If file is an image
    //3. the user exists in our database
    //4. Grab some meta data
    //5. store the image in s3 and update database with s3 image link
    public void uploadUserProfileImage(String username, MultipartFile file) {

    }
}
