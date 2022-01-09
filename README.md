# Documentation


###  Endpoints

You can find here the following views:

- `/api/people/search` - Search a any givin user.

- `/api/skill/search` - Search people by skill.


## Local installation

### Requirements

Please you'll need to have NodeJS 14x installed your machine.  [install node from here](https://nodejs.org/en/)

### Cloning the Repository

Run this code in your terminal or else use a Git client.

```bash
git clone https://github.com/thesaintzion/torre-server.git
```

### Running the dev server
Cd into the root directory and run the following command:

```bash
npm run dev
```

To very the server is running open [http://localhost:4000/health-status](http://localhost:4000/health-status) and you should "OK" on the screen.

### Project structure

```bash
├── README.md
├── src
│   ├── app.ts
│   ├── controllers
│   │   ├── searchPeople.controller.ts
│   │   └── searchPeopleBySkill.controller.ts
│   ├── interfaces
│   ├── middleware
│   │   └── global.ts
│   ├── models
│   ├── routes
│   │   └── routes.ts
│   ├── schemas
│   ├── services
│   │   └── search.service.ts
│   └── utils
│       ├── config.util.ts
│       └── logger.util.ts
└── tsconfig.json
```