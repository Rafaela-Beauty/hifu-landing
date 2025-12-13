## Rafaela Beauty · Landing HIFU

Landing page construida con Next.js (App Router) y Tailwind CSS para promocionar las jornadas de HIFU 7 en Rafaela Beauty.

### Páginas principales
- `/hifu`: landing final con secciones Hero, Authority, Promo, AboutHifu, Locations, Differentials, Testimonials, CTA y Footer.
- `app/page.tsx`: placeholder por defecto; mantenerlo simple o redirigir según necesidad.

### Scripts útiles
- `npm run dev`: inicia el servidor en modo desarrollo en `http://localhost:3000`.
- `npm run lint`: ejecuta ESLint con la configuración del proyecto.
- `npm run build`: genera la build de producción.
- `npm run start`: levanta la build de producción.

### Contenido editable
- Copys principales ubicados en los componentes dentro de `src/components`.
- WhatsApp y redes en `Footer.tsx` y CTA: actualizar cuando haya URL definitivas.
- Testimonios de ejemplo en `Testimonials.tsx`: reemplazar por casos reales.
- Schema LocalBusiness embebido en `app/hifu/page.tsx`: completar campos de dirección si se desea mayor detalle.

### Estilo y accesibilidad
- Basado en Tailwind utility-first, mobile-first, contrastes suaves.
- Un solo `h1` (en `Hero`) y jerarquía `h2/h3` en el resto de secciones.
- Botones con `aria-label` descriptivo para los CTA.

### Próximos pasos sugeridos
1. Ajustar enlaces reales (Instagram, fotos, etc.).
2. Revisar imágenes o assets si se suman al Hero o testimonios.
3. Preparar despliegue (Vercel recomendado) y configurar dominio/SEO adicional si aplica.
