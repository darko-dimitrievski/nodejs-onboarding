const axios = require('axios');

const getCryptoRates = async (req, res) => {
  const symbols = ['bitcoin', 'ethereum', 'solana', 'cardano', 'tron'];

  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: symbols.join(','),
        vs_currencies: 'usd',
      },
    });

    const prices = response.data;

    res.status(200).json(prices);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch rates' });
  }
};

module.exports = {
  getCryptoRates,
};
