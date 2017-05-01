class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :tagline
      t.string :url
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
