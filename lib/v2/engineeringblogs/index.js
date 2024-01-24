const got = require('@/utils/got');
const host = 'https://engineeringblogs.xyz/';
const cheerio = require('cheerio');

module.exports = async (ctx) => {
    const response = await got(host);
    const data = response.body;
    const $ = cheerio.load(data);
    const list = $('div.items div.item');
    ctx.state.data = {
        title: $('head > title').text(),
        link: host,
        description: '510 Engineering Blogs',
        item: list
            .map((index, item) => ({
                title: $(item).find('div > a').text().trim(),
                description: '',
                link: $(item).find('div > a').attr('href'),
            }))
            .get(),
    };
};
