# Section 2

# The file should prompt you for your age. (Research: $stdin.gets.chomp)
puts "How old are you?"

age = $stdin.gets.chomp.to_i

# If you are 21 or older, it should output You cool., otherwise, Time to go nite nite.
if age >= 21
  puts "You cool..."
else
  puts "Time to go nite nite."
end

# Write the necessary code so when you run ruby can_drink.rb the output will be:
#   How old are you?
#   21
#   You cool.
# OR
#   How old are you?
#   20
#   Time to go nite nite.

# output I can do this! 100 times with no more than 3 lines of code.
100.times { puts "I can do this!" }


# define a function that outputs the class and object id of the argument passed.
def class_function(something)
  puts "Class: #{something.class}, Object ID: #{something.object_id}"
end

# define a function for each operation:

# adds two numbers
def add_em(a, b)
  return a + b
end

# subtract two numbers
def subtract_em(a, b)
  return a - b
end

# divide two numbers
def divide_em(a, b)
  return a / b
end

# multiply two numbers
def multiply_em(a, b)
  return a * b
end

# create a function that breaks up a sentence into words
def break_it(sentence)
  arr = sentence.split(' ')
  arr.each do |word|
    puts word
  end
end

# Create an array with 5 movie titles, then create a function that sorts the array of movie titles
movies = ["Zoolander", "Inside Out", "A Knight's Tale", "Forgetting Sarah Marshall", "Elf"]

def movie_sorter(arr)
  arr.sort
end


# Section 3

# Create an array with 5 drink names, then create a function returns a random drink
drinks = ["Tequila Sunrise", "Pina Colada", "Bellini", "Margarita", "Dark and Stormy"]

def get_swashted(arr)
  return arr[rand(arr.length)]
end

# OR

def get_drink(arr)
  arr.sample
end

# Create 4 Hashes/Objects with at least 5 properties that represent: (You can nest objects and/or arrays )

# yourself.
# your favorite TV show.
# an Instagram picture.
# a Facebook friend.

about_me = [
  { name: "Krystya", show: "The Americans", insta: "📸", fb_friend: "Sabrina Mesa"},
  { name: "Sabrina", show: "Game of Thrones", insta: "🐱", fb_friend: "Krystyna Malewski"},
  { name: "Synclair", show: "Black Mirror", insta: "💻", fb_friend: "Kieran"},
  { name: "Kieran", show: "Peep Show", insta: "🔮", fb_friend: "Synclair"}
]

# Create a function that returns the largest number in an array of numbers
numbers = [7, 200, 1, -18, -3000]

def large(arr)
  arr.max
end

# Implement a FizzBuzz solution
def fizzbuzz(num)
  i = 1
  while i <= num
    if i%3 == 0 && i%5 == 0
      puts "FizzBuzz"
      i += 1
    elsif i%3 == 0
      puts "Fizz"
      i += 1
    elsif i%5 == 0
      puts "Buzz"
      i += 1
    else
      puts i
      i += 1
    end
  end
end
