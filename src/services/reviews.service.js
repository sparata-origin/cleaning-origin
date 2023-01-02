const { post } = require('superagent');
const ReviewsRepository = require('../repository/reviews.repository');

class ReviewService {
    reviewsRepository = new ReviewsRepository();
    writeReview = async (serviceId, businessId, customerId, content, star) => {
        try {
            const existService = await this.reviewsRepository.searchService(
                serviceId
            );
            if (!existService) {
                return { errorMessage: '해당하는 서비스가 없습니다' };
            }
            if (parseInt(customerId) !== existService.customerId) {
                return { errorMessage: '해당 서비스에 접근할 수 없습니다' };
            }
            if (parseInt(businessId) !== existService.businessId) {
                return {
                    errorMessage:
                        '해당 서비스는 아직 업체가 정해지지 않았습니다',
                };
            }
            const createReviewData = await this.reviewsRepository.writeReview(
                parseInt(serviceId),
                parseInt(businessId),
                customerId,
                content,
                star
            );
            return createReviewData;
        } catch (err) {
            console.log(err);
        }
    };
    findAllReview = async (businessId) => {
        try {
            const allReview = await this.reviewsRepository.findAllReview(
                businessId
            );
            if (allReview.length < 1) {
                return { errorMessage: '리뷰가 존재하지 않습니다' };
            }
            return allReview.map((review) => {
                return {
                    // id: review.id,
                    content: review.content,
                    star: review.star,
                    createdAt: review.createdAt,
                    // updatedAt: review.updatedAt,
                    customerId: review.customerId,
                    businessId: review.businessId,
                    // serviceId: review.serviceId,
                    Company: {
                        Name: review.User.nickname,
                    },
                };
            });
        } catch (error) {
            console.log(error);
        }
    };
    findAllStar = async () => {
        try {
            const reviewStar = await this.reviewsRepository.findAllStar();
            if (reviewStar.length < 1) {
                return { errorMessage: '리뷰가 존재하지 않습니다' };
            }
            return reviewStar.map((review) => {
                return {
                    starAVG: Math.round(review.starAVG * 10) / 10,
                    businessId: review.businessId,
                    companyName: review['User.nickname'],
                };
            });
        } catch (error) {
            console.log(error);
        }
    };
}

module.exports = ReviewService;
