jest.mock("../../../src/repository/reviews.repository");
const ReviewsService = require("../../../src/services/reviews.service");
const mockReviewsRepository = jest.fn().mockImplementation(() => {
  return {
    writeReview: jest.fn(),
    searchService: jest.fn(),
    findAllReview: jest.fn(),
    findAllStar: jest.fn(),
    findBusinessStar: jest.fn(),
    serviceStatus: jest.fn(),
  };
});

let reviewsService;

beforeAll(() => {
  reviewsService = new ReviewsService();
  reviewsService.reviewsRepository = new mockReviewsRepository();
  reviewsService.reviewsRepository.writeReview.mockImplementation(
    async () => {}
  );
  reviewsService.reviewsRepository.searchService.mockImplementation(
    async () => {}
  );
  reviewsService.reviewsRepository.findAllReview.mockImplementation(
    async () => {}
  );
  reviewsService.reviewsRepository.findAllStar.mockImplementation(
    async () => {}
  );
  reviewsService.reviewsRepository.findBusinessStar.mockImplementation(
    async () => {}
  );
  reviewsService.reviewsRepository.serviceStatus.mockImplementation(
    async () => {}
  );
});

describe("writeReview Method", () => {
  test("", () => {});
});

describe("findAllReview Method", () => {
  test("", () => {});
});

describe("findAllStar Method", () => {
  test("", () => {});
});