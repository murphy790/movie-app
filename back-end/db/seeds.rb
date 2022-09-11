puts "🌱 Seeding spices..."
30.times do |num|
    pic_id = num.to_s
    path = "https://picsum.photos/id/" + pic_id +"/200/300"
    puts path
    Movie.create(title: Faker::Movie.title,overview: Faker::Movie.quote,release_date: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now, format: :long),vote_average: rand(1..10),poster_path: path , genre_id: rand(1..10))

end

10.times do
    Genre.create(name: Faker::Book.genre)
end

# Seed your database here
# API_KEY = "&api_key=b43cd0618a0928101b9018dd947ba5f5";
# base_url = "https://api.themoviedb.org/3";

# kids_url ="https://api.themoviedb.org/3/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc/&api_key=b43cd0618a0928101b9018dd947ba5f5"
# trending_url ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b43cd0618a0928101b9018dd947ba5f5"
# drama_url = "https://api.themoviedb.org/discover/movie?with_genres=18&primary_release_year=20143&api_key=b43cd0618a0928101b9018dd947ba5f5"
# comedy_url = "https://api.themoviedb.org/3/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&api_key=b43cd0618a0928101b9018dd947ba5f5"

# # iterate over each movie
# movies.each do |movie|
#   # make a request to the endpoint for the individual movie:
#   response = RestClient.get "https://api.themoviedb.org/discover/movie?with_genres=18&primary_release_year=20143&api_key=b43cd0618a0928101b9018dd947ba5f5/#{movie}"

#   # the response will come back as a JSON-formatted string.
#   # use JSON.parse to convert this string to a Ruby hash:
#   movie_hash = JSON.parse(response)

#   # create a movie in the database using the data from this hash:
#   Movie.create(
#     title: spell_hash["title"],
#     overview: movie_hash["overview"],
#     release_date: movie_hash["release_date"],
#     vote_average: movie_hash["vote_average"]
#   )
# end

puts "✅ Done seeding!"
