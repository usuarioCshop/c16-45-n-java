package com.c1645njava.NoCountry.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Getter
@Setter
@Entity
@Table(name = "productos")
public class Producto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 50)
    private String nombre;

    @Column(nullable = false)
    private double precio;

    @Column(nullable = false)
    private LocalDate fechaAlta;

    @Column(nullable = false)
    private int cantidad;

    private String categoria;

    public Producto() {
    }

    public Producto(int id, String nombre, double precio, LocalDate fechaAlta, int cantidad, String categoria) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.fechaAlta = fechaAlta;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    @Override
    public String toString() {
        return "Producto{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", precio=" + precio +
                ", fechaAlta=" + fechaAlta +
                '}';
    }
}
