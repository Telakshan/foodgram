package com.thilakshan.foodgram.service;

import com.thilakshan.foodgram.datatransferobject.RegisterRequest;
import com.thilakshan.foodgram.model.UserProfile;
import com.thilakshan.foodgram.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class AuthService {

    private final UserRepository userRepository;

    public void signup(RegisterRequest registerRequest){
        UserProfile userProfile = new UserProfile();
        userProfile.setUsername(registerRequest.getUsername());
        userProfile.setPassword(registerRequest.getPassword());
        userProfile.setEmail(registerRequest.getEmail());
        userRepository.save(userProfile);
    }

    public void login(){

    }
}
