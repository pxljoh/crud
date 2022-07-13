const knex=require("./knex");

function createUser(_user){
    return knex("user").inser(_user);
};

function getAllUsers(){
    return knex("user").select("*");
};

function deleteUser(_id){
    return knex("user").where("id", _id).del()
}

function updateUser(_id, _user){
    return knex("user").where("id", _id).update(_user);
}

module.exports={
    createUser,
    getAllUsers,
    deleteUser,
    updateUser
}