class CreateSpaceInvaders < ActiveRecord::Migration[6.0]
  def change
    create_table :space_invaders do |t|
      t.string :player_name
      t.integer :stats
      t.integer :lives
      t.integer :time

      t.timestamps

    end
  end
end

