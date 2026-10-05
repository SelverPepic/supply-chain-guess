# Supply Chain Guesser

Countries with notable roles at more than one stage use alternating map stripes. The buyer chart names 25 markets and keeps the residual “Other” share at 4%.

Country panels follow the physical journey: raw-material sources, production, logistics, buyers, then likely end-of-life locations. The final panel is explicitly a directional proxy because informal handling and transboundary e-waste flows are incompletely documented; it is calibrated to the 2024 Global E-waste Monitor rather than presented as a traceable route for one device.

The world map has independent stage toggles, including waste/disposal. Selecting multiple stages restores striped fills wherever a country has multiple visible roles. Every evidence panel includes an expandable data-limitations note.

Object-specific evidence lives in `objects.js`; the shared interface renders any catalogue entry without object-specific branches. The catalogue currently includes a generic smartphone, an all-metal stainless-steel knife, a generic task chair, a 200 g glass container, one A4 sheet of 80 g/m² office paper, a disposable ballpoint pen, a 250 g raw beef serving a 100 g dry muesli serving, a 250 g semi-hard cheese block, a 500 g packaged wheat loaf and a 100 g packaged fluoride-toothpaste tube.

Each play session shuffles those objects into a no-repeat order. Guesses are judged locally using extensive aliases and conservative typo tolerance, so ordinary play never needs an agent. Every object carries exactly four progressively descriptive feedback clues.

After every locally wrong answer, the result card clearly offers an optional private helper review. The helper checks whether the wording should have counted as a synonym, regional term, generic brand or matching subtype; an accepted review overturns the verdict. If the verdict stands, the helper can add comparison signals for five-level category similarity (same, very similar, similar, different or very different), materials, portability, power, setting and mass. The helper never reveals the hidden answer in its output. Each review receives an exact private result address; the game also detects a helper that finishes without a usable result rather than leaving the button spinning indefinitely.

Every object includes a broad October 2026 finished-product price range, shown directly in the raw-material value heading for a compact input-versus-finished comparison. Extraction rows also name the materials associated with each source country: up to two appear in the rectangle itself, while the complete modeled list remains visible below.

A one-object prototype inspired by OEC Tradle. Players have five attempts to identify a generic smartphone from material, production, buyer, supplier, and journey clues.

The material-mass view is a reconciled 160 g reference model grounded in the JRC generic smartphone bill of materials. It decomposes the JRC aggregate glass/ceramic/semiconductor category so the game never hides most of the mass under “other.” A separate panel estimates the raw commodity value of each quantity from late-September/October 2026 reference prices; it excludes all processing and manufacturing value. Paper country roles use FAO's 2024 forest-product production and trade summary plus 2024 UN Comtrade writing-paper trade as directional anchors; the 5 g sheet composition is a transparent reference formulation, not a mill recipe. Pen production and demand use 2024 UN Comtrade HS 960810 flows; the 5.5 g composition adapts published disposable-pen life-cycle inventories and is not a bill of materials for one brand.

The beef round uses USDA/FAS 2025/26 production and trade estimates, FAOSTAT livestock coverage and UNEP's 2024 food-waste framing as directional anchors. Its composition represents a 250 g raw serving; water, protein and fat vary substantially by cut, trimming and breed, and the component-value chart is only a way to compare mass fractions—not a farm-cost model.

Manufactured objects can also include a directional `components` stage between raw-material sourcing and final production. Each row identifies a country, an illustrative share, named intermediate parts or processing steps, and the map country id. The Components map layer is generated from these rows; objects without a meaningful intermediate stage omit both the panel and the map control.

The muesli round uses Eurostat's 2024 cereal production, USDA/FAS tree-nut data and FAO food-loss framing as anchors. Its 100 g recipe is illustrative: commercial mixes vary widely in grain, fruit, nut, seed and sweetener content.

The cheese round uses FAO's 2024 dairy-market review, Eurostat's measured 2024 cheese-production concentration and FAO food-loss evidence as directional anchors. Its 250 g semi-hard composition and country shares are a gameplay model rather than a formulation or traceable route for one producer.

The bread round uses FAO's current cereal outlook and wheat trade reporting plus standard packaged-loaf composition ranges as anchors. Its 500 g recipe and country shares are transparent gameplay estimates; most bread is baked and consumed domestically, so the logistics panel is a directional proxy for ingredients, packaged trade and regional distribution.

The toothpaste round models a 100 g packaged fluoride dentifrice, including tube and cap. FDA OTC anticaries ranges anchor the trace fluoride quantity, while USGS mineral reporting informs silica, carbonate, fluoride-mineral and aluminum source roles. Formula and country shares are illustrative and do not reproduce one brand's recipe or procurement network.

Country shares are intentionally labelled as illustrative: a generic smartphone does not have one universal supply chain, and manufacturer sourcing changes over time. The evidence panels do not name the answer before the round is solved.

Country outlines are derived from Natural Earth through the public-domain `world-atlas` dataset. The map can show all or deselect all stage layers in one action. The app asks Dark Reader to leave its already-dark document unchanged so map boundaries and data colors remain legible.
