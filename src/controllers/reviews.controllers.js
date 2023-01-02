const ReviewsService = require('../services/reviews.service');

class ReviewController {
    reviewsService = new ReviewsService();
    writeReview = async (req, res, next) => {
        try {
            const { content, star } = req.body;
            await this.reviewsService.writeReview(content, star);
        } catch {}
    };
}

module.exports = ReviewController;
