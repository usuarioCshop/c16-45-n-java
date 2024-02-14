package com.c1645njava.NoCountry.service;

import com.c1645njava.NoCountry.entity.Producto;

import java.util.List;
//agregar listar por nombre, precio, categoria (???)
public interface ProductoService {

    public List <Producto> listarProductos();

    public Producto guardarProducto(Producto producto);

    public Producto mostrarPorId(Long id);
    public Producto editarProducto(Producto producto);
    public void eliminarProducto(Long id);

}
