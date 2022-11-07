class CreateCurrentLoginInput < ActiveRecord::Migration[6.1]
  def change

    # Input.destroy_all

    create_table :inputs do |t|
      t.string :email
      t.string :password
      t.timestamps
    end

  end
end
