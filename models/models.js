//const sequelize = require('../db')
//const {DataTypes} = require('sequelize')
import mongoose from "mongoose"

/*const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
    name: {type: DataTypes.STRING, defaultValue: "Анонимус"},
})*/

const UserSchema = new mongoose.Schema({
    //id: {type: Number, autoIndex: true },
    email: {type: String, require: true, unique: true},
    password: {type: String, require: true},
    role: {type: String, default: "USER"},
    name: {type: String, default: "Анонимус"},
})

/*const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})*/

const Basket = new mongoose.Schema({
    id: {type: Number, autoIndex: true},
})

/*const BasketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})*/

const BasketDevice = new mongoose.Schema({
    id: {type: Number, autoIndex: true},
})

/*const Device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
    current: {type: DataTypes.INTEGER, defaultValue: 1},
    favorite: {type: DataTypes.INTEGER, defaultValue: 0}
})*/

const Device = new mongoose.Schema({
    id: {type: Number, autoIndex: true },
    name: {type: String, require: true, unique: true},
    price: {type: Number, require: true},
    rating: {type: Number, default: 0},
    img: {type: String, unique: true},
    current: {type: Number, default: 1},
    favorite: {type: Number, default: 0},
})

/*const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})*/

const Type = new mongoose.Schema({
    id: {type: Number, autoIndex: true},
    name: {type: String, require: true, unique: true},
})

/*const Brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})*/

const Brand = new mongoose.Schema({
    id: {type: Number, autoIndex: true},
    name: {type: String, require: true, unique: true},
})

/*const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})*/

const Rating = new mongoose.Schema({
    id: {type: Number, autoIndex: true},
    rate: {type: Number, unique: true},
})

/*const DeviceInfo = sequelize.define('device_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})*/

const DeviceInfo = new mongoose.Schema({
    id: {type: Number, autoIndex: true},
    title: {type: String, unique: true},
    description: {type: String,  unique: true},
})

/*const ReviewsInfo = sequelize.define('reviews_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    deviceId: {type: DataTypes.INTEGER,},
    userName: {type: DataTypes.STRING, allowNull: false},
    positive: {type: DataTypes.STRING, allowNull: false},
    negative: {type: DataTypes.STRING, allowNull: false},
    rate: {type: DataTypes.INTEGER, allowNull: false},
    comment: {type: DataTypes.STRING, allowNull: false},
})*/

const ReviewsInfo = new mongoose.Schema({
    id: {type: Number, autoIndex: true},
    deviceId: {type: Number, unique: true},
    userName: {type: String,  unique: true},
    positive: {type: String, unique: true},
    negative: {type: String, unique: true},
    rate: {type: Number, unique: true},
    comment: {type: String, unique: true},
})


/*const TypeBrand = sequelize.define('type_brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})*/

const TypeBrand = new mongoose.Schema({
    id: {type: Number, autoIndex: true},
})


/*User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

Type.hasMany(Device)
Device.belongsTo(Type)

Brand.hasMany(Device)
Device.belongsTo(Brand)

Device.hasMany(Rating)
Rating.belongsTo(Device)

Device.hasMany(BasketDevice)
BasketDevice.belongsTo(Device)

Device.hasMany(DeviceInfo, {as: 'info'});
DeviceInfo.belongsTo(Device)

Device.hasMany(ReviewsInfo);
ReviewsInfo.belongsTo(Device)

Type.belongsToMany(Brand, {through: TypeBrand })
Brand.belongsToMany(Type, {through: TypeBrand })*/

export default mongoose.model("User", UserSchema )

/*module.exports = {
    User,
    Basket,
    BasketDevice,
    Device,
    Type,
    Brand,
    Rating,
    TypeBrand,
    DeviceInfo,
    ReviewsInfo
}*/
