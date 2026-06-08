#!/usr/bin/env bash
# ============================================================
# Fanil — renombra los archivos de imagen a nombres "limpios"
# (sin apóstrofes, tildes, espacios ni mayúsculas) para que
# coincidan con las rutas actualizadas en script.js / index.html
# y no den error 404 en hosting sensible a mayúsculas.
#
# USO:  colócalo en la raíz del proyecto (donde está la carpeta img/)
#       y ejecútalo una sola vez:
#           bash rename-images.sh
#
# Es seguro: solo mueve un archivo si existe; si ya fue renombrado,
# lo salta. No borra nada.
# ============================================================
set -u
cd "$(dirname "$0")" || exit 1

ren() {
  # $1 = nombre viejo, $2 = nombre nuevo (ambos relativos, ej. img/...)
  if [ -f "$1" ]; then
    if [ -e "$2" ]; then
      echo "YA EXISTE destino, omito: $2"
    else
      mv "$1" "$2" && echo "OK  $1  ->  $2"
    fi
  else
    echo "no encontrado (¿ya renombrado?): $1"
  fi
}

# --- Logo en modo oscuro (tenía espacio y mayúsculas) ---
ren "img/Logo Fanil.png" "img/logo-fanil.png"

# --- Detergentes ---
ren "img/Brik´s-Detergente-5lts.png"                        "img/brinks-detergente-5lts.png"
ren "img/brink's-detergente-4en1.png"                       "img/brinks-detergente-4en1.png"
ren "img/brink's-detergente-suavizante-5lts.png"            "img/brinks-detergente-suavizante-5lts.png"
ren "img/brink's-detergente-suavizante-naranjo.png"         "img/brinks-detergente-suavizante-naranjo.png"
ren "img/brink's-detergente-suavizante-sin-colorante.png"   "img/brinks-detergente-suavizante-sin-colorante.png"

# --- Lavalozas ---
ren "img/Lavalosas-concentrado-2L.png"                      "img/lavalosas-concentrado-2l.png"
ren "img/brink's-lavaloza-pomelo-menta-2Lts.png"            "img/brinks-lavaloza-pomelo-menta-2lts.png"
ren "img/brink's-lavalozas-concentrado-2Lts.png"            "img/brinks-lavalozas-concentrado-2lts.png"
ren "img/lavalozas-virginia1L.png"                          "img/lavalozas-virginia1l.png"

# --- Jabones ---
ren "img/Jabon-Lux.png"                                     "img/jabon-lux.png"
ren "img/Jabon-lux-jasmine.png"                             "img/jabon-lux-jasmine.png"
ren "img/jabon-barra-LeSancy-almendras.png"                 "img/jabon-barra-lesancy-almendras.png"
ren "img/jabon-barra-LeSancy-karite.png"                    "img/jabon-barra-lesancy-karite.png"
ren "img/jabon-barra-Lesancy-hygienic.png"                  "img/jabon-barra-lesancy-hygienic.png"

# --- Limpiapisos ---
ren "img/Limpiapisos-citrico.png"                           "img/limpiapisos-citrico.png"
ren "img/limpiapisos-brink's-2lts-lavanda.png"              "img/limpiapisos-brinks-2lts-lavanda.png"
ren "img/limpiapisos-brink's-2lts-manzana-canela.png"       "img/limpiapisos-brinks-2lts-manzana-canela.png"

echo "Listo."
