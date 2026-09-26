# Sweet As Fry — Pedidos

Sistema de pedidos para **La Esquina del Chicharrón**,
13784 SW 177th Ave, Miami FL 33196 · 786-546-7982
(@laesquinadelchicharron) — "Buena Comida, Buena Gente, Siempre".

- App de clientes (`/`) — estilo amarillo/magenta/negro como sus flyers,
  español, US$. Todos los precios incluyen sales tax.
- Pantalla de tienda (`/tienda`) — fondo negro, protegida con `STORE_KEY`:
  pipeline pendiente_pago → nuevo → preparando → listo → entregado
  (el pago por Zelle se confirma con "Pago recibido"),
  sonido de pedido nuevo, editor de catálogo/precios, Zelle configurable,
  pestaña Historial (filtros por fecha y estado, conteo de pedidos,
  total de ingresos, botón "Limpiar historial").
- `/admin` — kill-switch de Portal (protegido con `ADMIN_KEY`, que solo él conoce).

## Menú semilla

Extraído el 23-sep-2026 del flyer oficial de Instagram del negocio.
34 productos · 6 departamentos (Clásicos, Combos, Mofongo Dominicano,
Bebidas, Proteínas por libra, Guarniciones y Extras).
Fotos de Portal (`~/workspace/la-esquina-build/img/`, foodhero-enhanced);
si llegan originales más limpios, reemplazar los archivos en
`public/images/` con el mismo nombre.

## Despliegue (Render)

1. Render → **New → Blueprint**
2. Conectar el repo `Papyboy1920/la-esquina-chicharron-pedidos`
3. **Apply** y esperar el despliegue
4. En Environment: agregar `ADMIN_KEY` con la clave privada de Portal
   (NO está en el repo). Copiar la clave generada de `STORE_KEY`.
5. Pegarla en `/tienda`, configurar el Zelle en la pestaña Catálogo
   y hacer un pedido de prueba

## Demo local

```bash
npm install
STORE_KEY=prueba node server.js
# http://localhost:3000/        (clientes)
# http://localhost:3000/tienda  (tienda)
```

**Nota:** usa SQLite en disco efímero — solo para demo/arranque.
Un lanzamiento real necesita Postgres pago.
