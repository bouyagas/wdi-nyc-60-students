def fibonacci(max)
  arr = [1, 2]
  i = 2
  sum = 3
  while sum < max
    arr.push(arr[i-2] + arr[i-1])
    sum =
    i += 1
  end

  puts arr
end

fibonacci(100)


  # j = 0
  # even_sum = 0
  # while j < arr.length
  #   if arr[j]%2 == 0
  #     even_sum += arr[j]
  #   end
  #   puts even_sum
  # end
