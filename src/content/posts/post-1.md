---
title: "Heritage Over Composition"
meta_title: ""
description: ""
date: 2021-01-03T05:00:00Z
image: "/posts/post_1/software.png"
categories: ["Développement"]
author: "Hery Lopez"
tags: ["Design Patterns", "Good Development Practices"]
draft: false
---

La programmation orientée objet offre une variété d'approches pour la création de logiciels. Deux des concepts les plus importants dans ce domaine sont l'héritage (heritage) et la composition (composition). Les deux permettent la réutilisation du code, mais chacun a ses propres avantages et inconvénients. Dans cet article, nous explorerons en profondeur le concept de "Heritage Over Composition" (Héritage sur Composition) et comment il peut influencer la structure et la qualité de notre code.

## Qu'est-ce que Heritage Over Composition ?

Heritage Over Composition, ou Héritage sur Composition en français, est un principe de conception de logiciels qui préconise la création de nouvelles classes ou types en étendant ou en héritant des caractéristiques et des comportements de classes existantes. 

### Héritage
Cela repose sur le principe de "l'héritage" en programmation orientée objet (POO), où une nouvelle classe (appelée classe dérivée ou sous-classe) peut hériter des attributs et des méthodes d'une classe existante (appelée classe de base ou superclasse).

![Exemple de code d'héritage](post_1/herencia.png#center)

### Composition,
En revanche, la "composition" consiste à construire de nouvelles classes en combinant des objets de classes existantes, plutôt qu'en héritant d'elles. La composition nécessite plus de classes et prend plus de temps pour le développement

![Exemple de code de la composition](post_1/composicion.png#center)


## Et pourquoi écrivons-nous sur ce sujet ?

Comme vous pouvez le comprendre, les deux approches sont des caractéristiques qui les rendent adaptées à des situations différentes.

Le problème réside dans le fait que notre expérience en examinant le code de nombreuses applications nous a conduit à constater une tendance à n'utiliser que l'héritage. Cette pratique, au lieu d'être bénéfique et de générer des avantages, se transforme en une source d'erreurs et en un code plus difficile à entretenir, devenant ainsi un anti-pattern.

### Quand ne devrions-nous pas utiliser l'héritage ?

* Lorsque la superclasse n'est héritée que par une seule sous-classe.
* Lorsque, dans les sous-classes, vous devez réécrire les méthodes de la classe parente.
* Lorsque nous contraignons des sous-classes à hériter de code dont elles n'ont pas besoin.
* Lorsque de nombreux développeurs travaillent sur le même projet.
* Lorsque vous devez modifier la superclasse.

### Voici un exemple :

![Exemple de code de la composition](post_1/bad_practice.png#center)

Dans le code ci-dessus, nous avons un cas typique de code conditionnel provoqué par l'héritage.

Chaque fois qu'une nouvelle classe enfant est ajoutée (code en couleur verte), il est nécessaire de modifier le code commun de la superclasse. Cela implique de devoir effectuer des tests sur toutes les classes qui dépendent de cette superclasse pour garantir que la modification apportée n'a pas altéré son comportement.

Dans des exemples simples tels que celui présenté, il y a moins de risques d'introduire des erreurs, mais lorsque la logique devient longue et complexe, la modification peut rapidement introduire des erruers.

#### La solution

![Exemple de code de la composition](post_1/good_practice.png#center)

Dans l'image se trouve le code utilisant la composition, comme nous l'avions mentionné précédemment, il nécessite plus de classes et plus de temps d'analyse mais au final vous avez un code plus robuste et plus facile à maintenir.

Désormais, lorsqu'une nouvelle classe enfant est ajoutée (code en couleur verte), aucune super classe ne doit être modifiée, le seul code modifié est le code lié à la fonctionnalité ajoutée.


## Faut-il vraiment préférer la composition à l'héritage ?

Nous ne pouvons pas dire "oui" ou "non" car chacun des modèles est utile dans ses conditions, l'important est de comprendre les deux et de savoir sélectionner celui le plus approprié à votre situation.