<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<p align="center">API RESTful construite avec <a href="http://nodejs.org" target="_blank">Node.js</a>, NestJS, Prisma et MongoDB pour gérer des ressources éducatives.</p>

## Description

Ce projet est une API RESTful développée avec **NestJS**, **Prisma** et **MongoDB**. Elle permet de gérer des cours éducatifs, incluant la création, la mise à jour, la suppression et la récupération de cours. Le projet inclut des pratiques de sécurité et des tests unitaires pour garantir la qualité et la robustesse du code.

## Technologies Utilisées

- **NestJS** : Framework Node.js orienté sur la modularité et la scalabilité.
- **Prisma** : ORM moderne pour interagir avec MongoDB.
- **MongoDB** : Base de données NoSQL pour stocker les données des cours.

## Configuration de la Base de Données

1. **Paramétrer l'URL de la base de données** : 
   - Dans le fichier `.env`, configurez l'URL de connexion MongoDB.
   
   Exemple :
   ```bash
   DATABASE_URL="mongodb://<username>:<password>@localhost:27017/<dbname>"
   ```
   Remplacez `<username>`, `<password>`, et `<dbname>` par vos informations MongoDB.

2. **Synchroniser Prisma avec MongoDB** :
   - Après avoir configuré `.env`, exécutez les commandes suivantes pour générer le client Prisma et synchroniser la base de données :

   ```bash
   npx prisma generate
   npx prisma db push
   ```

## Installation du Projet

1. **Cloner le dépôt** :
   ```bash
   git clone <URL_DU_DEPOT>
   cd backend-test
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Compiler et Lancer le Projet** :

   - En mode développement :
     ```bash
     npm run start:dev
     ```

   - En mode production :
     ```bash
     npm run start:prod
     ```

## Documentation de l'API

L'API est documentée avec **Swagger**. Une fois le serveur lancé, accédez à la documentation complète à :
```bash
http://localhost:3000/api
```

## Exécution des Tests

Des tests unitaires et de couverture sont fournis pour valider les fonctionnalités de l'API.

- **Tests unitaires** :
   ```bash
   npm run test
   ```

- **Tests end-to-end** :
   ```bash
   npm run test:e2e
   ```

- **Couverture des tests** :
   ```bash
   npm run test:cov
   ```

## Structure des Endpoints

- `POST /courses` : Créer un nouveau cours
- `GET /courses` : Récupérer la liste de tous les cours
- `GET /courses/{id}` : Récupérer un cours par ID
- `PUT /courses/{id}` : Mettre à jour un cours
- `DELETE /courses/{id}` : Supprimer un cours par ID

## Choix Techniques

- **NestJS** : Choisi pour sa structure modulaire, son intégration avec TypeScript et son écosystème mature.
- **Prisma** : Utilisé pour sa facilité d'interaction avec MongoDB, ses migrations automatisées et ses capacités de validation des données.
- **MongoDB** : Choisi pour sa flexibilité et sa capacité de stockage de données non structurées, adapté aux besoins d'une API évolutive.


## Licence

Ce projet utilise la licence [MIT](https://opensource.org/licenses/MIT).
