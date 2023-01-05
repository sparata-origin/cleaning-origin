jest.mock("../../../src/services/reviews.service");
const ReviewsController = require("../../../src/controllers/reviews.controllers");
const mockReviewsService = jest.fn().mockImplementation(() => {
  return {
    writeReview: jest.fn(),
    findAllReview: jest.fn(),
    findAllStar: jest.fn(),
  };
});

let reviewsController;

beforeAll(() => {
  reviewsController = new ReviewsController();
  reviewsController.reviewsService = new mockReviewsService();
  reviewsController.reviewsService.writeReview.mockImplementation();
  reviewsController.reviewsService.findAllReview.mockImplementation();
  reviewsController.reviewsService.findAllStar.mockImplementation();
});

beforeEach(() => {
  jest.resetAllMocks();
});

describe("writeReview 메소드", () => {
  
  test("", () => {});
});

describe("getReviews 메소드", () => {
  test("", () => {});});

describe("getStar 메소드", () => {
  test("", () => {});});
