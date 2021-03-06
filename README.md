# Documentation


###  Endpoints

- `/api/people/search` - Search  users by first and last name.

- `/api/skill/search` - Search users by their skills.


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

To verify  that the server is running please open [http://localhost:4000/health-status](http://localhost:4000/health-status) and you should see "OK" on the screen.

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