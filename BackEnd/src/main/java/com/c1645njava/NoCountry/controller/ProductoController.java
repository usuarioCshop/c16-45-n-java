package com.c1645njava.NoCountry.controller;

import com.c1645njava.NoCountry.entity.Producto;
import com.c1645njava.NoCountry.service.ProductoService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class ProductoController {

    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    @GetMapping({"/producto","/"})
    public String listarProductos(Model model) {
        model.addAttribute("productos",  productoService.listarProductos());
        return "producto";
    }

    @GetMapping("/formulario/producto")
    public String formularioProducto(Model model) {
        Producto producto = new Producto();
        model.addAttribute("producto", producto);
        return "form_producto";
    }

    @PostMapping("/producto")
    public String guardarProducto(@ModelAttribute("producto") Producto producto) {
        productoService.guardarProducto(producto);
        return "redirect:/producto";
    }

    @GetMapping("/producto/editar/{id}")
    public String editarProductoForm(@PathVariable Long id, Model model) {
        model.addAttribute("producto", productoService.mostrarPorId(id));
        return "editar_producto";
    }

    @PostMapping("/producto/{id}")
    public String editarProducto(@PathVariable Long id, @ModelAttribute("producto") Producto producto) {
        Producto productoExistente = productoService.mostrarPorId(id);
        productoExistente.setNombre(producto.getNombre());
        productoExistente.setPrecio(producto.getPrecio());
        productoExistente.setFechaAlta(producto.getFechaAlta());
        productoService.editarProducto(productoExistente);
        return "redirect:/producto";
    }
}
