package com.c1645njava.NoCountry.service;

import com.c1645njava.NoCountry.entity.Producto;

import java.util.List;

import com.c1645njava.NoCountry.repository.ProductoRepository;
import com.c1645njava.NoCountry.service.ProductoService;
import org.springframework.stereotype.Service;


import java.util.NoSuchElementException;
import java.util.stream.Collectors;

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

    @Override
    public List<Producto> filtrarPorPrecio(
            String codigo, double minPrecio, double maxPrecio, int minCantidad, int maxCantidad, String categoria
    ) {
        return repositorio.findAll().stream()
                .filter(producto -> producto.getCodigoBarra().contains(codigo))
                .filter(producto -> producto.getPrecio() >= minPrecio)
                .filter(producto -> producto.getPrecio() >= maxPrecio)
                .filter(producto -> producto.getCantidad() >= minCantidad)
                .filter(producto -> producto.getCantidad() >= maxCantidad)
                .filter(producto -> producto.getCategoria().contains(categoria))
                .collect(Collectors.toList());
    }
}