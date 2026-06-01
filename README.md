# 🏠 Housing Search App - Abidjan Rental Finder

Une application web portable et élégante pour rechercher des logements à louer dans toutes les communes d'Abidjan, sans nécessité d'un backend séparé.

## ✨ Fonctionnalités

### 🔍 Recherche Avancée
- **Type de Propriété**: Studio, 1 Pièce, 2 Pièces, 3 Pièces, 4+ Pièces
- **Localisation**: Sélectionnez parmi 12 communes d'Abidjan
- **Budget**: Définissez le prix minimum et maximum par mois
- **Filtrage Automatique**: Seules les annonces de moins d'un mois s'affichent

### 📱 Interface Responsive
- Design moderne et ergonomique
- Compatible avec tous les appareils (desktop, tablet, mobile)
- Animations fluides et transitions agréables
- Thème blanc et bleu pour une meilleure lisibilité

### 🌐 Intégration Multi-Sources
Les résultats incluent des annonces provenant de:
- Facebook
- TikTok
- Immobilier.ci
- Jumia Immo
- Avito.ci
- Google Maps Business
- Et autres plates-formes de location

### 📤 Partage Facile
- Partager les annonces via WhatsApp, Telegram, etc.
- Accès direct aux annonces via les liens sources
- Contact direct avec les propriétaires

## 🚀 Démarrage Rapide

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Aucun serveur backend nécessaire

### Installation

1. **Clonez le dépôt**
```bash
git clone https://github.com/MeledjeLaroche/housing-search-app.git
cd housing-search-app
```

2. **Ouvrez l'application**
   - Double-cliquez sur `index.html` ou
   - Utilisez un serveur local (optionnel):
   ```bash
   python -m http.server 8000
   ```
   Puis ouvrez `http://localhost:8000`

## 📂 Structure du Projet

```
housing-search-app/
├── index.html       # Structure HTML
├── styles.css       # Styles CSS (responsive design)
├── script.js        # Logique JavaScript et données mockées
└── README.md        # Cette documentation
```

## 🎨 Design & Palette de Couleurs

- **Primaire**: Bleu (#2563eb)
- **Secondaire**: Gris clair (#f3f4f6)
- **Texte**: Gris foncé (#1f2937)
- **Bordures**: Gris léger (#e5e7eb)
- **Succès**: Vert (#10b981)
- **Avertissement**: Ambre (#f59e0b)

## 💾 Données

L'application utilise actuellement une base de données mockées (`mockListings`) pour la démonstration. Elle inclut:
- 23 annonces d'exemple
- Couvrant 10 communes d'Abidjan
- Prix réalistes en FCFA
- Dates de publication variées

### Pour utiliser des données réelles

Vous pouvez connecter l'application à:
1. **Une API personnalisée** (backend Node.js, Python, etc.)
2. **Des données scraped** des sites de location
3. **Une base de données** (Firebase, MongoDB, etc.)

## 🔧 Utilisation

### 1. Effectuer une Recherche
- Sélectionnez le **type de propriété** (optionnel)
- Choisissez la **commune** (optionnel)
- Entrez le **budget** (optionnel)
- Cliquez sur **🔍 Rechercher**

### 2. Consulter les Résultats
- Voir les détails de chaque annonce
- Consulter les aménagements
- Vérifier la date de publication
- Identifier la source de l'annonce

### 3. Contacter le Propriétaire
- Cliquez sur **🔗 Voir l'annonce** pour accéder au lien original
- Appelez le numéro affiché
- Partager l'annonce avec **📤 Partager**

## 📊 Statistiques Utilisateur

L'app affiche automatiquement:
- Nombre d'annonces trouvées
- Date de la dernière actualisation (dans `getDaysAgo()`)
- Source de chaque annonce
- Statut de récence (moins d'un mois)

## 🔒 Sécurité & Confidentialité

- ✅ Aucune donnée n'est collectée
- ✅ Aucun serveur externe consulté (en mode offline)
- ✅ Liens externes sécurisés (target="_blank")
- ✅ Application 100% frontend

## 🐛 Dépannage

### Les résultats ne s'affichent pas
1. Vérifiez que JavaScript est activé
2. Ouvrez la console (F12) pour voir les erreurs
3. Réinitialisez les filtres avec le bouton ↻

### L'app est lente
- Réduisez le nombre de critères de recherche
- Utilisez des filtres plus spécifiques

### Les dates ne s'affichent pas correctement
- Vérifiez la timezone de votre navigateur
- Les dates sont affichées en format relatif (Il y a X jours)

## 🌍 Communes d'Abidjan Supportées

1. Abobo
2. Adjamé
3. Attécoubé
4. Cocody
5. Koumassi
6. Marcory
7. Plateau
8. Port-Bouët
9. Treichville
10. Yopougon
11. San Pédro
12. Bingerville

## 📈 Améliorations Futures

- [ ] Intégration avec une vraie API de location
- [ ] Web scraping automatisé
- [ ] Système de favoris (localStorage)
- [ ] Filtres avancés (meublé/non meublé, ascenseur, etc.)
- [ ] Notifications pour nouvelles annonces
- [ ] Carte interactive des communes
- [ ] Historique de recherche
- [ ] Notifications push
- [ ] Mode sombre
- [ ] Support multilingue

## 👨‍💻 Contributeur

- **MeledjeLaroche** - Créateur & Mainteneur

## 📝 Licence

Ce projet est libre d'utilisation et de modification.

## 📞 Support

Pour les issues, suggestions ou questions:
1. Ouvrez une **issue** sur GitHub
2. Consultez la **documentation**
3. Envoyez un message

## 🙏 Remerciements

Merci d'utiliser Housing Search App!

---

**Dernière mise à jour**: Juin 2026  
**Version**: 1.0.0  
**Statut**: ✅ Production