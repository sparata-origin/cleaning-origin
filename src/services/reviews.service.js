const ReviewsRepository = require('../repository/reviews.repository');

class ReviewService {
    reviewsRepository = new ReviewsRepository();
    writeReview = async (content, star) => {
        try {
            const createReviewData = await this.reviewsRepository.writeReview(
                content,
                star
            );
            return createReviewData;
        } catch (err) {
            console.log(err);
        }
    };
}

module.exports = ReviewService;
