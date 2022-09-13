class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  get '/movies' do
    movies = Movie.all.order(:title).limit(10)
    movies.to_json
  end
  # get '/movies/:id' do
  #   movies = Movie.find(params[:id])
  #   movies.to_json
  # end

  get '/reviews/:movie_id' do
    review = Review.where(movie_id: params[:movie_id])
    reviews.to_json
  end
  
  get '/movies/:category' do
    movie = Movie.where(genre_id: params[:category])
    movie.to_json
  end
  post '/reviews/:id' do
    review = Review.create(
      score: params[:score],
      comment: params[:comment],
      movie_id: params[:movie_id],
      user_id: params[:user_id]
    )
    review.to_json
  end

  delete '/reviews/:id' do
    review = Review.find(params[:id])
    review.destroy
    review.to_json
  end

  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(
      score: params[:score],
      comment: params[:comment]
    )
    review.to_json
  end
end
