# ATEM — Glosario

> *Archivo Total de Escritura Manuscrita.*
> *Pseudo-enciclopedia diegetica de la mega-campana de rol de Marcos Cabobianco. Trabajo de 35 anos en cuadernos manuscritos, publicado como sitio navegable.*

**URL en vivo:** https://atem-glosario-test.pages.dev

---

## Arquitectura

Este repo contiene el **sitio Quartz v4** que sirve el Glosario ATEM. La fuente de verdad de las fichas vive en Google Drive (`G:/Mi unidad/_OBSIDIAN_NEXUS/02_ATEM/`) — Obsidian es el cockpit de edicion. El sitio publicado es la copia procesada.

```
quartz-atem-test/
├── content/                   ← Markdown sincronizado desde Drive
│   ├── index.md               ← Index home "El Archivo"
│   ├── Cronica_del_Archivo.md ← Linea del tiempo diegetica (generada por script)
│   ├── ERAS_PLATONICAS.md     ← Especificacion canonica de eras
│   ├── Ariadna.md             ← ~2300 fichas
│   └── Imagenes_Tier1/        ← (no en repo — vive en Drive)
├── quartz/                    ← Engine Quartz v4
├── quartz.config.ts
├── quartz.layout.ts
└── .github/workflows/
    └── deploy.yml             ← CI/CD a Cloudflare Pages
```

## Pipeline de publicacion

### Para cambios de texto (mayoria de los casos)

```bash
# 1. Editar en Obsidian (G:/Mi unidad/_OBSIDIAN_NEXUS/02_ATEM/Glosario/...)

# 2. Sincronizar al content del repo
cd C:/Users/Usuario/quartz-atem-test/content
rm *.md
cp "G:/Mi unidad/_OBSIDIAN_NEXUS/02_ATEM/Glosario/"*.md .
cp "G:/Mi unidad/_OBSIDIAN_NEXUS/02_ATEM/_redirects/"*.md .

# 3. Commit + push
cd ..
git add content/
git commit -m "sync: actualizacion del Glosario"
git push

# 4. GitHub Actions hace el deploy automatico (~3 min)
```

### Para cambios con imagenes nuevas

Las imagenes (~2 GB, 582 archivos) viven en Drive y NO estan en el repo. El workflow de GitHub Actions deploya solo HTML. Para que las imagenes nuevas aparezcan en el sitio, hay que hacer deploy completo desde local:

```bash
cd C:/Users/Usuario/quartz-atem-test
ln -sf "/g/Mi unidad/_OBSIDIAN_NEXUS/02_ATEM/Imagenes_Tier1" content/Imagenes_Tier1

npx quartz build
npx wrangler pages deploy public --project-name=atem-glosario-test --branch=main --commit-dirty=true
```

## Generacion de la Cronica del Archivo

La pagina [`Cronica_del_Archivo`](https://atem-glosario-test.pages.dev/Cronica_del_Archivo) es **generada automaticamente** por un script Python a partir de los campos `epoca:` en frontmatter de cada ficha.

```bash
python "G:/Mi unidad/_OBSIDIAN_NEXUS/02_ATEM/_scripts/generate_cronica_20260526.py"
```

Las 13 eras platonicas y el formato del campo `epoca:` estan documentados en [`ERAS_PLATONICAS`](https://atem-glosario-test.pages.dev/ERAS_PLATONICAS).

## Reglas operativas

1. **El cuaderno fisico es el oro.** Lo digital es la sombra del archivo.
2. **Cero nombres reales de jugadores** en cuerpo publico.
3. **Voz diegetica siempre** (Paulus, Arkos, Amitlai, Akala). Cero meta sobre mesa de rol.
4. **Wikilinks rotos = 0.** Todo `[[X]]` resuelve a ficha real o stub "en construccion".

## Setup inicial (referencia)

Base: [Quartz v4](https://quartz.jzhao.xyz) (MIT, jackyzha0).
Tema custom: ver `quartz.config.ts`.

Para correr local:

```bash
npm install
npx quartz build --serve
# -> http://localhost:8080
```

## Credito

ATEM y su contenido: © Marcos Cabobianco.
Quartz v4: jackyzha0 / MIT.
