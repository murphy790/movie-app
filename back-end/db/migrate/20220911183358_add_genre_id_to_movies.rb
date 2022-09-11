class AddGenreIdToMovies < ActiveRecord::Migration[6.1]
  def change
    add_column :movies, :genre_id, :string 
  end
end
