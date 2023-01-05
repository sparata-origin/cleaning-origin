jest.mock("../../../src/repository/services.repository");
const ServicesService = require("../../../src/services/services.service");
const mockServicesRepository = jest.fn().mockImplementation(() => {
  return {
    findAllService: jest.fn(),
    findServiceById: jest.fn(),
    findService: jest.fn(),
    createService: jest.fn(),
    updateService: jest.fn(),
    destroyService: jest.fn(),
  };
});

let servicesService;

beforeAll(() => {
  servicesService = new ServicesService();
  servicesService.servicesRepository = new mockServicesRepository();
  servicesService.servicesRepository.findAllService.mockImplementation(
    async () => {}
  );
  servicesService.servicesRepository.findServiceById.mockImplementation(
    async () => {}
  );
  servicesService.servicesRepository.findService.mockImplementation(
    async () => {}
  );
  servicesService.servicesRepository.createService.mockImplementation(
    async () => {}
  );
  servicesService.servicesRepository.updateService.mockImplementation(
    async () => {}
  );
  servicesService.servicesRepository.destroyService.mockImplementation(
    async () => {}
  );
});

describe("requestServices Method", () => {
  test("", () => {});
});

describe("putServices Method", () => {
  test("", () => {});
});

describe("deleteServices Method", () => {
  test("", () => {});
});

describe("getServicesList Method", () => {
  test("", () => {});
});

describe("getServicesDetail Method", () => {
  test("", () => {});
});
