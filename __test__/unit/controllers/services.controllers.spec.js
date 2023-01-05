jest.mock("../../../src/services/services.service");
const ServicesController = require("../../../src/controllers/services.controllers");
const mockServicesService = jest.fn().mockImplementation(() => {
  return {
    requestServices: jest.fn(),
    putServices: jest.fn(),
    deleteServices: jest.fn(),
    getServicesList: jest.fn(),
    getServicesDetail: jest.fn(),
  };
});

let servicesController;

beforeAll(() => {
  servicesController = new ServicesController();
  servicesController.servicesService = new mockServicesService();
  servicesController.servicesService.requestServices.mockImplementation();
  servicesController.servicesService.putServices.mockImplementation();
  servicesController.servicesService.deleteServices.mockImplementation();
  servicesController.servicesService.getServicesList.mockImplementation();
  servicesController.servicesService.getServicesDetail.mockImplementation();
});

beforeEach(() => {
  jest.resetAllMocks();
});

describe("requestServices 메소드", () => {
  test("", () => {});
});

describe("putServices 메소드", () => {
  test("", () => {});
});

describe("deleteServices 메소드", () => {
  test("", () => {});
});

describe("getServicesList 메소드", () => {
  test("", () => {});
});

describe("getServicesDetail 메소드", () => {
  test("", () => {});
});
