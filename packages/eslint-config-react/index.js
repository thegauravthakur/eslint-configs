module.exports = {
    extends: ['airbnb', 'airbnb/hooks', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'prettier/prettier': ['error'],
    },
};
