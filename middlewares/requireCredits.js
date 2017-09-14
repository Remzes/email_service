module.exports = (req, res, next) => {
    if (req.user.credits < 1) {
        return res.state(403).send({error: "You don't have enough credits"});
    }

    next();
};