const {
    Reviews,
    Services,
    Users,
    sequelize,
} = require('../../sequelize/models');

class ReviewRepository {
    writeReview = async (serviceId, businessId, customerId, content, star) => {
        const reviewData = await Reviews.create({
            serviceId,
            businessId,
            customerId,
            content,
            star,
        });
        return reviewData;
    };
    searchService = async (serviceId) => {
        const serviceDate = await Services.findByPk(serviceId);
        return serviceDate;
    };
    findAllReview = async (businessId) => {
        const reviews = await Reviews.findAll({
            where: { businessId },
            order: [['createdAt', 'DESC']],
            attributes: [
                'content',
                'star',
                'createdAt',
                'businessId',
                'customerId',
            ],
            include: {
                model: Users,
                attributes: ['nickname'],
            },
            raw: true,
        });
        return reviews;
    };
    findAllStar = async () => {
        const reviewStar = await Reviews.findAll({
            include: {
                model: Users,
                attributes: ['nickname'],
            },
            attributes: [
                [sequelize.fn('AVG', sequelize.col('star')), 'starAVG'],
                'businessId',
            ],
            raw: true,
            group: ['Reviews.businessId'],
        });
        return reviewStar;
    };

    serviceStatus = async (serviceStatus) => {
        serviceStatus.save();
    }
}

module.exports = ReviewRepository;
