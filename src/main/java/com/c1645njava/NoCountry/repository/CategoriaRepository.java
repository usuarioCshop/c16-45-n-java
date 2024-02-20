package com.c1645njava.NoCountry.repository;

import com.c1645njava.NoCountry.entity.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria, Long> {
   
}
