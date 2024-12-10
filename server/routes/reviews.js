const express = require('express');
const router = express.Router();
const mongoose = require('mongoose'); 
const Review = require('../models/review');
const mockData = require('../data/MOCK_DATA-5.json');



function formatDate(isoDate) {
    const dateObj = new Date(isoDate);
    const day = String(dateObj.getDate()).padStart(2, '0'); 
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); 
    const year = dateObj.getFullYear();
    
    return `${day}.${month}.${year}`;
}

router.post('/review', async (req, res) => {
    try{
        const {userId,username,restaurantId, review, rating} = req.body;

        if(!mongoose.Types.ObjectId.isValid(userId)){
            return res.status(400).send('Invalid userId');
        }

        // You can check if restaurantId is a number (optional)
        if (typeof restaurantId !== 'number') {
            return res.status(400).send('Invalid restaurantId');
        } 
        //Find restaurant in MockData
        const restaurantIndex = mockData.findIndex(restaurant => restaurant.id === restaurantId);
        if (restaurantIndex === -1){
            return res.status(400).send('Restaurant not found');
        }

        //Create review and save review
        const newReview = new Review({
            userId,
            username,
            restaurantId,
            review, 
            rating
        });
        await newReview.save();
        
        

        res.json({success: true});

    }catch(err){
        console.error('Error submitting review:', err);
        res.status(500).send('An error occurred');
    }
});

router.get('/:restaurantId', async (req, res) => {
    try{
        const restaurantId = Number(req.params.restaurantId);
        const dbReviewsRaw = await Review.find({restaurantId: restaurantId});
        
        //Map through database 
        const dbReviews = dbReviewsRaw.map(({ username, review, date, rating}) => ({
            username,
            review,
            date: formatDate(date),
            rating
        }))

        let transformedMockReviews = [];

        const mockReviews = mockData[restaurantId];
        if(mockReviews && mockReviews.reviews){
            const {Username, review, date, rating} =  mockReviews.reviews;
            for(let i=0; i < Username.length; i++){
                transformedMockReviews.push({
                    username: Username[i],
                    review: review[i],
                    date: date[i],
                    rating: rating[i]

                });
            }
        }
        const combinedReview = [...dbReviews, ...transformedMockReviews];


        res.json(combinedReview);

    }catch(err){
        console.error('Error fetching reviews:', err);
        res.status(500).send('An error occurred'); 
    }
});

module.exports = router;