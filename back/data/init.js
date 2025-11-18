db = db.getSiblingDB("uiux");

db.user.insertMany(require("/data/users.json"));
db.car.insertMany(require("/data/cars.json"));

db.createUser({
    user: process.env.MONGO_INITDB_ROOT_USERNAME,
    pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
    roles: [
        {
            role: "readWrite",
            db: "uiux",
        },
    ],
});
