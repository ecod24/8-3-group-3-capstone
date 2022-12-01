\c capstone;

INSERT INTO users (name, image, email, age, dietary_restrictions, food_preferences, sexual_orientation, gender, about_me) VALUES
('Mai Levy', 'https://this-person-does-not-exist.com/img/avatar-4ea9fe30d2378d66bdb102ada00a27c8.jpg', 'kittenmai29@gmail.com', 22, 'Vegan', 'Mashed Potatoes, Ice Cream, Green Bean Casserole', 'Straight', 'Female', 'Devoted Christian and Vegan. I love getting to know people over good food. I am excited to meet with one of you!'),
('Trevor Cousins', 'https://this-person-does-not-exist.com/img/avatar-062fc32057bbfb679ada3d8465aa856b.jpg', 'tc9095@yahoo.com', 35, 'Egg Allergy, Peanut Allergy', 'Steak, Mashed Potatoes', 'Gay', 'Male', 'My name is Trevor and I love steak. Maybe too much...'),
('Justice Lawrence', 'https://this-person-does-not-exist.com/img/avatar-062fc32057bbfb679ada3d8465aa856b.jpg', 'lawrencejust6@gmail.com', 32, 'Vegan, Lactose Intolerant', 'Nuggets, Cake', 'Straight', 'Male', 'Not much to know about me if you eat meat. If you do not however.. I have so many places to tell you about, I look forward to telling you all about it.'),
('Kristian Gent', 'https://this-person-does-not-exist.com/img/avatar-2f3889dc98df71ce766fcf8c06473f9c.jpg', 'gentdoesitagain@gmail.com', 25, 'Halal', 'Burgers, Caviar, Fried Food', 'Gay', 'Male', 'There are a lot of good Halal spots I would love to show you if you are interested. Lets talk and find out what you like!'),
('Jessica Terry', 'https://this-person-does-not-exist.com/img/avatar-a64476ddbbdaa1c22d020b442e9800ae.jpg', 'jt101015@gmail.com', 23, 'Lactose Intolerant', 'Dumplings, Shrimp Cocktail, Ice Cream', 'Straight', 'Female', 'Although I am lactose, its never stopped me in the past from enjoying really good food, dairy or not.'),
('Lani Thomas', 'https://this-person-does-not-exist.com/img/avatar-3711db93213e6809aefa83847dcec927.jpg', 'lanithom@outlook.com', 29, 'Kosher, Gluten Free', 'Fried Chicken', 'Bisexual', 'Female', 'I am celiac and cannot process gluten. I found a new love for food discovering how to make things delicious without the need for gluten!');


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