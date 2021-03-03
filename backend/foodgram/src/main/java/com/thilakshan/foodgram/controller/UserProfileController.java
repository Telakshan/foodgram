package com.thilakshan.foodgram.controller;

import com.thilakshan.foodgram.model.UserProfile;
import com.thilakshan.foodgram.service.UserProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.print.attribute.standard.Media;
import java.util.List;

@RestController
@RequestMapping("/api/v1/user-profile")
public class UserProfileController {

    private final UserProfileService userProfileService;

    @Autowired
    public UserProfileController(UserProfileService userProfileService) {
        this.userProfileService = userProfileService;
    }

    @GetMapping
    public List<UserProfile> getUserProfile(){
        return userProfileService.getUserProfiles();
    }

    @PostMapping(
            path = "{username/image/download}",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public void uploadUserProfileImage(@PathVariable("username") String username, @RequestParam("file") MultipartFile file){
        userProfileService.uploadUserProfileImage(username, file);
    }

}
