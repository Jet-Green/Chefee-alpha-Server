module.exports = class UserDto {
    email;
    id;
    isActiovated;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
}