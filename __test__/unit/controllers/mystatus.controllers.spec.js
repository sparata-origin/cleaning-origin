jest.mock("../../../src/services/mystatus.service");
const StatusController = require("../../../src/controllers/mystatus.controllers");
const mockStatusService = jest.fn().mockImplementation(() => {
  return {
    myStatus: jest.fn(),
    existStatus: jest.fn(),
    receiveOrder: jest.fn(),
    pointTrading: jest.fn(),
  };
});

let statusController;

beforeAll(() => {
  statusController = new StatusController();
  statusController.statusService = new mockStatusService();
  statusController.statusService.myStatus.mockImplementation();
  statusController.statusService.existStatus.mockImplementation();
  statusController.statusService.receiveOrder.mockImplementation();
  statusController.statusService.pointTrading.mockImplementation();
});

beforeEach(() => {
  jest.resetAllMocks();
});

describe("myStatus 메소드", () => {
  test("", () => {});});

describe("serviceStatusUpdate 메소드", () => {
  test("", () => {});});

describe("receiveOrder 메소드", () => {
  test("", () => {});});
