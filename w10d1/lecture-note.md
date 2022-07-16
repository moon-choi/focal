## faker ruby

$ raills new inventions -- api
$ cd inventions

boot up puma (webserver)

# byebug:

it stops the app

## question

what is puma:
what does webpacker do:

what does dispatcher do?
calls particular method
abstracted behind the scenes, we program router and controller
i need to pass it to the particular controller

## Gem file :

contains the info about dependency

$ bundle install

## starting web console:

$ rails c

$ exit

$ bin/rails g (bin -- rails v.6 doesn't need bin)
$ rails g

--

# fixtures:

hard coded data in testng

--

# tables: plular

# models: singular

--

# migrations always run alphabetical order

--

# Symbols are light weight object

light weight strings

- t.references :invention, foreign_key: true, index: true
  without index, we have to look at everything

index: creates a separate table.

- every integer value has times method

e.g.
10000.times do
Invention.create (
name: xx,
url: yy,
)
end

ModelName.all
=== select \* from

.sample: choose random element in array

# recommend writing both

@@ one to many relation
class Invention
has_many: mottos
end

class Motto
belongs_to: invention
end

@@ one to one relation:
has_one: in both files

## Rails.application.routes.draw do

get 'login', to: 'users#show'
=== same as
get 'login', action: :show, controller: 'users'

end

$ rails routes

--

you dont want a post request for :new

generally post is for

:create

## post gets handed off to create method automatically

when you do a form.submit
it automatically just goes to #create.

--

# how to make rail routing more redable

bin/rails routes

GET /inventions(.:format)

:format === parameter
. is a part of url

.html

/inventions(.html)
/inventions(.json)

==

controller.rb

def index-> it is doing res.render

## STEPS

1. Router: set up
2. Controller: define the method (#index, #create, #new)
3. View: create view

// controller automagically passes instance variables to view, without res.render or templateVars

controller.rb
inside def index end

-> create instance varialble

//3 ways link_to
1st arg(text), 2nd arg(destination)

1. '"/inventions"'
2. 'inventions_path'
3. '[:inventions]'
   better than <a href>

@inventions

--

## nested

resources :inventions do
resources :mottos
end

--> inventions/:invention_id/mottos

## ??? subrouters for mottos are handed off to mottos controller, not inventions controller.

# rails g scaffold blogposts

- controller
- views
- helper
- test
- json.jbuilder
- .scss
- scaffolds.scss
