export const dynamic = "force-static";

const content = `# Cooling Repair S.L.

> Servicio profesional de reparación, mantenimiento e instalación de aire acondicionado en Valencia y la Comunidad Valenciana, con más de 20 años de experiencia.

## Empresa
- Nombre: Cooling Repair S.L.
- Web: https://www.cooling-repair.com
- Teléfono: +34 615 35 73 74
- Email: cooling-repair@outlook.es
- Ubicación: Valencia, España
- Zona de servicio: Valencia y Comunidad Valenciana
- Horario: Lunes a Viernes, 8:00 - 20:00
- Idioma: Español (es-ES)

## Servicios
- Reparación de aire acondicionado split
- Sistemas de climatización por zonas
- Reparación de aire acondicionado por conductos
- Reparación de sistemas de aerotermia
- Reparación de aire acondicionado multisplit
- Carga de gas refrigerante (gases ecológicos certificados)
- Mantenimiento preventivo de aire acondicionado
- Reparación de sistemas de calefacción

## Diferenciadores
- Más de 20 años de experiencia
- Técnicos especializados
- Atención a particulares y empresas
- Garantía en todos los trabajos
- Presupuesto sin compromiso

## Páginas
- Página principal: https://www.cooling-repair.com/
- Servicios: https://www.cooling-repair.com/#servicios
- Cómo trabajamos: https://www.cooling-repair.com/#como-trabajamos
- Preguntas frecuentes: https://www.cooling-repair.com/#faq
- Contacto: https://www.cooling-repair.com/#contacto
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
