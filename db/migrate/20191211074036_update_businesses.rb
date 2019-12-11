class UpdateBusinesses < ActiveRecord::Migration[6.0]
  def change
    remove_index :businesses, column: :name
    add_index :businesses, :name
  end
end
