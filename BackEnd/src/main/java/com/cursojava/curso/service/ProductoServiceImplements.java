package com.cursojava.curso.service;

import com.cursojava.curso.entity.Producto;

import java.util.List;

import com.cursojava.curso.repository.ProductoRepository;
import org.springframework.stereotype.Service;


import java.util.NoSuchElementException;

@Service
public class ProductoServiceImplements implements ProductoService {

    private final ProductoRepository repositorio;

    public ProductoServiceImplements(ProductoRepository repositorio) {
        this.repositorio = repositorio;
    }

    @Override
    public List<Producto> listarProductos() {
        return repositorio.findAll();
    }

    @Override
    public Producto guardarProducto(Producto producto) {
        return repositorio.save(producto);
    }

    @Override
    public Producto mostrarPorId(Long id) {
        return repositorio.findById(id)
                .orElseThrow(() -> new NoSuchElementException("No se encontró un producto con el ID: " + id));
    }

    @Override
    public Producto editarProducto(Producto producto) {
        return repositorio.save(producto);
    }

    @Override
    public void eliminarProducto(Long id) {
        repositorio.deleteById(id);
    }
}