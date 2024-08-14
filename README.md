
# Survey App

## Description

Survey App est une application JavaScript simple permettant de gérer les fiches d'enquête de satisfaction des clients. L'application utilise une base de données MongoDB pour stocker les données et permet d'effectuer des opérations CRUD (Create, Read, Update, Delete) sur ces fiches.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants :

- [Node.js](https://nodejs.org/) (version 12 ou supérieure)
- [MongoDB](https://www.mongodb.com/try/download/community) (version 4.0 ou supérieure)

## Installation

Suivez ces étapes pour configurer le projet sur votre machine locale :

1. **Clonez le repository :**

    ```bash
    git clone https://github.com/HarounaTraore/abc-survey-app.git
    ```

2. **Accédez au dossier du projet :**

    ```bash
    cd survey-app
    ```

3. **Installez les dépendances :**

    ```bash
    npm install
    ```

4. **Configuration de la base de données :**

    Le fichier `config/database.js` contient la configuration nécessaire pour interagir avec la base de données et ses différentes collections.
    avant de l'ancer l'application, il est necessaire de mettre en place la base de données et les differentes collections à l'aide de command suivantes :

    creation de la base de données
     ```mongoDB
    use survey_db
    ```
    creation de la collection answers
    ```mongoDB
    db.createCollection("answers")
    ```
   creation de la collection surveys
    ```mongoDB
    db.createCollection("surveys")
    ```
    creation de la collection questions
    ```mongoDB
    db.createCollection("questions")
    ```

## Modules et Documentation

L'application est subdivisée en cinq modules principaux :

- **database.js :** Contient la configuration nécessaire pour interagir avec la base de données et les différentes collections.

  | **Base de données** | **Collections** |
  |---------------------|-----------------|
  |     survey_db       |     answers     |
  |     survey_db       |     surveys     |
  |     survey_db       |     questions   |

- **surveyModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **surveys**. Il est composé des fonctions suivantes :
  
  1. `surveyAdd` : pour ajouter un document dans la collection de ***surveys***.
  2. `surveyGet` : pour afficher tous les documents de la collection de ***surveys***.
  3. `surveyUpdate` : pour modifier un document de la collection de ***surveys***.
  4. `surveyDestroy` : pour supprimer un document de la collection de ***surveys***.

- **questionModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **questions**. Il est composé des fonctions suivantes :

  1. `questionAdd` : pour ajouter un document de la collection de ***questions***.
  2. `questionGet` : pour afficher tous les documents de la collection de ***questions***.
  3. `questionUpdate` : pour modifier un document de la collection de ***questions***.
  4. `questionDestroy` : pour supprimer un document de la collection de ***questions***.

- **answerModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **answers**. Il est composé des fonctions suivantes :

  1. `answerAdd` : pour ajouter un document de la collection de ***answers***.
  2. `answerGet` : pour afficher tous les documents de la collection de ***answers***.
  3. `answerUpdate` : pour modifier un document de la collection de ***answers***.
  4. `answerDestroy` : pour supprimer un document de la collection de ***answers***.

*Les fonctions qui ont le suffixe ***Add*** prennent un objet en entré et il ne peuvent inserer qu'un seul document à la fois*
*Les fonctions qui ont le suffixe  ***Get*** ne prennent aucun parametre*
*Les fonctions qui ont le suffixe ***Update*** prennent deux parametre à l'entré, ***Id*** et un ***objet*** de nouvelles valeurs*
il est inportant de noté que cette Id auto_Increment, pour chaque collection, l'Id est nommer comme suit: ***nomCollectionId***
*Pour les fonctions qui ont le suffixe ***Destroy*** prennent l'ID en parametre*.


- **app.js :** est l'entrée principale de l'application. Il contient une fonction principale **main** qui englobe l'appel de toutes les fonctions des différents modules.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Auteur 

- [Harouna Adama Traoré](https://github.com/HarounaTraore/abc-survey-app.git)
