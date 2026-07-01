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

> **Esta entrada se refiere al DOCUMENTO Calendario** —la cronología consolidada que [[Amitlai]] y [[Clarisa]] escriben dentro del cosmos—.
>
> **No confundir con [[Estela_Nereida|Estela como "Chica Calendario 1902"]]**, la litografía Belle Époque que circuló por el París uchrónico. La nereida del chal y el documento son cosas distintas: el documento, sin embargo, registra muchas apariciones de [[Estela_Nereida|Estela]] y otras figuras del archivo.

> Cronología consolidada del cosmos compartido, escrita por [[Amitlai]] —compañero-cronista— y heredada por [[Clarisa]]. Es la fuente de la que el archivo bebe para ordenar la historia del mundo.

## La crónica de Amitlai

El Calendario es la **cronología que [[Amitlai]] levanta desde dentro del mundo**: no la mira un cronista externo, la escribe un compañero que vivió los hechos. Su encabezado lo dice sin ambages: *"Cronología desde el punto de vista de Amitlai"*. Por eso vale como fuente viva y no como reconstrucción tardía: quien narra estuvo ahí.

## La sucesión en la pluma

El Calendario es **trabajo de cronistas, heredado de mano en mano**:

1. **[[Amitlai]]** — el cronista original, cuya escritura acompaña la cronología que cubre, de los Reinos Olvidados a [[Antiterra]].
2. **[[Clarisa]]** — la heredera, que toma la posta tras Amitlai: *"así como [[Arcoms_Cosmar|Arcoms]] fue Maestro Bibliotecario en el concilio de [[Myth_Drannor]], Clarisa toma la posta como bibliotecaria y continúa la escritura del Calendario"* (ver [[Clarisa]]).

Ambos cronistas nacidos de la misma mano —una sola mano detrás de los dos—.

## Lo que el Calendario registra

Algunos de los hechos cosmogónicos que la crónica conserva:

### Cosmogonía y Magia Dual

> *"[[Pablo_de_Alejandria|Pablo]] es como Prometeo. Le robó cierto fuego capaz de quemar a los mismos dioses: la [[Magia_dual|magia dual]]. Ese secreto poderoso, cual tabla donde escribir nuevos destinos, fue aprovechado por un ente de destrucción calma y poderosa: [[Tiamat_MC|Tiamat]]."*

### Juicio Final — 1375 DR

> *"1375 DR. [[Juicio_Final]]. [[Minaya_MC|Minaya]] (27 años) y [[Soluna|Soluna]] vencen a Takhishis utilizando la Lanza y la [[Gema_de_la_Creacion|Gema de la Creación]]. Los dioses vuelven atrás en el tiempo hasta el 1348 DR."*

### Danza del Conocimiento — 1368 DR

> *"1368 DR — Marpenoth 6. Comienzo de la danza del conocimiento. A Minaya se le revela su pasado y el de sus progenitores. [[Coyote]] es sacrificado por [[Kaxathros|Kaxatros]]. Su alma atrapada en una gema."*

### Historia de Natalio — 348 DR

> *"348 DR. Historia de Natalio. Primer contacto con la sombra, el Trasgo. El dragón Negro. Se aspecta el concilio de las narices que Tiamat mete en Andgara."*

### Coyote llega a los Reinos Olvidados — 1348 DR

> *"1348 DR. [[Coyote]] llega a los Reinos Olvidados. Conoce a Tii y a Zara, la drow. Ella y Coyote engendran a Minaya. Arribo de Coyote, agente de Tiamat, a una posada de Mirabar."*

### Nacimiento de Elisteo — 1349 DR

> *"1349 DR. Nace [[Elisteo]], hijo de [[Clarisa|Clarissa]] (II) y [[Minaya_MC|Minaya]], en el Primario conocido como Andgara o La Tierra. Ella no lo nombra: su nombre lo recibe de sus padres adoptivos."*

## Ver también

- [[Amitlai]] (cronista original)
- [[Clarisa]] (heredera de la escritura)
- [[Gema_de_la_Creacion|Gema de la Creación]] (artefacto cuyo recorrido el Calendario documenta)
- [[Magia_dual|Magia Dual]] (concepto cosmológico inicial)
- [[Juicio_Final|Juicio Final 1375 DR]] (evento clave del Calendario)
- [[Danza_del_Conocimiento|Danza del Conocimiento 1368 DR]]

<!-- CICLO -->
> **Casas del ciclo** · ✒ ☯
> *La crónica no la mira un cronista externo: la escribe un compañero que vivió los hechos. [[Amitlai]] levanta el Calendario «desde dentro del mundo» y [[Clarisa]] hereda la pluma —como [[Arcoms_Cosmar|Arcoms]] cedió el cargo de Maestro Bibliotecario en [[Myth_Drannor]]—: la voz que glosa el cosmos es ella misma personaje del cosmos, que pasa la posta de mano en mano. Y registra el doble fondo de los mundos —del [[Juicio_Final]] en 1375 DR al nacimiento de [[Elisteo]] en Andgara «o La Tierra», el Primario que es y no es la nuestra—.* — glosa de Amitlai.
<!-- /CICLO -->

---

## Capa interna [R]

> No diegético; manifestación física y método, fuera de la lectura pública.

- **Documento físico:** `Calendario merged.doc` (+ espejo `.gdoc` en Académicas, snapshot `.pdf` de agosto 2018). Construido entre 2005 y 2018 como narración interna en voz de Amitlai.
- **Jerarquía de fuentes (Constitución §3):** el Calendario es *fuente lúdica primaria* —consolidación dentro del juego—, por debajo de los cuadernos manuscritos y por encima de las mitologizaciones posteriores. Palimpsesto declarado (§5): citarlo marcando que proviene del Calendario, no del cuaderno físico.
- **Pendiente:** minería sistemática de todos los eventos → `MC_LINEA_TEMPORAL.md` (parcial).
