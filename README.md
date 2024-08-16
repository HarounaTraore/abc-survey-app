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
   cd abc-survery-app
   ```

3. **Installez les dépendances :**

   ```bash
   npm install
   ```

4. **Configuration de la base de données :**

   Le fichier `config/database.js` contient la configuration nécessaire pour interagir avec la base de données et ses différentes collections.
   avant de lancer l'application, il est necessaire de mettre en place la base de données et les differentes collections à l'aide de command suivantes :

## Modules et Documentation

L'application est subdivisée en cinq modules principaux :

- **database.js :** Contient la configuration nécessaire pour interagir avec la base de données et les différentes collections.

  | **Base de données** | **Collections** |
  | ------------------- | --------------- |
  | survey_db           | answers         |
  | survey_db           | surveys         |
  | survey_db           | questions       |

- **surveyModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **surveys**. Il est composé des fonctions suivantes :

  1. `surveyAdd({surveyId: int, name: string, description: string, createdAt: date}, createdBy:{employeeName: string, employeeRole: string})` : pour ajouter un document dans la collection de **_surveys_**.
  2. `surveyGet()` : pour afficher tous les documents de la collection de **_surveys_**.
  3. `surveyUpdate(surveyId: int, {name: string, description: string, createdAt: date})` : pour modifier un document de la collection de **_surveys_**.
  4. `surveyDestroy(surveyId: int)` : pour supprimer un document de la collection de **_surveys_**.

- **questionModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **questions**. Il est composé des fonctions suivantes :

  1. `questionAdd({questionId: int, surveyId: int, title: string, type: string, option: int})` : pour ajouter un document dans la collection de **_questions_**.
  2. `questionGet()` : pour afficher tous les documents dans la collection de **_questions_**.
  3. `questionUpdate(questionId, {surveyId: int, name: string, type: string, option: int})` : pour modifier un document dans la collection de **_questions_**.
  4. `questionDestroy(questionId: int)` : pour supprimer un document dans la collection de **_questions_**.

- **answerModule.js :** Ce module permet de gérer les opérations **CRUD** de la collection **answers**. Il est composé des fonctions suivantes :

  1. `answerAdd({answerId: int, questionId: int, title: string})` : Pour ajouter un document dans la collection de **_answers_**.
  2. `answerGet()` : Pour afficher tous les documents dans la collection de **_answers_**.
  3. `answerUpdate(answerId: int, {questionId: int, title: string})` : Pour modifier un document dans la collection de **_answers_**.
  4. `answerDestroy(answerId: int,)` : Pour supprimer un document dans la collection de **_answers_**.

`  Il est important de noté que les fonctions ne peuvent prendre à l'entré qu'un seul document à la fois.`

- **app.js :** est l'entrée principale de l'application. Il contient une fonction principale **main** qui englobe l'appel de toutes les fonctions des différents modules.

## Utilisation

Pour démarrer l'application, exécutez la commande suivante :

```bash
npm start
```

## Auteur

- [Harouna Adama Traoré](https://github.com/HarounaTraore/)
