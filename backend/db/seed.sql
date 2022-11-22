\c capstone;

INSERT INTO users (name, image, email, age, dietary_restrictions, food_preferences, sexual_orientation, gender, religion) VALUES
('Edwin Codrington', 'blank image', 'ecod24@gmail.com', 24, 'none', 'dumplings, burgers', 'straight', 'male', 'christian'),
('Abdullah Tasfiek', 'blank image', 'abdullah@gmail.com',25, 'dietary restrictions here', 'food prefs here', 'sexual orientation here', 'gender here', 'religion here'),
('Hermanclyde Guerrero', 'blank image', 'hermanclyde@yahoo.com', 25, 'dietary restrictions here', 'pizza', 'sexual orientation here', 'gender here', 'religion here'),
('Charlie Moran', 'blank image', 'charlie@outlook.com', 0, 'dietary restrictions here', 'food prefs here', 'sexual orientation here', 'gender here', 'religion here');


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
