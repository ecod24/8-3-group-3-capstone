\c capstone;

INSERT INTO users (name, image, email, age, dietary_restrictions, food_preferences, sexual_orientation, gender, about_me, firebase_id, chat_handle) VALUES
('Dwight Schrute', 'https://images.squarespace-cdn.com/content/v1/59da5d13cf81e005db71d925/1513171418491-XQGKXDDIZ8JDUWK33RJC/dwight.jpg?format=1000w', 'kittenmai29@gmail.com', 42, 'Carnivore Diet', 'Steak, Roasted Chicken', 'Straight', 'Male', 'My name is Dwight Schrute. Assistant Regional Manager at Dunder Mifflin. I love eating food while watching Battlestar Galactica.', 'W4FK4STalZUiP6gWtfqaU15BWRH2', '@dwightscrute'),
('Michael Scott', 'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png', 'tc9095@yahoo.com', 45, 'Vegan, Egg Allergy, Peanut Allergy', 'Salad, Impossible Burgers, Green Bean Casserole', 'Straight', 'Male', 'Manager at Dunder Mifflin PC. Devoted Vegan. I make my own salads at work and I love eating them in my office! Excited to meet the other vegans of the world!', 'VrnVrrzccZR06uUOA71hmNpcEDt1', '@michaelscott'),
('Pam Beesly', 'https://i.pinimg.com/474x/b4/37/0b/b4370be92a23d01d414d94983c2fb925.jpg', 'lawrencejust6@gmail.com', 35, 'Vegetarian, Lactose Intolerant', 'Veggie Pasta, Pizza, and Salads', 'Straight', 'Female', 'Wanna dine and paint? If you are a vegetarian, I have so many restaurants to tell you about. I look forward to recommending them to you if we match!', 'zTJzvxvJByTmVEUxcGe6R6PTpqU2', '@pambeesly'),
('Holly Flax', 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Hollytheoffice.jpg/220px-Hollytheoffice.jpg', 'gentdoesitagain@gmail.com', 49, 'No Diet Restrictions', 'Burgers, Caviar, Fried Food', 'Bisexual', 'Female', 'There is a lot of good food in my town! I would love to show you if you are interested. Lets talk and find out what you like!' , 'YP6HcCYTTsamYH2oJ95mZW4vwHl2', '@hollyflax'),
('Angela Martin', 'https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/2-0-design/the-office/cast-the-office-angela-martin.jpg/_jcr_content/renditions/original.JPEG', 'jt101015@gmail.com', 51, 'Lactose Intolerant', 'Dumplings, Shrimp Cocktail, Fried Noodles', 'Bisexual', 'Female', 'I love cooking at home and I am not a picky eater. Although I am lactose, that has never stopped me from enjoying good food (even if it has dairy).', 'vJhKcyYIyvRFgQhA1Mla7LTOzDu1', '@angelamartin'),
('Andy Bernard', 'https://akns-images.eonline.com/eol_images/Entire_Site/2020023/rs_600x600-200123145928-office1.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top', 'lanithom@outlook.com', 35, 'Kosher, Gluten Free', 'Fried Chicken, Turkey lettuce wraps, and pudding ', 'Gay', 'Male', 'Graduated from Cornell so I am that guy. I am celiac and cannot process gluten. I found a new love for food by discovering how to make things delicious without the need for gluten!', 'WnyqeAmlhZaPatHOzBzhbIe04nQ2', '@andybernard');

INSERT INTO likes (liker_id, liked_id) VALUES
(1, 2), (2, 3), (2, 4), (2, 6), (3, 2), (5, 6);

INSERT INTO foods (name, image) VALUES
('Birria Tacos', 'https://www.swankyrecipes.com/wp-content/uploads/2022/08/Birria-Tacos.jpg'),
('Korean Fried Chicken', 'https://www.cookinwithmima.com/wp-content/uploads/2022/06/gochujang-chicken-tenders.jpg'),
('Ramen', 'https://www.halfbakedharvest.com/wp-content/uploads/2021/10/Easy-Ginger-Chicken-and-Spinach-Ramen-1.jpg'),
('Shawarma', 'https://www.foxyfolksy.com/wp-content/uploads/2021/09/chicken-shawarma.jpg');

INSERT INTO allergies (allergy_type) VALUES
('Fish'),
(''),
('Peanuts'),
('Soy');

--        {

    --     {
    --         "id": 5,
    --         "name": "Lani Thomas",
    --         "image": "https://this-person-does-not-exist.com/img/avatar-3711db93213e6809aefa83847dcec927.jpg",
    --         "email": "lanithom@outlook.com",
    --         "age": 29,
    --         "dietary_restrictions": "Kosher, Gluten Free",
    --         "food_preferences": "Fried Chicken",
    --         "sexual_orientation": "Bisexual",
    --         "gender": "Female",
    --         "religion": "Jewish"
    --     }
    -- ]