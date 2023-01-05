jest.mock("../../../src/services/users.service");
const UsersController = require("../../../src/controllers/users.controllers");
const mockUsersService = jest.fn().mockImplementation(() => {
  return {
    userRegister: jest.fn(),
    login: jest.fn(),
  };
});

let usersController;

beforeAll(() => {
  usersController = new UsersController();
  usersController.usersService = new mockUsersService();
  usersController.usersService.userRegister.mockImplementation();
  usersController.usersService.login.mockImplementation();
});

beforeEach(() => {
  jest.resetAllMocks();
});

describe("userRegister 메소드", () => {
  test("", () => {});
});

describe("login 메소드", () => {
  test("", () => {});
});

describe("logout 메소드", () => {
  test("", () => {});
});
