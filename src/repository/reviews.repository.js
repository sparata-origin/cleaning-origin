const { Reviews } = require('../../sequelize/models');

class ReviewRepository {
    writeReview = async (content, star) => {
        const reviewData = await Reviews.create({ content, star });
        return reviewData;
    };
}

module.exports = ReviewRepository;
