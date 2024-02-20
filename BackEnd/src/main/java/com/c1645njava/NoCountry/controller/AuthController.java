package com.c1645njava.NoCountry.controller;

import com.c1645njava.NoCountry.entity.Usuario;
import com.c1645njava.NoCountry.entity.AuthenticationResponse;
import com.c1645njava.NoCountry.service.UsuarioAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    private final UsuarioAuthService authService;

    @Autowired
    public AuthController(UsuarioAuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/registrar")
    public ResponseEntity<AuthenticationResponse> registrar(@RequestBody Usuario usuarioRequest) {
        return ResponseEntity.ok(authService.registrar(usuarioRequest));
    }

    @PostMapping("/autenticar")
    public ResponseEntity<AuthenticationResponse> autenticar(@RequestBody Usuario usuarioRequest) {
        return ResponseEntity.ok(authService.autenticar(usuarioRequest));
    }
}
