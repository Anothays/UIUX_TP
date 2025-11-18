db = db.getSiblingDB("uiux");

db.user.insertMany(require("/data/users.json"));
db.car.insertMany(require("/data/cars.json"));
