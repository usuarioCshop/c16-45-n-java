package com.cursojava.curso.service;

import com.cursojava.curso.dto.UsuarioDTO;
import com.cursojava.curso.dto.UsuarioDTOMapper;
import com.cursojava.curso.entity.Usuario;
import com.cursojava.curso.repository.UsuarioRepository;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class UsuarioService {
    private final UsuarioRepository usuarioRepository;
    private final UsuarioDTOMapper usuarioDTOMapper;


    @Autowired
    public UsuarioService(UsuarioRepository usuarioRepository, UsuarioDTOMapper usuarioDTOMapper) {
        this.usuarioRepository = usuarioRepository;
        this.usuarioDTOMapper = usuarioDTOMapper;
    }

    @Transactional
    public UsuarioDTO crear(Usuario usuario) {
        usuarioRepository.save(usuario);
        return new UsuarioDTO(
                usuario.getId(),
                usuario.getNombre(),
                usuario.getCorreo(),
                usuario.getRol()
        );
    }

    public UsuarioDTO getUsuario(String id) {
        return usuarioRepository.findById(id)
                .map(usuarioDTOMapper)
                .orElse(null);
    }

    public List<UsuarioDTO> getUsuarios() {
        return usuarioRepository.findAll()
                .stream()
                .map(usuarioDTOMapper)
                .collect(Collectors.toList());
    }

    public UsuarioDTO updateUsuario(String id, Usuario usuarioUpdate) {
        Optional<Usuario> dbResponse = usuarioRepository.findById(id);
        if (dbResponse.isPresent()) {
            Usuario usuario = dbResponse.get();
            usuario.setNombre(usuarioUpdate.getNombre());
            usuario.setCorreo(usuarioUpdate.getCorreo());
            usuario.setPassword(usuarioUpdate.getPassword());
            usuario.setRol(usuarioUpdate.getRol());
            usuarioRepository.save(usuario);
            return new UsuarioDTO(
                    usuario.getId(),
                    usuario.getNombre(),
                    usuario.getCorreo(),
                    usuario.getRol()
            );
        } else {
            return null;
        }
    }

    public void delete(String id) throws Exception {
        Optional<Usuario> dbResponse = usuarioRepository.findById(id);
        usuarioRepository.delete(dbResponse.orElseThrow(() -> new Exception("Usuario no encontrado"))
        );
    }
}
