# Application de Vente de Véhicules

Application web full-stack pour la vente de véhicules d'occasion, développée avec React (frontend) et Node.js/Hono (backend), utilisant MongoDB comme base de données.

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** (version 18 ou supérieure)
- **npm** (généralement inclus avec Node.js)
- **Docker** et **Docker Compose** (pour la base de données MongoDB)

## 🚀 Installation et Lancement

### Étape 1 : Configuration de l'environnement

1. Naviguez dans le dossier `back` :

   ```bash
   cd back
   ```

2. Créez un fichier `.env` à la racine du dossier `back` avec le contenu suivant :

   ```env
   MONGO_INITDB_ROOT_USERNAME=admin
   MONGO_INITDB_ROOT_PASSWORD=password
   ```

   > ⚠️ **Note** : Modifiez ces valeurs selon vos préférences de sécurité pour un environnement de production.

### Étape 2 : Lancement de Docker Compose (Base de données)

1. Toujours dans le dossier `back`, lancez Docker Compose pour démarrer MongoDB et Mongo Express :

   ```bash
   docker compose up -d
   ```

   Cette commande va :

   - Démarrer MongoDB sur le port `27017`
   - Démarrer Mongo Express (interface web pour MongoDB) sur le port `8081`
   - Initialiser la base de données avec les données de `data/cars.json` et `data/users.json`

2. Vérifiez que les conteneurs sont bien démarrés :

   ```bash
   docker compose ps
   ```

3. (Optionnel) Accédez à Mongo Express pour visualiser la base de données :
   - URL : http://localhost:8081
   - Username : `user`
   - Password : `uiux`

### Étape 3 : Installation et lancement du Backend

1. Dans le dossier `back`, installez les dépendances :

   ```bash
   npm install
   ```

2. Lancez le serveur backend en mode développement :

   ```bash
   npm run dev
   ```

   Le serveur backend sera accessible sur : **http://localhost:3000**

   Vous devriez voir le message : `Server is running on http://localhost:3000`

### Étape 4 : Installation et lancement du Frontend

1. Ouvrez un **nouveau terminal** et naviguez dans le dossier `front` :

   ```bash
   cd front
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Lancez le serveur de développement :

   ```bash
   npm run dev
   ```

   Le frontend sera accessible sur : **http://localhost:5173**

## ✅ Vérification

Une fois toutes les étapes terminées, vous devriez avoir :

- ✅ MongoDB en cours d'exécution (Docker)
- ✅ Backend API accessible sur http://localhost:3000
- ✅ Frontend accessible sur http://localhost:5173

Ouvrez votre navigateur et accédez à **http://localhost:5173** pour voir l'application.

## 📁 Structure du Projet

```
TP/
├── back/                 # Backend (Node.js + Hono + MongoDB)
│   ├── src/             # Code source du backend
│   ├── data/            # Données initiales (cars.json, users.json)
│   ├── compose.yaml     # Configuration Docker Compose
│   └── package.json     # Dépendances backend
│
├── front/               # Frontend (React + TypeScript + Vite)
│   ├── src/            # Code source du frontend
│   └── package.json    # Dépendances frontend
│
└── Livrables/          # Documentation du projet
```

## 🛠️ Commandes Utiles

### Backend

```bash
cd back

# Mode développement (avec rechargement automatique)
npm run dev

# Compilation TypeScript
npm run build

# Lancement en mode production
npm start
```

### Frontend

```bash
cd front

# Mode développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview
```

### Docker Compose

```bash
cd back

# Démarrer les services
docker compose up -d

# Arrêter les services
docker compose down

# Voir les logs
docker compose logs -f

# Redémarrer les services
docker compose restart
```

## 🔧 Configuration

### Variables d'environnement Backend

Le fichier `.env` dans le dossier `back` doit contenir :

```env
MONGO_INITDB_ROOT_USERNAME=admin
MONGO_INITDB_ROOT_PASSWORD=password
```

### Ports utilisés

- **Frontend** : 5173 (Vite)
- **Backend API** : 3000
- **MongoDB** : 27017
- **Mongo Express** : 8081

## 🐛 Dépannage

### Problème : MongoDB ne démarre pas

- Vérifiez que Docker est bien installé et en cours d'exécution
- Vérifiez que le port 27017 n'est pas déjà utilisé
- Consultez les logs : `docker compose logs mongo`

### Problème : Le backend ne se connecte pas à MongoDB

- Vérifiez que Docker Compose est bien lancé : `docker compose ps`
- Vérifiez que les variables d'environnement dans `.env` sont correctes
- Vérifiez que MongoDB est accessible : `docker compose logs mongo`

### Problème : Le frontend ne peut pas communiquer avec le backend

- Vérifiez que le backend est bien lancé sur le port 3000
- Vérifiez la variable d'environnement `VITE_BACKEND_BASE_URL` dans le frontend (si configurée)
- Vérifiez la configuration CORS dans le backend

### Réinitialiser la base de données

Si vous souhaitez réinitialiser complètement la base de données :

```bash
cd back
docker compose down -v  # Supprime les volumes
docker compose up -d    # Recrée les conteneurs et réinitialise les données
```

## 📚 Documentation

Pour plus de détails sur l'architecture backend et les fonctionnalités, consultez :

- [Documentation Backend](./Livrables/LIVRABLES_BACKEND.md)

## 👥 Auteurs

Projet développé dans le cadre du cours UI/UX Design - SUP DE VINCI

---

**Bon développement ! 🚀**
