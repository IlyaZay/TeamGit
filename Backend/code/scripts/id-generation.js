

module.exports.newId = function(newOne, post){
    if (!post) {newOne.id = 1} else {
        newOne.id = post.id;
        newOne.id++;
    };
    return newOne;
}