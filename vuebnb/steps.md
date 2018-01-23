## Steps to run the project

In **/Users/jgarci09/Homestead** run:

`vagrant up`

Then, I've setting up the project using:

`vagrant ssh`

Within the ssh:

`cd ~/projects/vuebnb`
`php artisan --version`
`php artisan key:generate`
`composer install`

Exiting the ssh, and then, in my machine **/Users/jgarci09/Homestead** run:

`vagrant provision`

And go to [http://vuebnb.test/](http://vuebnb.test/)

When you finish, run:

`vagrant halt`


### To build the project

In **/Users/jgarci09/workspace/vue-projects/Full-Stack-Vue.js-2-and-Laravel-5/vuebnb** run:

`npm run dev`

