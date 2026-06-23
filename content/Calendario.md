---
title: "Calendario"
# === Identidad ===
slug: Calendario
canonical_name: "Calendario"
aliases:
 - "Calendario de Amitlai"
 - "Cronología desde el punto de vista de Amitlai"
 - "Calendario Megacampaña"

# === Estrato ontológico (Akashic schema v0.1) ===
# Caso especial: el Calendario es DOS cosas a la vez:
# (a) digital_file asertórico — el.doc /.gdoc /.pdf que existe en Drive
# (b) narrative_object lúdico — el documento que Amitlai/Clarisa escriben en el juego
# Schema lo modela como ludic primary, con relations al asertórico.
stratum: ludic
entity_type: narrative_object
entity_type_iri_hint: "golem:NarrativeDocument"

# === Scope ===
campaigns: [atem, mc_core]

# === Relaciones cross-stratum ===
relationships:
  - predicate: authored_by
    object: Amitlai
    object_stratum: ludic
    notes: "Cronista original — escribe en su voz"
  - predicate: inherited_by
    object: Clarisa
    object_stratum: ludic
    notes: "Hereda el oficio de cronista tras Amitlai"
  - predicate: depicts
    object: Juicio_Final
    object_stratum: ludic
    notes: "Entre muchos otros eventos cosmogónicos"
  - predicate: depicts
    object: Danza_del_Conocimiento
    object_stratum: ludic
  - predicate: depicts
    object: Magia_dual
    object_stratum: ludic
  - predicate: has_physical_manifestation
    object: Calendario_merged_doc_file
    object_stratum: assertoric
    notes: "G:/Mi unidad/02_ROL_Y_MEGACAMPAÑA/ATEM/meta/fuentes/MC/Calendario merged.doc"
  - predicate: has_physical_manifestation
    object: Calendario_megacampana_gdoc
    object_stratum: assertoric
    notes: "G:/Mi unidad/01_ACADEMIA/Académicas/Cronicas y Relatos/Calendario megacampaña.gdoc"
  - predicate: has_physical_manifestation
    object: Calendario_megacampana_pdf_201808
    object_stratum: assertoric
    notes: "G:/Mi unidad/05_PERSONAL/FastScannerApp/PDFs/Calendario Megacampaña 29-Aug-2018 12-22-04.pdf"
  - predicate: wrote_by
    object_stratum: assertoric
    notes: "Asertóricamente construye el doc 2005-2018; diegéticamente lo escribe Amitlai"

# === Capa analítica ===
analytical_notes:
  - by: claude
    date: 2026-05-19
    note: "Fuente lúdica primaria del archivo (jerarquía de fuentes Constitución §3): por debajo de cuadernos manuscritos pero por encima de mitologizaciones posteriores."
  - by: claude
    date: 2026-05-19
    note: "Palimpsesto declarado: lo presenta como narración consolidada de Amitlai/Clarisa, no como cuaderno primigenio."
  - by: 
    date: 2026-03-23
    note: "Sucesión Amitlai → Clarisa confirmada como herencia diegética del oficio de cronista."

# === Cockpit Obsidian ===
categoria: documento
tags:
 - "documento"
 - "cronologia"
 - "amitlai"
 - "clarisa"
 - "calendario-megacampana"
---

<!-- HEADER_IMG -->
![[Imagenes_Tier1/Calendario.png]]
<!-- /HEADER_IMG -->

> **Esta entrada se refiere al DOCUMENTO Calendario** —la cronología consolidada que [[Amitlai]] y [[Clarisa]] escriben dentro del juego—.
>
> **No confundir con [[Estela_Nereida|Estela como "Chica Calendario 1902"]]**, modelo de litografía Belle Époque que circuló por París uchrónico en portada del *Imprimerie Verneau & Cie*. La nereida del chal y el documento son cosas distintas: el documento, sin embargo, registra muchas apariciones de [[Estela_Nereida|Estela]] y otras figuras del archivo.

> Cronología consolidada del cosmos compartido, escrita en situación lúdica por [[Amitlai]] (compañero-cronista) y heredada por [[Clarisa]]. Fuente lúdica primaria del archivo.

## Fuente primaria

