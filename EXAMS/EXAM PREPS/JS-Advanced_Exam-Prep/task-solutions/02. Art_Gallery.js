class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { "picture": 200, "photo": 50, "item": 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        quantity = Number(quantity);

        let isInTheArr = false;

        if (!this.possibleArticles[articleModel]) {
            throw new Error("This article model is not included in this gallery!");
        }

        for (const el of this.listOfArticles) {
            if (el.articleName === articleName && el.articleModel === articleModel) {
                el.quantity += quantity;
                isInTheArr = true;
            }
        }

        if (!isInTheArr) {
            this.listOfArticles.push({ articleModel, articleName, quantity });
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }

    inviteGuest(guestName, personality) {
        for (let guest of this.guests) {
            if (guest.guestName === guestName) {
                throw new Error(`${guestName} has already been invited.`);
            }
        }

        let obj = { guestName, points: 0, purchaseArticle: 0 };

        switch (personality) {
            case 'Vip': obj.points = 500; break;
            case 'Middle': obj.points = 250; break;
            default: obj.points = 50; break;
        }
        this.guests.push(obj);

        return `You have successfully invited ${guestName}!`;
    }

    buyArticle(articleModel, articleName, guestName) {
        let isArticleInTheArr = false;

        let article;
        let guest;

        for (let el of this.listOfArticles) {
            if (el.articleName !== articleName && el.articleModel !== articleModel) {
                isArticleInTheArr = false;
            } else {
                isArticleInTheArr = true;
                article = el;
                break;
            }
        }
        if (!isArticleInTheArr) {
            throw new Error("This article is not found.");
        }
        if (article.quantity === 0) {
            return `The ${articleName} is not available.`;
        }

        let isGuestInTheArr = false;

        for (let el of this.guests) {
            if (el.guestName !== guestName) {
                isGuestInTheArr = false;
            } else {
                isGuestInTheArr = true;
                guest = el;
                break;
            }
        }
        if (!isGuestInTheArr) {
            return "This guest is not invited."
        }

        if (guest.points < this.possibleArticles[articleModel]) {
            return "You need to more points to purchase the article.";
        } else {
            article.quantity--;
            article.points -= this.possibleArticles[articleModel];
            guest.purchaseArticle++;
        }

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {
        let result = "";
        if (criteria == "article") {
            result += "Articles information:" + "\n";
            for (let el of this.listOfArticles) {
                result += `${el["articleModel"]} - ${el["articleName"]} - ${el["quantity"]}` + "\n";
            }
        } else if (criteria == "guest") {
            result += "Guests information:" + "\n";
            for (let g of this.guests) {
                result += `${g["guestName"]} - ${g["purchaseArticle"]}` + "\n";
            }
        }
        return result.trimEnd();
 
    }
}





