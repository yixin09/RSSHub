module.exports = {
    'engineeringblogs.xyz': {
        _name: 'engineeringblogs',
        irs: [
            {
                title: '510 Engineering Blogs',
                docs: 'https://docs.rsshub.app/routes/bbs#zuvio',
                source: ['/student5/chickenM/articles/:board', '/student5/chickenM/articles'],
                target: (params) => `/zuvio/student5${params.board ? `/${params.board}` : ''}`,
            },
        ],
    },
};
