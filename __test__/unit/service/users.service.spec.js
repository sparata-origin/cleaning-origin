jest.mock("../../../src/repository/users.repository");
const UsersService = require("../../../src/services/users.service");
const mockUsersRepository = jest.fn().mockImplementation(() => {
  return {
    userRegister: jest.fn(),
    existUser: jest.fn(),
  };
});

let usersService;

beforeAll(() => {
  usersService = new UsersService();
  usersService.usersRepository = new mockUsersRepository();
  usersService.usersRepository.userRegister.mockImplementation(async () => {});
  usersService.usersRepository.existUser.mockImplementation(async () => {});
});

describe("userRegister Method", () => {
  test("", () => {});
});

describe("existUser Method", () => {
  test("", () => {});
});
