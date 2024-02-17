package com.cursojava.curso.service;

import com.cursojava.curso.entity.Producto;

import java.util.List;

public interface ProductoService {

    List<Producto> listarProductos();

    Producto guardarProducto(Producto producto);

    Producto mostrarPorId(Long id);

    Producto editarProducto(Producto producto);

    void eliminarProducto(Long id);

}
