package com.cursojava.curso.dto;

import com.cursojava.curso.entity.Usuario;
import org.springframework.stereotype.Service;

import java.util.function.Function;

@Service
public class UsuarioDTOMapper implements Function<Usuario, UsuarioDTO> {
    @Override
    public UsuarioDTO apply(Usuario usuario) {
        return new UsuarioDTO(
                usuario.getId(),
                usuario.getNombre(),
                usuario.getCorreo(),
                usuario.getRol()
        );
    }
}
