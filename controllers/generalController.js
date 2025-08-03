export const home = (req, res) => {
    res.send('Welcome to our API!');
};

export const heavyTask = (req, res) => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
        result += i;
    }
    res.json({ result });
};

export const getData = (req, res) => {
    res.json({ data: 'This will fail from browser due to CORS' });
};

export const getAsyncData = async (req, res) => {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    resolve({ message: 'Success!' });
                } else {
                    reject(new Error('Random failure'));
                }
            }, 1000);
        });
        res.json(data);
    } catch (error) {
        console.log(error);
          res.status(500).json({ error: 'Something went wrong' });
    }
};
