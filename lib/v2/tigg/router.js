module.exports = (router) => {
    router.get('/type/:category?', require('./index'));
};
