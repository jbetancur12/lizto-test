# Test

CRUD in Laravel and Vue3

-   [Demo](http://lizto.betancurdev.tk)

## Environment

-   Laravel 8
-   PHP 7.3 | 8.0

## Installation

```bash
npm install
composer install
```

## Usage

Copy the .env.example with the name .env and change the following data with your database data:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

Then run the command:

```bash
php artisan migrate
```

And run the project

```bash
php artisan serve
```

It's good to run the following command, since every time you make a change in JS, it builds the changes.

```bash
npm run watch
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