**Calendario merged.doc** — documento físico en `G:\Mi unidad\02_ROL_Y_MEGACAMPAÑA\ATEM\meta\fuentes\MC\`. Encabezado original: *"Cronología desde el punto de vista de [[Amitlai]]"*. Construido por entre 2005 y 2018 como narración interna del compañero [[Amitlai]].

> *"Calendario ciclo"* — versión paralela en `01_ACADEMIA/Académicas/Cronicas y Relatos/Calendario ciclo.gdoc` (Google Doc).

> *"Calendario ciclo 29-Aug-2018 12-22-04.pdf"* — snapshot PDF de 2018 en `05_PERSONAL/FastScannerApp/PDFs/`.

## Función en el cosmos compartido

El Calendario es la **fuente lúdica primaria** de para consolidar la cronología cósmica. Según la jerarquía de fuentes (Constitución §3):

| Tipo | Status | El Calendario es... |
|---|---|---|
| Cuadernos manuscritos (C1-C123) | Lo más antiguo es lo más real | mayor antigüedad |
| Transcripciones digitales (M_CXX.docx) | Fuente primaria derivada | mayor antigüedad |
| **Calendario / Glosario** | **Fuente lúdica primaria (consolidación dentro del juego)** | **← el Calendario** |
| Grabaciones | Registro asertórico directo | mayor antigüedad |
| Mitologizaciones posteriores | Palimpsesto válido SI declara | mayor antigüedad |

A diferencia de un documento meta, el Calendario está escrito **desde dentro del juego** — [[Amitlai]] (compañero) narra los eventos cósmicos en primera persona, lo que lo hace "fuente lúdica" y no mera consolidación interpretativa.

## Sucesión en la escritura

El Calendario es **trabajo de cronistas**, herencia entre compañeros:

1. **[[Amitlai]]** — cronista original. Período de escritura coincide con la cronología que cubre (Reinos Olvidados → [[Antiterra]]). Frase recurrente: *"Cronología desde el punto de vista de Amitlai"*.
2. **[[Clarisa]]** — heredera, asume la escritura tras la muerte/sucesión de Amitlai. *"Heredera del oficio de su padre [[Arcoms_Cosmar|Arcoms Cosmar]]: así como [[Arcoms_Cosmar|Arcoms]] fue Maestro Bibliotecario en el concilio de [[Myth_Drannor]], [[Clarisa]] toma la posta como bibliotecaria y asume la escritura del Calendario, continuando la labor narrativa de Amitlai"* (ver [[Clarisa]]).

Ambos compañeros jugados por **figura del archivo** — ver figura del archivo para la conexión asertórica.

## Contenidos principales del Calendario

Eventos cosmogónicos canónicos extraídos del Calendario merged:

### Cosmogonía y Magia Dual

> *"[[Pablo_de_Alejandria|Pablo]] es como Prometeo. Le robó cierto fuego capaz de quemar a los mismos dioses: la [[Magia_dual|magia dual]]. Ese secreto poderoso, cual tabla donde escribir nuevos destinos fue aprovechado por un ente de destrucción calma y poderosa: [[Tiamat_MC|Tiamat]]."* (par 18)

### Juicio Final — 1375 DR

> *"1375 DR [[Juicio_Final]]. [[Minaya_MC|Minaya]] (27 años) y [[Soluna|Soluna]] vencen a Takhishis utilizando la Lanza y la [[Gema_de_la_Creacion|Gema de la Creación]]. Los dioses vuelven atrás en el tiempo hasta el 1348 DR."* (par 200)

### Danza del Conocimiento — 1368 DR

> *"1368 DR - Marpenoth 6 (octubre, otoño/caída de hojas) Comienzo de la danza del conocimiento. A Minaya se le revela su pasado y el de sus progenitores. Marpenoth. [[Coyote]] es sacrificado por [[Kaxathros|Kaxatros]]. Su alma atrapada en una gema."* (par 197)

### Historia de Natalio — 348 DR

> *"348 DR Historia de Natalio. Primer contacto con la sombra, el Trasgo. El dragón Negro. Se aspecta el concilio de las narices que Tiamat mete en Andgara."* (par 82)

### Coyote llega a los Reinos Olvidados — 1348 DR

> *"1348 DR [[Coyote]] llega a los Reinos Olvidados. Conoce a Tii y a Zara, la drow. Ella y [[Coyote]] engendran a Minaya. Arribo de Coyote, agente de Tiamat, a una posada de Mirabar... "* (par 121)

### Nacimiento de Elisteo — 1349 DR

> *"1349 DR Nace [[Elisteo]], hijo de [[Clarisa|Clarissa]] (II) y [[Minaya_MC|Minaya]], en el Primario conocido como Andgara o La Tierra. Ella no lo nombra. Su nombre lo recibe de sus padres adoptivos."* (par 281)

(Más en el Calendario merged.doc — pendiente mineria sistemática para extracción de todos los eventos.)

## Nota lateral

> Documento construido por **el cronista** entre 2005 y 2018. Originado como ejercicio narrativo en voz de Amitlai (compañero). Multiples versiones: `.doc` original, `.gdoc` espejo en Académicas, `.pdf` snapshot agosto 2018. En 2026 sigue siendo fuente lúdica primaria del archivo.

## Notas

- El Calendario es **palimpsesto declarado** (Constitución §5): lo presenta como narración consolidada de Amitlai/Clarisa, no como cuaderno primigenio. Las afirmaciones del Calendario son fuentes lúdicas válidas, pero deben citarse marcando que provienen del Calendario y no del cuaderno físico original.
- Hay un proyecto pendiente: **extraer sistemáticamente todos los eventos del Calendario** y generar `MC_LINEA_TEMPORAL.md` consolidado a partir de él (parcialmente hecho, ver `meta/`).

## Ver también

- [[Amitlai]] (cronista original)
- [[Clarisa]] (heredera de la escritura)
- una misma mano detrás de ambos
- MC Línea Temporal (consolidación derivada — pendiente sincronización)
- [[Gema_de_la_Creacion|Gema de la Creación]] (artefacto cuyo recorrido el Calendario documenta)
- [[Magia_dual|Magia Dual]] (concepto cosmológico inicial)
- [[Juicio_Final|Juicio Final 1375 DR]] (evento clave del Calendario)
- [[Danza_del_Conocimiento|Danza del Conocimiento 1368 DR]]
