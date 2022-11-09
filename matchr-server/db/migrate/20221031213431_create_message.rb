class CreateMessage < ActiveRecord::Migration[6.1]
  def change
    
    create_table :messages do |t|
      t.string :recipient
      t.string :message
      t.integer :user_id
      t.timestamps
    end

  end
end
