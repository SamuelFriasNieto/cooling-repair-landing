export const dynamic = "force-static";

const content = `# Cooling Repair S.L.

> Servicio profesional de reparación, mantenimiento e instalación de aire acondicionado en Valencia y la Comunidad Valenciana, con más de 20 años de experiencia.

## Empresa
- Nombre: Cooling Repair S.L.
- CIF: B56965148
- Web: https://www.cooling-repair.com
- Teléfono: +34 615 35 73 74
- Email: cooling-repair@outlook.es
- Domicilio: Calle Ballester 5-A, Bajo 1 Izquierda, 46200 Paiporta (Valencia), España
- Zona de servicio: Valencia, Torrent, Paterna, Burjassot, Gandía, Sagunto, Paiporta y resto de la Comunidad Valenciana
- Horario: Lunes a Viernes, 8:00 - 20:00
- Idioma: Español (es-ES)

## Servicios
- Reparación de aire acondicionado split
- Sistemas de climatización por zonas
- Reparación de aire acondicionado por conductos
- Reparación de sistemas de aerotermia
- Reparación de aire acondicionado multisplit
- Carga de gas refrigerante (gases ecológicos certificados, normativa F-Gas)
- Mantenimiento preventivo de aire acondicionado
- Reparación de sistemas de calefacción

## Marcas con las que trabajamos
Daikin, Mitsubishi, LG, Fujitsu, Panasonic, Samsung, Bosch, Hitachi, Toshiba, Hisense y muchas otras.

## Diferenciadores
- Más de 20 años de experiencia
- Técnicos certificados (F-Gas, RITE)
- Atención a particulares, empresas y comunidades de propietarios
- Garantía por escrito en todos los trabajos
- Presupuesto sin compromiso
- Servicio el mismo día dentro del horario laboral

## Páginas
- Página principal: https://www.cooling-repair.com/
- Servicios: https://www.cooling-repair.com/#servicios
- Cómo trabajamos: https://www.cooling-repair.com/#como-trabajamos
- Preguntas frecuentes: https://www.cooling-repair.com/#faq
- Contacto: https://www.cooling-repair.com/#contacto

## Zonas de servicio (páginas dedicadas)
- Valencia: https://www.cooling-repair.com/zonas/valencia
- Torrent: https://www.cooling-repair.com/zonas/torrent
- Paterna: https://www.cooling-repair.com/zonas/paterna
- Burjassot: https://www.cooling-repair.com/zonas/burjassot
- Gandía: https://www.cooling-repair.com/zonas/gandia
- Sagunto: https://www.cooling-repair.com/zonas/sagunto

## Información legal
- Aviso Legal: https://www.cooling-repair.com/aviso-legal
- Política de Privacidad: https://www.cooling-repair.com/politica-privacidad
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
