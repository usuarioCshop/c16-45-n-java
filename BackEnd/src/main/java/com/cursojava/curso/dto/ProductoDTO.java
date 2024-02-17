package com.cursojava.curso.dto;

import java.time.LocalDate;

public record ProductoDTO
(
    String detalle,

    Long precio,

    LocalDate fechaAlta,

    String marca,

    String nombreProveedor,

    String imagenUrl

)
{

}
