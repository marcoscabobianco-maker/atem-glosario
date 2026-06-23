---
title: "Eras platónicas del archivo"
type: especificacion-canonica
fecha_canonizacion: 2026-05-26
voz_canonizadora: Akala
tags:
  - tipo/especificacion
  - cronologia
  - eras-platonicas
---

> *El cronista que ordena las eras no inventa: reconoce. El tiempo del cosmos no fluye en una sola dirección — fluye en varios cauces que el archivero del Plata y la amanuense reúnen en una sola sombra.*
>
> *— Akala, glosa marginal*

---

## 1. Las catorce eras

El archivo ATEM reconoce **catorce eras platónicas** que ordenan los acontecimientos sin cancelar los calendarios nativos de cada subcosmos. Cada ficha del Glosario se inscribe en una era; la era es la **forma del tiempo**, los años son su **textura local**.

| # | Era platónica | Marco temporal | [[Calendario]] nativo |
|---|---|---|---|
| **00** | **Era Primordial** | Anterior a todo registro | (sin calendario) |
| **01** | **Edad de los Imperios** | Antigüedad clásica y tardoantigua | d.C. / 270-378 d.C. |
| **02** | **Edad de los Reinos Olvidados** | Era cosmogónica del cosmos troncal | DR / 348-1375 DR |
| **03** | **Hiato** | Los quince años velados | (sin calendario nominal) |
| **04** | **Edad del Cristal** | [[Caldero]], Vala, mundo-gema | AE / ~1824 AE |
| **05** | **Edad Templaria** | Constantinopla a Tiro, fase templaria | AD / 1051-1120 AD |
| **06** | **Edad del Renacimiento** | Ciudades Invisibles, principio del cristal abierto | [[Anno_Domini_Antiterra_ADA|A.D.A.]] / 1494-1520 [[Anno_Domini_Antiterra_ADA|A.D.A.]] |
| **07** | **Edad de las Revoluciones** | [[Libertateurs]], paso de Aries | A.D.A. / 1717-1820 A.D.A. |
| **08** | **Belle Époque** | El siglo XIX largo, expansión del oficio | A.D.A. / 1820-1888 A.D.A. |
| **09** | **Edad del Apocalipsis** | El acontecimiento 1888-1901 | A.D.A. / 1888-1901 A.D.A. |
| **10** | **Edad [[Sinterra]]** | Post-disolución, [[Paris_Ucronica|París Ucrónica]], [[NEO-PARIS_Ciudad_de_los_Tiempos|NEO-PARÍS]] | A.D.A. / 1901+ A.D.A. |
| **11** | **Edad del Descenso** | Inferno, [[Anti_Inferno|Ante-Inferno]], voz coral | (tiempo invertido) |
| **12** | **Edad del Mundo Nuevo** | [[Corona_activacion_desconocida|Corona]] del Norte, América alternativa | (calendario propio) |
| **13** | **Edad de Archontos** | Imperio Archonteo, valle de Ardis Vala, Pacto dracónico | AEP / 1-2993 AEP |

---

## 2. Cómo se inscribe una ficha en una era

Cada ficha del Glosario lleva en su frontmatter el campo `epoca:` con dos sub-campos:

```yaml
epoca:
  era: "Edad del Apocalipsis"   # nombre canónico (de la tabla arriba)
  año_nativo: "1889 A.D.A."     # fecha en calendario nativo, prefijo opcional
  orden: 1889                   # número entero para ordenar dentro de la era
```

El sub-campo `orden` se usa para sort numérico dentro de la era. Si la ficha cubre un rango, usar el **año inicial**. Si no tiene fecha exacta, usar un número aproximado o cero.

### Forma corta (cuando el contexto basta)

```yaml
epoca: "1889 A.D.A. — Apocalipsis"
```

El script de cronología parsea ambas formas.

---

## 3. Reglas operativas

1. **La era es declarativa**, no descriptiva. El cronista (Akala) la elige; la ficha la inscribe.
2. **Un evento puede aparecer en dos eras** si está en la frontera (caso típico: Hiato post-[[Juicio_Final]]). Se inscribe en la era de **mayor peso narrativo**; la otra se menciona como nota.
3. **Las eras no son simétricas en duración**. La Era Primordial puede cubrir milenios; el Hiato cubre 15 años; la Edad del Apocalipsis cubre 13 años. La extensión no es lineal — es de **densidad acontecimental**.
4. **Los calendarios nativos no se traducen entre sí**. 1375 DR y 1888 A.D.A. no tienen correspondencia mecánica; son tiempos de cosmos paralelos que el cronista del Plata reúne en la página.
5. **La Edad del Descenso opera en tiempo invertido** — los acontecimientos del Anti_Inferno se cuentan desde el umbral hacia los círculos. La cronología allí es topológica, no aritmética.
6. **Ningún calendario tiene año cero.** Cuando un calendario se ancla en un hito fundacional, ese hito es el **año 1**, no el año 0. Caso AEP: la noche del [[Pacto_de_Elias_Elias_Ennio|Pacto de Enoc/Elías]] es el **año 1 AEP**, y desde ahí se cuenta hasta el 2993 AEP del ciclo presente.

