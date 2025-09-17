# Schema-Forge

<p align="center">
  <a href="https://www.npmjs.com/package/@mauriciotukss2/schema-forge"><img src="https://badge.fury.io/js/%40mauriciotukss2%2Fschema-forge.svg" alt="NPM Version"></a>
  <a href="https://github.com/Mauricio-100/schema-forge/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-GPL--3.0--or--later-blue.svg" alt="License"></a>
</p>

**La forge de données :** un validateur, transformateur et nettoyeur de schémas puissant et sans dépendance pour Node.js.

## Vision du Projet

Dans le développement backend, la validation des données entrantes n'est que la première étape. `Schema-Forge` est conçu pour être un outil tout-en-un qui non seulement **valide** les données, mais les **nettoie**, les **transforme** et les prépare à être utilisées en toute sécurité dans votre application.

Ce projet est sous la licence stricte **GPL-3.0-or-later**, garantissant qu'il restera toujours un logiciel libre et que toutes ses améliorations bénéficieront à la communauté.

## Installation
```bash
npm install @mauriciotukss2/schema-forge
```
### Utilisation
Définissez un schéma, puis utilisez la méthode .process() pour valider vos données.
```bash
import forge from '@mauriciotukss2/schema-forge';

// 1. Définissez votre schéma de validation
const userSchema = forge.string().isEmail().minLength(10);

// 2. Traitez vos données
const result = userSchema.process("test@exemple.com");

// 3. Vérifiez le résultat
if (result.isValid) {
  console.log("Donnée valide :", result.data);
} else {
  console.error("Erreurs de validation :", result.errors);
}
// Output: Donnée valide : test@exemple.com

const badResult = userSchema.process("invalid-email");
console.log(badResult.errors);
// Output: [ "Le format de l'email est invalide." ]
```
### Feuille de Route (Roadmap)
Schema-Forge est un projet en pleine croissance. Voici les prochaines fonctionnalités prévues :


Validation de base : .string(), .isEmail(), .minLength()

Transformateurs : .trim(), .toLowerCase(), .default()

Validateurs de Nombres et Objets : forge.number(), forge.object()

Génération de Documentation : .toOpenAPI() et .toTypeScript()
Licence
Ce projet est sous licence GPL-3.0-or-later. Voir le fichier LICENSE pour plus de détails.
