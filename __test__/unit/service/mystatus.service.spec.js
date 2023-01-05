jest.mock("../../../src/repository/mystatus.repository");
const StatusService = require("../../../src/services/mystatus.service");
const mockStatusRepository = jest.fn().mockImplementation(() => {
  return {
    customerStatus: jest.fn(),
    buisnessStatus: jest.fn(),
    existStatus: jest.fn(),
    existStatusUpdate: jest.fn(),
    existService: jest.fn(),
    userPoint: jest.fn(),
    PointTradingUpdate: jest.fn(),
  };
});

const mockServiceEntites = [
  {
    id: 1,
    address: "디스이즈시 스파르타군",
    homeImage: "/img/default.png",
    status: "대기중",
    createdAt: new Date("01 September 2022 10:00"),
    updatedAt: new Date("01 September 2022 10:00"),
    customerId: 1,
    businessId: null,
  },
  {
    id: 2,
    address: "디스이즈시 스파르타군",
    homeImage: "/img/default.png",
    status: "대기중",
    createdAt: new Date("02 September 2022 10:00"),
    updatedAt: new Date("02 September 2022 10:00"),
    customerId: 1,
    businessId: null,
  },
  {
    id: 2,
    address: "디스이즈시 스파르타군",
    homeImage: "/img/default.png",
    status: "청소중",
    createdAt: new Date("04 September 2022 10:00"),
    updatedAt: new Date("05 September 2022 10:00"),
    customerId: 1,
    businessId: 2,
  },
];

const mockUserEntities = [
  {
    id: 1,
    point: 20000,
    isBusiness: false,
  },
  {
    id: 2,
    point: 0,
    isBusiness: true,
  },
];

let statusService;

beforeAll(() => {
  statusService = new StatusService();
  statusService.statusRepository = new mockStatusRepository();
  statusService.statusRepository.customerStatus.mockImplementation(
    async (userId) => {
      return mockServiceEntites.filter(
        (service) => service.customerId === userId
      );
    }
  );
  statusService.statusRepository.buisnessStatus.mockImplementation(
    async (userId) => {
      return mockServiceEntites.filter(
        (service) => service.businessId === userId
      );
    }
  );
  statusService.statusRepository.existStatus.mockImplementation(async (id) => {
    return mockServiceEntites.find((service) => service.id === id);
  });
  statusService.statusRepository.existStatusUpdate.mockImplementation(
    async (existStatus) => {
      mockServiceEntites.map((service) =>
        service.id === existStatus.id ? existStatus : service
      );
      return existStatus;
    }
  );
  statusService.statusRepository.existService.mockImplementation(
    async (businessId) => {
      return mockServiceEntites
        .filter((service) => service.businessId === businessId)
        .map((service) => ({ status: service.status }));
    }
  );
  statusService.statusRepository.userPoint.mockImplementation(async (id) => {
    const findOne = mockUserEntities.find((user) => user.id === id);
    return { id: findOne.id, point: findOne.point };
  });
  statusService.statusRepository.PointTradingUpdate.mockImplementation(
    async (businessPoint) => {
      mockUserEntities.map((user) =>
        user.id === businessPoint.id ? businessPoint : user
      );
      return;
    }
  );
});

beforeEach(() => {
  jest.resetAllMocks();
});

describe("myStatus 메소드", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("존재하는 고객 유저", async () => {
    const userId = 1;
    const isBusiness = false;
    const result = await statusService.myStatus(userId, isBusiness);

    expect(result).toEqual(
      mockServiceEntites.filter((service) => service.customerId === userId)
    );
  });

  test("존재하는 업체 유저", async () => {
    const userId = 2;
    const isBusiness = true;
    const result = await statusService.myStatus(userId, isBusiness);
    expect(result).toEqual(
      mockServiceEntites.filter((service) => service.businessId === userId)
    );
  });

  test("존재하지 않는 고객 유저", async () => {
    const userId = 3;
    const isBusiness = false;
    const result = await statusService.myStatus(userId, isBusiness);
    expect(result).toEqual([]);
  });

  test("존재하지 않는 업체 유저", async () => {
    const userId = 4;
    const isBusiness = true;
    const result = await statusService.myStatus(userId, isBusiness);
    expect(result).toEqual([]);
  });

  test("조회 중에 에러 발생", async () => {
    const userId = 5;
    const isBusiness = false;
    statusService.statusRepository.customerStatus.mockImplementationOnce(
      async () => {
        throw new Error("CustomerStatus Method Error");
      }
    );
    const result = await statusService.myStatus(userId, isBusiness);

    expect(result).toBe(false);
  });
});

describe("receiveOrder method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("", () => {});
});

describe("existStatus method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("", () => {});
});

describe("pointTrading method", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("", () => {});
});
