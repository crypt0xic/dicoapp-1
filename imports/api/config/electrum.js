let electrumServers = { //by default KMD, BTC and LTC supported
    KMD: {
        address: '46.4.87.18',
        port: 10001,
        proto: 'tcp',
        txfee: 0,
        coin: 'KMD',
        altserverList: [
            'electrum1.cipig.net',
            'electrum2.cipig.net'
        ],
    },
    BTC: {
        address: 'electrum.hsmiths.com',
        port: 50001,
        proto: 'tcp',
        txfee: 10000,
        coin: 'BTC',
        altserverList: [
            'helicarrier.bauerj.eu'
        ],
    },
    dICOtoken: {
        address: '159.65.91.235',
        port: 10801,
        proto: 'tcp',
        txfee: 10000,
        coin: 'EQL',
        altserverList: [
            '167.99.204.42'
        ],
    }
};

module.exports = electrumServers;
