const got = require('@/utils/got');
const cheerio = require('cheerio');

module.exports = async (ctx) => {
    const category = ctx.params.category ?? '';
    const rootUrl = `https://tigg.cc/type`;
    const currentUrl = `${rootUrl}/${category}`;
    const response = await got({
        method: 'get',
        url: currentUrl,
    });
    const $ = cheerio.load(response.data);
    const list = $('#tig-list-container article');
    const items = list
        .map((index, item) => ({
            title: $(item).find('h3 > a').text().trim() + ' - ' + $(item).find('h3 > span > a').text().trim(),
            description: $(item).find('div.tig-detail-text').html(),
            link: $(item).find('h3 > a').attr('href'),
        }))
        .get();
    ctx.state.data = {
        title: $('head > title').text(),
        link: currentUrl,
        description: '发现有趣有用的互联网',
        item: items,
    };
};
