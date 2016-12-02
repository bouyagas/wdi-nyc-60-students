class Wholphin

  attr_accessor :name, :has_glasses, :likes, :skills

  def initialize(name, has_glasses, likes, skills)
    @name = name
    @has_glasses = has_glasses
    @likes = likes
    @skills = skills
  end

  def name=(name)
    @name = name
  end

  def has_glasses?
    @has_glasses
  end

  def skills
    @skills
  end

  def likes
    @likes
  end

  private

  def talk
    "I really like Slither.io"
  end

end
