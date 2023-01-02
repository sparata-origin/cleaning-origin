const ReviewsService = require('../services/reviews.service');

class ReviewController {
    reviewsService = new ReviewsService();
    writeReview = async (req, res, next) => {
        try {
            const { content, star } = req.body;
            if (!content) {
                return res.status(412).json({
                    errorMessage: '내용을 입력해주세요',
                });
            }
            if (!star) {
                return res.status(412).json({
                    errorMessage: '별점을 입력해주세요',
                });
            }
            const { serviceId, businessId } = req.params;
            const customerId = res.locals.user.id;
            const writeReviewData = await this.reviewsService.writeReview(
                serviceId,
                businessId,
                customerId,
                content,
                star
            );
            if (writeReviewData.errorMessage) {
                return res
                    .status(400)
                    .json({ errorMessage: writeReviewData.errorMessage });
            }
            res.status(201).json({
                message: '리뷰 작성 완료',
            });
        } catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    };
    getReviews = async (req, res, next) => {
        try {
            const { businessId } = req.params;
            const reviews = await this.reviewsService.findAllReview(businessId);
            res.status(200).json({ data: reviews });
        } catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    };
    getStar = async (req, res, next) => {
        try {
            const reviewStar = await this.reviewsService.findAllStar();
            res.status(200).json({ data: reviewStar });
        } catch (error) {
            res.status(500).json({ errorMessage: error.message });
        }
    };
}

module.exports = ReviewController;
