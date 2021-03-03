package com.thilakshan.foodgram.datastore;

import com.thilakshan.foodgram.model.UserProfile;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class FakeUserProfileDataStore {

    private static final List<UserProfile> USER_PROFILE_PROFILES = new ArrayList<>();

    static {
        USER_PROFILE_PROFILES.add(new UserProfile("janetjones", "password", "janet@gmail.com", null));
        USER_PROFILE_PROFILES.add(new UserProfile("adamwong", "password", "adam@gmail.com", null));
    }

    public List<UserProfile> getUserProfiles(){
        return USER_PROFILE_PROFILES;
    }

}
