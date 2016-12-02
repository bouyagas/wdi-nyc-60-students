kanye_records = [
{ year: 2016, title: "The Life of Pablo" },
{ year: 2013, title: "Yeezus" },
{ year: 2011, title: "Watch the Throne" },
{ year: 2010, title: "My Beautiful Dark Twisted Fantasy" },
{ year: 2008, title: "808s and Heartbreak" },
{ year: 2007, title: "Graduation" },
{ year: 2005, title: "Late Registration" },
{ year: 2004, title: "The College Dropout" }
]

# print the name of every Kanye record
kanye_records.each{ |rec| puts rec[:title]}

# print the year every Kanye record was released
kanye_records.each{ |rec| puts rec[:year]}

# look into the future and add a forthcoming Kanye record into our array. It should be released in 2017 and have a title that is completely asinine.
kanye_records.push({ :year => 2017, :title => "Completely asinine"})

# iterate through Kanye's record collection and print out the titles of all the records released after Kanye's ego exploded (this happened in 2007).
kanye_records.each do |rec|
  if rec[:year] > 2007
    puts "#{rec[:title]}: #{rec[:year]}"
  end
end

# another solution
puts kanye_records.select{ |rec| rec[:year] > 2007}

# iterate through the collection. For each record, print out a sentence detailing each record. For example, " 'Graduation' was released in 2007"
kanye_records.each do |rec|
  puts "'#{rec[:title]}' was released in #{rec[:year]}"}
end

# iterate through collection. add a key value pair to each record with the key as :label and the value as "def jam".
kanye_records.each do |rec|
  rec[:label] = "def jam"}
end

# iterate through the collection. if a record's title contains more than 15 letters, print 'that's a long title' to the screen.
kanye_records.each do |rec|
  if rec[:title].length > 15
    puts "#{rec[:title]}: That's a long title"
  end
end

# iterate through the collection. replace the letter 'o' in each record title with the number 0.
kanye_records.each do |rec|
  rec[:title].gsub(/o/, '0')
end

