

const apiKey = 'k1TUPnPJoMpz2D6-i9fsa_C5gxFISWEsL3pwiQ9WU0L6gpQ6HNVfq5S-PAd2LOqwjg9lPLprby4hnMoO6DOMnkNvOm_HwZvnhG-gTFZydEYEZf81esL9A5PrklWvY3Yx';

const yelp = {

    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {
            Authorization: `Bearer ${apiKey}`
        }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business);
                    return
                    {
                        id: business.id,
                        imageSrc: business.image_url,
                        busName: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.state,
                        zipCode: business.location.postal_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    }
                });
            }
        });
    }
};

export default yelp;