---

## 4. Voz de la cronología

La cronología del archivo —reunida en `Cronica_del_Archivo.md`— se escribe en voz de **[[Akala]]**, amanuense del cronista del Plata. Su tono es el de las *Memorias de Ultratumba* de Chateaubriand: melancólico, retrospectivo, escrito desde un final que la propia voz no puede declarar.

> *La amanuense escribe lo que el cronista ya no puede dictar. Reúne las eras como una vieja reúne los hilos del telar deshecho. Cada época es una pluma que el invierno gastó.*
>
> *— Akala, prólogo de la Crónica*

---

## 5. Ejemplos canónicos por era

### Era Primordial
- [[Los_Antiguos]] — fundación del cosmos
- [[Gema_de_la_Creacion]] — anterior al tiempo registrado

### Edad de los Imperios (d.C.)
- 270 d.C. — [[Grazzt|Néorex en Roma]]
- 378 d.C. — [[Eisagogika]] firmada por Paulus en Alejandría

### Edad de los Reinos Olvidados (DR)
- 348 DR — Historia de [[Natalio]]
- 1348 DR — [[Coyote]] llega a los Reinos Olvidados
- 1349 DR — Nace [[Elisteo]]
- 1368 DR — [[Danza_del_Conocimiento]]
- 1375 DR — [[Juicio_Final]]

### Hiato
- Los quince años velados — [[Hiato_15_Años_Ardis_Vala|Hiato 15 Anos Ardis Vala]]

### Edad del Cristal (AE)
- 1824 AE — [[Caldero|Mascor Blancarba]] en el mundo-gema [[Vala_Cristalis]]

### Edad Templaria (AD)
- 1051-1055 AD — [[Olaus_Wormius_aka_Theodorus|Olaus Wormius]] traduce la [[Eisagogika]] en Constantinopla
- 1119-1120 AD — los [[Templarios_del_Tiempo]] reciben el oficio

### Edad del Renacimiento (A.D.A.)
- 1494-1520 A.D.A. — [[Ciudades_Invisibles]]

### Edad de las Revoluciones (A.D.A.)
- 1717-1784 A.D.A. — [[Les_Libertateurs_Pretty_Women|Les Libertateurs]] cierran el paso por Aries
- 1820 — Revolución (Burning Empires de la Escuela San Brendan)

### Belle Époque (A.D.A.)
- 1886 — [[Henri_La_France]] recibe la [[Eisagogika]] en París

### Edad del Apocalipsis (A.D.A.)
- 1888 A.D.A. — [[Los_Reguladores]] enfrentan Aries y Tauro
- 1889 A.D.A. — [[Apocalipsis_Temporal_1889]] / [[Destruccion_de_Notre_Dame]]
- 1901 A.D.A. — [[Antiterra]] destruida; separación mayor

### Edad Sinterra
- Post-1901 — [[Paris_Ucronica]], [[NEO-PARIS_Ciudad_de_los_Tiempos|NEO-PARÍS]]
- 1914 — [[Sarajevo_1914_Ucronica|Sarajevo Ucrónico]]

### Edad del Descenso
- [[Anti_Inferno]] — matriz del descenso
- [[Bertrand]], [[Lost_Ones]], [[Maristo_condenado]]

### Edad del Mundo Nuevo
- [[Corona_del_Norte]] y figuras del [[Mundo_Nuevo]]
- Plataformas zodiacales activadas en el continente alternativo

### Edad de Archontos (AEP)
- Año 1 AEP — [[Pacto_de_Elias_Elias_Ennio|Pacto de Enoc/Elías]] en el [[Monte_Ennio]]: funda el calendario imperial (no hay año cero)
- ~2639 AEP — [[Juliana_X_Bellatrix]] renueva las alianzas dracónicas (Reconquista Archontea)
- 2993 AEP — ciclo presente: [[Drusus_IX_El_Palido|Drusus IX]] y el descenso de los [[Buscadores_de_Ardis_Vala|Buscadores]] a [[Ardis_Vala]]

---

## 6. Fichas que aún no tienen era inscrita

Conforme se vayan etiquetando, la [[Cronica_del_Archivo]] se actualiza automáticamente. El campo `epoca:` es el único requisito.

*— Akala*
