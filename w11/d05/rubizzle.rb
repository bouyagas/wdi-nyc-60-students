class Cars
  attr_accessor :make, :model, :year, :color, :miles

  def initialize(make, model, year, color)
    @make = make
    @model = model
    @year = year
    @color = color
    @miles = 0
    @paint
  end

  def seen_another_year
    @miles += 15000
  end

  def details
    "This #{@year} #{@make} #{@model} has #{@miles} miles on it."
  end

  def paint(color)
    @color = color
    ahh_fresh_paint(color)
  end

  def ahh_fresh_paint(color)
    puts "The new #{color} color was a good choice!"
  end

end
