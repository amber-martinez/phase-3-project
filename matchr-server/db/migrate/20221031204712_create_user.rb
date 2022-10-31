class CreateUser < ActiveRecord::Migration[6.1]
  def change

    create_table :users do |t|
      t.string :first_name
      t.string :gender
      t.integer :age
      t.string :location
      t.string :interest_1
      t.string :interest_2
      t.string :interest_3
      t.string :profile_photo_link
      t.timestamps
    end

  end
end
