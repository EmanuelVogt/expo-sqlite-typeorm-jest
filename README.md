# expo-sqlite-typeorm-jest

## this project was created for testing typeorm db connection with expo-sqlite driver using jest;
<p align="center">🚀 typeorm in version 0.2.28, currently the getConnection() method doesn't work, making tests on the database impossible. This project was created with the intention of studying if the latest version of typeorm works correctly with the sqlite driver: expo-sqlite</p>

RESULT: The newest typeorm version really doesn't work with expo-sqlite. The solution was use a separeted drive to connect and make the tests, it's not the best solution but is a alternative to test the database.

### Features

- [x] Db connection tests
- [x] Db crud operations tests 

 User interface is not the focusing

### 🛠 Technologies

the following tools were used to build this little this project

- [Expo](https://expo.io/)
- [Node.js](https://nodejs.org/en/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/)
- [Jest](https://jestjs.io/pt-BR/docs/tutorial-react-native)



