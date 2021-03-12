class CreateOffsprings < ActiveRecord::Migration[6.0]
  def change
    create_table :offsprings do |t|
      t.string :year
      t.string :sex
      t.string :sire
      t.references :horse, null: false, foreign_key: true

      t.timestamps
    end
  end
end
